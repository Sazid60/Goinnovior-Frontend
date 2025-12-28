import { getCookie } from "@/services/auth/tokenHandlers";
import { getUserInfo } from "@/services/auth/getUserInfo";
import PublicNavbar from "./PublicNavbar";
import { UserInfo } from "@/types/user.interface";

export default async function NavWrapper() {
    const accessToken = await getCookie("accessToken");

    let role: string | null = null;
    let user: UserInfo | null = null;

    if (accessToken) {
        try {
            user = await getUserInfo();
            const maybeRole = user?.role;
            if (typeof maybeRole === "string") {
                role = maybeRole.toUpperCase();
            }
        } catch {
            role = null;
            user = null;
        }
    }

    return <PublicNavbar accessToken={accessToken} role={role} user={user} />;
}
