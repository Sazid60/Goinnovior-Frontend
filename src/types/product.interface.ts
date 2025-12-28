export type ProductType = {
    id: string;
    name: string;
    description: string;
    maxPrice: number;
    minPrice: number;
    quantity: number;
    image: string;
    createdAt: string;
    updatedAt: string;
};


export type ProductCreatePayload = {
    name: string;
    description: string;
    minPrice: number;
    maxPrice: number;
    quantity: number;
    image: string;
};


