
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductForm from "@/components/product-form";



export default function AddProductDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-2 bg-[#14b8a6] hover:bg-[#0d9488] text-white rounded-sm shadow-md transition-all active:scale-95">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[550px] bg-neutral-50 border-none rounded-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-neutral-800">
            Create New Product
          </DialogTitle>
          <p className="text-sm text-neutral-500">
            Fill in the details below to add a new garment to your inventory.
          </p>
        </DialogHeader>

        <div className="py-4">

            <ProductForm onSuccess={() => setOpen(false)} />
        </div>
        
      </DialogContent>
    </Dialog>
  );
}