/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputFieldError from "@/components/shared/InputFieldError";
import { FileText, Mail, MapPin, Video } from "lucide-react";
import { updateBanner } from "@/services/banner/banner";

interface UpdateBannerFormProps {
  banner: {
    id: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    video: string;
  };
  onSuccess?: () => void;
}

const UpdateBannerForm = ({ banner, onSuccess }: UpdateBannerFormProps) => {
  const [formState, setFormState] = useState({
    title: banner.title,
    description: banner.description,
    email: banner.email,
    phone: banner.phone,
    video: null as File | null,
  });
  const [dirty, setDirty] = useState(false);
  const [state, formAction, isPending] = useActionState(updateBanner, null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const successToastShownRef = useRef(false);

  useEffect(() => {
    if (!state) {
      successToastShownRef.current = false;
      return;
    }
    if (state.success && !successToastShownRef.current) {
      successToastShownRef.current = true;
      toast.success(state.message || "Banner updated successfully!");
      if (onSuccess) onSuccess();
    } else if (state.success === false) {
      toast.error(state.message || "Failed to update banner.");
    }
  }, [state, onSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target as any;

    if (type === "file" && files && files[0]) {
      const file = files[0];
      const MAX_SIZE = 4.5 * 1024 * 1024;
      if (file.size > MAX_SIZE) {
        toast.error("Video file size must be less than 4.5 MB");
        e.target.value = "";
        return;
      }
    }

    setFormState((prev) => ({
      ...prev,
      [name]: type === "file" ? (files && files[0] ? files[0] : null) : value,
    }));
    setDirty(true);
  };

  const handleSubmit = (formData: FormData) => {
    formData.append("id", banner.id);
    return formAction(formData);
  };

  const labelClass = "block text-sm font-semibold text-neutral-700 mb-1.5 ml-1";
  const inputClass =
    "w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400 shadow-sm";
  const iconClass =
    "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 z-10";

  return (
    <form ref={formRef} action={handleSubmit} className="w-full space-y-5">
      <div>
        <label className={labelClass}>Title</label>
        <div className="relative group">
          <FileText className={iconClass} />
          <Input
            name="title"
            type="text"
            placeholder="Banner title"
            className={inputClass}
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="mt-1">
          <InputFieldError field="title" state={state} />
        </div>
      </div>

      <div>
        <label className={labelClass}>Description</label>
        <div className="relative group">
          <FileText className="absolute left-4 top-4 w-4 h-4 text-neutral-400 z-10" />
          <textarea
            name="description"
            placeholder="Banner description..."
            rows={3}
            className="w-full pl-12 pt-3 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400 outline-none text-sm shadow-sm"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        <div className="mt-1">
          <InputFieldError field="description" state={state} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className={labelClass}>Email</label>
          <div className="relative group">
            <Mail className={iconClass} />
            <Input
              name="email"
              type="email"
              placeholder="example@email.com"
              className={inputClass}
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-1">
            <InputFieldError field="email" state={state} />
          </div>
        </div>

        <div className="flex-1">
          <label className={labelClass}>Phone/Location</label>
          <div className="relative group">
            <MapPin className={iconClass} />
            <Input
              name="phone"
              type="text"
              placeholder="Location or phone number"
              className={inputClass}
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mt-1">
            <InputFieldError field="phone" state={state} />
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>Video File (Optional)</label>
        <div className="relative group">
          <Video className={iconClass} />
          <Input
            ref={fileInputRef}
            name="videoFile"
            type="file"
            accept="video/*"
            className="w-full h-11 md:h-12 pl-12 pt-2 md:pt-3 bg-white border-none rounded-xl text-neutral-400 text-xs md:text-sm file:hidden cursor-pointer shadow-sm"
            onChange={handleChange}
          />
        </div>
        <p className="mt-1 text-xs text-neutral-500 ml-1">
          Leave empty to keep current video. Maximum file size: 4.5 MB
        </p>
        <div className="mt-1">
          <InputFieldError field="video" state={state} />
        </div>
      </div>

      <Button
        className="w-full h-12 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/10 active:scale-95 disabled:opacity-70"
        type="submit"
        disabled={isPending || !dirty}
      >
        {isPending ? "Updating..." : "Update Banner"}
      </Button>
    </form>
  );
};

export default UpdateBannerForm;
