import { AppSidebar } from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function DashboardLayout() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />  
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}
