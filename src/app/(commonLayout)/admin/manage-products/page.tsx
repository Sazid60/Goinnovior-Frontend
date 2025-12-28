import AddProductDialog from "@/components/modules/Home/AddProductDialog";
import AdminCard from "@/components/modules/Admin/AdminCard";
import { getAllProducts } from "@/services/product/product";
import Pagination from "@/components/shared/Pagination";
import { queryStringFormatter } from "@/lib/formatters";
import { ProductType } from "@/types/product.interface";

const ManageProductsPage = async ({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {

    const searchParamsObj = await searchParams;
    const queryString = queryStringFormatter(searchParamsObj);


    const response = await getAllProducts(queryString);

    const products = (response?.data as ProductType[]) || [];
    const meta = response?.meta || {};



    const totalPages = Math.ceil(
        (meta?.total || 1) / (meta?.limit || 1)
    );



    return (
        <div className="p-6 container mx-auto">
            <div className="flex items-center justify-between mb-8">
                <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <span className="text-gray-500">Admin</span>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center">
                            <span className="font-semibold text-black">Manage Products</span>
                        </li>
                    </ol>
                </nav>

                <AddProductDialog />

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
                {products.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 py-12 text-lg">
                        No products found.
                    </div>
                ) : (
                    products.map((product) => (
                        <AdminCard key={product.id} product={product} />
                    ))
                )}
            </div>


            <div className="mt-10">
                <Pagination
                    currentPage={meta?.page || 1}
                    totalPages={totalPages}
                />
            </div>

        </div>
    );
};

export default ManageProductsPage;