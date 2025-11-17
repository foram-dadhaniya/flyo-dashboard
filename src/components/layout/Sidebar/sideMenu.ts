import {
  Dashboard,
  LockOpen,
  Person,
  Security,
  Settings,
} from "@mui/icons-material";

// 🧩 Define menu item types
export interface MenuChild {
  title: string;
  icon: React.ElementType;
  path: string;
}

export interface MenuItem {
  title: string;
  icon: React.ElementType;
  path?: string;
  children?: MenuChild[];
}

export interface MenuSection {
  category?: string;
  items: MenuItem[];
}

// ✅ Use the types when declaring sideMenu
export const sideMenu: MenuSection[] = [
  {
    category: "Main Menu",
    items: [
      {
        title: "Dashboard",
        icon: Dashboard,
        path: "/",
      },
      {
        title: "Device Management",
        icon: Dashboard,
        path: "/",
      },
      {
        title: "Data Monitoring",
        icon: Dashboard,
        path: "/",
      },
      {
        title: "Alerts & Notification",
        icon: Dashboard,
        path: "/",
      },
      {
        title: "Reports",
        icon: Dashboard,
        path: "/",
      },
      {
        title: "Users & Roles",
        icon: Dashboard,
        path: "/",
      },
       {
        title: "Chat",
        icon: Dashboard,
        path: "/",
      },
       {
        title: "Email",
        icon: Dashboard,
        path: "/",
      }
    ],
  },
      {
    category: "Components",
    items: [
      {
        title: "UI Elements",
        icon: LockOpen,
        children: [{ title: "Sign Up", icon: Person, path: "/signup" }],
      },
      {
        title: "Charts",
        icon: Dashboard,
        path: "/",
      },
       {
        title: "Forms",
        icon: LockOpen,
        children: [
            { title: "Basic Elements", icon: Person, path: "/signup" },
            { title: "Validation", icon: Person, path: "/signup" },
            { title: "Wizard", icon: Person, path: "/signup" },
            { title: "File Uploads", icon: Person, path: "/signup" },
        ],
      },
      {
        title: "Tables",
        icon: LockOpen,
        children: [
            { title: "Static Tables", icon: Person, path: "/signup" },
            { title: "Data Tables", icon: Person, path: "/signup" },
            { title: "Wizard", icon: Person, path: "/signup" },
            { title: "File Uploads", icon: Person, path: "/signup" },
        ],
      },
      {
        title: "Maps",
        icon: LockOpen,
        children: [
            { title: "Map 1", icon: Person, path: "/signup" },
            { title: "Map 2", icon: Person, path: "/signup" },
        ],
      },
       {
        title: "Icons",
        icon: LockOpen,
        children: [
            { title: "Icon 1", icon: Person, path: "/signup" },
            { title: "Icon 2", icon: Person, path: "/signup" },
        ],
      },
    ],
  },
    {
    category: "Pages",
    items: [
      {
        title: "Authentication",
        icon: LockOpen,
        children: [{ title: "Sign Up", icon: Person, path: "/signup" }],
      },
       {
        title: "Utility",
        icon: LockOpen,
        children: [
            { title: "FAQ", icon: Person, path: "/signup" }
        ],
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        title: "Settings",
        icon: Settings,
        children: [
          { title: "Profile", icon: Person, path: "/profile" },
          { title: "Privacy", icon: Security, path: "/privacy" },
        ],
      },
      {
        title: "Help",
        icon: Dashboard,
        path: "/",
      }
    ],
  }
];
