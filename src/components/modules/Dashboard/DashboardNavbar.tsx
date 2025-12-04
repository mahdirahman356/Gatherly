import { getDashboardNavItemsByRole } from "@/lib/dashboardNavItems.config";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getUser } from "@/services/auth/getUser";

const DashboardNavbar = async () => {
  const user = await getUser()
  const navItems = getDashboardNavItemsByRole(user?.role)

    return (<DashboardNavbarContent
        userInfo={user}
        navItems={navItems}
    />);
};

export default DashboardNavbar;