
import AddProductDialog from "@/components/modules/Home/AddProductDialog";

const ManageProductsPage = () => {


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
        </div>
    );
};

export default ManageProductsPage;