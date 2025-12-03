
import { getDashboardNavItemsByRole } from "@/lib/dashboardNavItems.config";
import DashboardSidebarContent from "./DashboardSidebarContent";

import { getUser } from "@/services/auth/getUser";

const DashboardSidebar = async () => {

  const user = await getUser()
  const navItems = getDashboardNavItemsByRole(user?.role)

  return (
    <DashboardSidebarContent
      userInfo={user}
      navItems={navItems}
    />
  );
};

export default DashboardSidebar;