import React from "react";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
export const SidebarData = [
    {
        title: "Overview",
        icon: <AnalyticsIcon />,
        link: "/overview",
      
        
    },
    {
        title: "Account",
        icon: <AccountCircleIcon />,
        link: "/Account",
        
    },
    {
        title: "logout",
        icon: <LogoutIcon />,
        link: '/logout',
        
    },
    
]