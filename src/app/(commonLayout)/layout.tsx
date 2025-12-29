import NavWrapper from "@/components/shared/NavWrapper";
import PublicFooter from "@/components/shared/PublicFooter";

export const dynamic = "force-dynamic";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavWrapper />
      <div>{children}</div>
      <PublicFooter />
    </>
  );
};

export default CommonLayout;
