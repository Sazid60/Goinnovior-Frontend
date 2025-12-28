"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { registerUser } from "@/services/auth/register";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Image as ImageIcon,
} from "lucide-react";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(registerUser, null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const successToastShownRef = useRef(false);



  useEffect(() => {
    if (!state) successToastShownRef.current = false;
    if (state?.success && !successToastShownRef.current) {
      successToastShownRef.current = true;
      toast.success(state.message || "Account created successfully!");
      formRef.current?.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } else if (state && !state.success) {
      toast.error(state.message || "Failed to create account.");
    }
  }, [state]);


  const inputClass = "w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400";
  const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400";

  return (
    <form ref={formRef} action={formAction} className="w-full space-y-4">

      <div>
        <div className="relative group">
          <User className={iconClass} />
          <Input name="name" type="text" placeholder="Full Name" className={inputClass} />
        </div>
        <div className="mt-1">
          <InputFieldError field="name" state={state} />
        </div>
      </div>
      <div>
        <div className="relative group">
          <Mail className={iconClass} />
          <Input name="email" type="email" placeholder="Email" className={inputClass} />
        </div>
        <div className="mt-1">
          <InputFieldError field="email" state={state} />
        </div>
      </div>
      <div>
        <div className="relative group">
          <Phone className={iconClass} />
          <Input name="contactNumber" type="text" placeholder="Contact Number" className={inputClass} />
        </div>
        <div className="mt-1">
          <InputFieldError field="contactNumber" state={state} />
        </div>
      </div>
      <div>
        <div className="relative group">
          <Lock className={iconClass} />
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full h-11 md:h-12 pl-12 pr-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <div className="mt-1">
          <InputFieldError field="password" state={state} />
        </div>
      </div>
      <div>
        <div className="relative group">
          <ImageIcon className={iconClass} />
          <Input name="profilePhoto" type="file" className="w-full h-11 md:h-12 pl-12 pt-2 md:pt-3 bg-white border-none rounded-xl text-neutral-400 text-xs md:text-sm file:hidden cursor-pointer" />
        </div>
        <div className="mt-1">
          <InputFieldError field="profilePhoto" state={state} />
        </div>
      </div>
      <Button className="w-full h-11 md:h-12 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold text-sm md:text-base rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95" type="submit" disabled={isPending}>
        {isPending ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  );
};

export default RegisterForm;