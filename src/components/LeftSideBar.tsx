import { LuCalendar, LuHome, LuInbox, LuSearch, LuSettings } from 'react-icons/lu'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger
} from './ui/sidebar'

const LeftSideBar = () => {

	const items = [
		{
			title: "Home",
			url: "#",
			icon: LuHome,
		},
		{
			title: "Inbox",
			url: "#",
			icon: LuInbox,
		},
		{
			title: "Calendar",
			url: "#",
			icon: LuCalendar,
		},
		{
			title: "Search",
			url: "#",
			icon: LuSearch,
		},
		{
			title: "Settings",
			url: "#",
			icon: LuSettings,
		},
	]

	return (
		<Sidebar >
			<SidebarHeader className="border-b-2 rounded-lg flex flex-row items-center">
        <SidebarTrigger className="bg-slate-200" />
        Chat History
      </SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
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

export default LeftSideBar