
import AddProductDialog from "@/components/modules/Home/AddProductDialog";
import AdminCard from "@/components/modules/Admin/AdminCard";
import { getAllProducts } from "@/services/product/product";

const ManageProductsPage = async () => {
    const products = await getAllProducts();

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 py-12 text-lg">No products found.</div>
                ) : (
                    products.map((product) => (
                        <AdminCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ManageProductsPage;