
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from '../components/AppSidebar';

const AppLayout = () => {

  return (
    <SidebarProvider>
      <AppSidebar />
      <div>
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
