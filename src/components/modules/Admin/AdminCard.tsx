"use client";

import { Eye, Share2, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { ProductUpdateDialog } from "./ProductUpdateDialog";
import { ProductDeleteDialog } from "./DeleteProductDialog";


interface AdminCardProps {
    product: {
        id: string;
        name: string;
        description: string;
        maxPrice: number;
        minPrice: number;
        quantity: number;
        image: string;
    };
    onUpdate?: (id: string) => void;
    onDelete?: (id: string) => void;
}

const AdminCard = ({ product, onDelete }: AdminCardProps) => {
    const [updateOpen, setUpdateOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    return (
        <>
            <div className="group relative p-3 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 w-full h-fit">

                <div className="relative h-64 group-hover:h-80 w-full bg-gray-100 rounded-lg overflow-hidden transition-[height] duration-500 ease-in-out">
                    <Image
                        fill
                        src={product.image}
                        alt={product.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"

                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  
                        priority={false}
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-teal-600 shadow-sm z-10">
                        Stock: {product.quantity}
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md hover:bg-teal-600 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-md hover:bg-teal-600 hover:text-white transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>


                <div className="mt-4 flex flex-col gap-3">
                    <div>
                        <h3 className="text-black text-lg font-semibold font-['Urbanist'] truncate">
                            {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-black text-xl font-bold font-['Urbanist']">
                                ৳ {product.minPrice.toLocaleString()}
                            </span>
                            <div className="w-4 h-0.5 bg-black opacity-20" />
                            <span className="text-black text-xl font-bold font-['Urbanist']">
                                ৳ {product.maxPrice.toLocaleString()}
                            </span>
                        </div>
                    </div>


                    <div className="flex items-center gap-3 w-full">
                        <Button
                            onClick={() => setUpdateOpen(true)}
                            variant="secondary"
                            className="flex-1 bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 border-none rounded h-10 gap-2 text-xs font-bold"
                        >
                            <Pencil className="w-4 h-4" />
                            Update
                        </Button>
                        <Button
                            onClick={() => setDeleteOpen(true)}
                            className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 shadow-none border-none rounded h-10 gap-2 text-xs font-bold transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete
                        </Button>
                    </div>
                </div>
            </div>


            <ProductUpdateDialog
                product={product}
                open={updateOpen}
                setOpen={setUpdateOpen}
            />

            <ProductDeleteDialog
                productId={product.id}
                open={deleteOpen}
                setOpen={setDeleteOpen}
                onSuccess={onDelete}
            />
        </>
    );
};

export default AdminCard;