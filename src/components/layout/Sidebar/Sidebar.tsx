import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sideMenu, type MenuSection } from "./sideMenu";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface SidebarProps{
  collapsed: boolean;
  hovered: boolean;
  setHovered: (v: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, hovered, setHovered }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const sidebarWidth = collapsed ? (hovered ? 300 : 70) : 300;

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave= {() => setHovered(false)}
      sx={{
        position: "fixed",
        width: `${sidebarWidth}px`,
        transition: "width 0.3s ease",
        bgcolor: "#1976d2",
        color: "#fff",
        overflowX: "hidden",
        height: "100vh",
        zIndex: 1200,
        boxShadow: hovered ? "2px 0 8px rgba(0,0,0,0.25)" : "none",
      }}
    >
      <Box sx={{ px: 3, py: 1, display: 'flex', gap: 4 }}>
        <Typography variant="h5">
          F
        </Typography>
        <Typography variant="h6">
          Flyo
        </Typography>
      </Box>
      <List>
        {sideMenu.map((section: MenuSection) => (
          <div key={section.category ?? section.items[0].title}>
            {section.category && (
              <ListSubheader component="div" inset>
                {section.category}
              </ListSubheader>
            )}
            {/* Menu Items */}
            {section.items.map((item) => (
              <div key={item.title}>
                {/* If item has no children */}
                {!item.children ? (
                  <ListItemButton component={Link} to={item.path || "#"}>
                    <ListItemIcon>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                ) : (
                  <>
                    {/* Expandable parent item */}
                    <ListItemButton onClick={() => handleToggle(item.title)}>
                      <ListItemIcon>
                        <item.icon />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                      {openDropdown === item.title ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                    {/* Nested children */}
                    <Collapse in={openDropdown === item.title} unmountOnExit>
                      <List component="div" disablePadding>
                        {item.children.map((child) => (
                          <ListItemButton
                            component={Link}
                            to={child.path}
                            key={child.title}
                            sx={{ pl: 4 }}
                          >
                            <ListItemIcon>
                              <child.icon />
                            </ListItemIcon>
                            <ListItemText primary={child.title} />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </List>
    </Box>
  );
};
