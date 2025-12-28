/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import UpdateProductForm from "@/components/update-product-form";

interface UpdateDialogProps {
  product: any;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ProductUpdateDialog = ({ product, open, setOpen }: UpdateDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] bg-neutral-50 border-none rounded-xl p-6">
        <DialogTitle className="text-xl font-bold mb-2">Update Product</DialogTitle>
        <UpdateProductForm product={product} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};