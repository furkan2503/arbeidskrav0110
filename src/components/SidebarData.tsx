import { AiFillCaretDown, AiFillCaretUp, AiOutlineHistory, AiOutlineHome, AiOutlineMoneyCollect, AiOutlineUser, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SidebarItem } from "../models/SidebarItem";
import { FaCog } from 'react-icons/fa';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Overview',  
        path: '/overview',
        icon:< AiOutlineHome />,
        iconClosed:< AiFillCaretDown />,
        iconOpened:< AiFillCaretUp />,
        subnav: [
            {
                title: 'Ansatte',
                path: '/overview/users',
                icon: <AiOutlineUser />
            },
            {
                title: 'Kunder',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Prosjekter',  
        path: '/order',
        icon: <AiOutlineFundProjectionScreen />,
      
    },
    {
        title: 'Utstyr',  
        path: '/history',
        icon: <AiOutlineHistory />,
      
    },
    {
        title: 'Configurations',  
        path: '/configurtion',
        icon: <FaCog />,
      
    }
];