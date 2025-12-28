/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InputFieldError from "@/components/shared/InputFieldError";
import { Package, FileText, CircleDollarSign, Layers, Image as ImageIcon } from "lucide-react";
import { updateProduct } from "@/services/product/product";

interface UpdateProductFormProps {
    product: {
        id: string;
        name: string;
        description: string;
        minPrice: number;
        maxPrice: number;
        quantity: number;
        image: string;
    };
    onSuccess?: () => void;
}

const UpdateProductForm = ({ product, onSuccess }: UpdateProductFormProps) => {
    const [formState, setFormState] = useState({
        name: product.name,
        description: product.description,
        minPrice: product.minPrice,
        maxPrice: product.maxPrice,
        quantity: product.quantity,
        image: null as File | null,
    });
    const [dirty, setDirty] = useState(false);
    const [state, formAction, isPending] = useActionState(updateProduct, null);
    const formRef = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!state) return;
        if (state.success) {
            toast.success(state.message || "Product updated successfully!");
            if (onSuccess) onSuccess();
        } else if (state.success === false) {
            toast.error(state.message || "Failed to update product.");
        }
    }, [state, onSuccess]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, files } = e.target as any;
        setFormState((prev) => ({
            ...prev,
            [name]: type === "file" ? (files && files[0] ? files[0] : null) : value,
        }));
        setDirty(true);
    };

    const handleSubmit = (formData: FormData) => {
        formData.append("id", product.id);
        return formAction(formData);
    };

    const labelClass = "block text-sm font-semibold text-neutral-700 mb-1.5 ml-1";
    const inputClass = "w-full h-11 md:h-12 pl-12 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400 shadow-sm";
    const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 z-10";

    return (
        <form ref={formRef} action={handleSubmit} className="w-full space-y-5">
            <div>
                <label className={labelClass}>Product Name</label>
                <div className="relative group">
                    <Package className={iconClass} />
                    <Input name="name" type="text" placeholder="Full name of product" className={inputClass} value={formState.name} onChange={handleChange} />
                </div>
                <div className="mt-1"><InputFieldError field="name" state={state} /></div>
            </div>

            <div>
                <label className={labelClass}>Description</label>
                <div className="relative group">
                    <FileText className="absolute left-4 top-4 w-4 h-4 text-neutral-400 z-10" />
                    <textarea
                        name="description"
                        placeholder="Detailed description..."
                        rows={3}
                        className="w-full pl-12 pt-3 bg-white border-none rounded-xl text-neutral-800 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-teal-400 outline-none text-sm shadow-sm"
                        value={formState.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-1"><InputFieldError field="description" state={state} /></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label className={labelClass}>Min Price</label>
                    <div className="relative group">
                        <CircleDollarSign className={iconClass} />
                        <Input name="minPrice" type="number" placeholder="0.00" className={inputClass} value={formState.minPrice} onChange={handleChange} />
                    </div>
                    <div className="mt-1"><InputFieldError field="minPrice" state={state} /></div>
                </div>

                <div className="flex-1">
                    <label className={labelClass}>Max Price</label>
                    <div className="relative group">
                        <CircleDollarSign className={iconClass} />
                        <Input name="maxPrice" type="number" placeholder="0.00" className={inputClass} value={formState.maxPrice} onChange={handleChange} />
                    </div>
                    <div className="mt-1"><InputFieldError field="maxPrice" state={state} /></div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label className={labelClass}>Quantity</label>
                    <div className="relative group">
                        <Layers className={iconClass} />
                        <Input name="quantity" type="number" placeholder="0" className={inputClass} value={formState.quantity} onChange={handleChange} />
                    </div>
                    <div className="mt-1"><InputFieldError field="quantity" state={state} /></div>
                </div>

                <div className="flex-1">
                    <label className={labelClass}>Product Image</label>
                    <div className="relative group">
                        <ImageIcon className={iconClass} />
                        <Input
                            ref={fileInputRef}
                            name="imageFile"
                            type="file"
                            accept="image/*"
                            className="w-full h-11 md:h-12 pl-12 pt-2 md:pt-3 bg-white border-none rounded-xl text-neutral-400 text-xs md:text-sm file:hidden cursor-pointer shadow-sm"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-1"><InputFieldError field="image" state={state} /></div>
                </div>
            </div>

            <Button
                className="w-full h-12 bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-500/10 active:scale-95 disabled:opacity-70"
                type="submit"
                disabled={isPending || !dirty}
            >
                {isPending ? "Updating..." : "Update Product"}
            </Button>
        </form>
    );
};

export default UpdateProductForm;