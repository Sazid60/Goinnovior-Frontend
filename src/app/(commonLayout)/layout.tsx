
import NavWrapper from "@/components/shared/NavWrapper";
import PublicFooter from "@/components/shared/PublicFooter";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavWrapper/>
            <div>{children}</div>
            <PublicFooter />
        </>
    );
};

export default CommonLayout;