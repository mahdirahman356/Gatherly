import DashboardNavbarContent from "./DashboardNavbarContent";
import { getUser } from "@/services/auth/getUser";

const DashboardNavbar = async () => {
  const user = await getUser()

    return (<DashboardNavbarContent
        userInfo={user}
        // navItems={navItems}
    />);
};

export default DashboardNavbar;