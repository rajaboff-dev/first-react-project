import { TbCalendar, TbHome, TbInbox, TbSearch, TbSettings } from "react-icons/tb"
import { Link } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: TbHome,
  },
  {
    title: "Inbox",
    url: "/dashboard/inbox",
    icon: TbInbox,
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: TbCalendar,
  },
  {
    title: "Search",
    url: "/dashboard/search",
    icon: TbSearch,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: TbSettings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
