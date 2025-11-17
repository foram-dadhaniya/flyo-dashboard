import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar/Sidebar"
import { Box } from "@mui/material"
import { Footer } from "./Footer"
import { useState } from "react"

export const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const contentMarginLeft = collapsed ? 70 : 300;

  return (
    <Box display="flex" width="100%" height="100vh">
    <Sidebar collapsed={collapsed} hovered={hovered} setHovered={setHovered} />
    <Box
      sx={{
       flexGrow: 1,
       bgcolor: "#f5f5f5",
       transition: "margin-left 0.3s ease",
       ml: `${contentMarginLeft}px`
      }}
      display="flex" flexDirection="column" flexGrow={1}>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Box component="main" flexGrow={1} p={2}>
        <Outlet />
      </Box>
      <Footer/>
    </Box>
  </Box>
  )
}
