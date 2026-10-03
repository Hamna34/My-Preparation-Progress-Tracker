import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Box>
      <Sidebar />

      <Box
        ml="250px"
        minH="100vh"
        bg="gray.50"
        p="8"
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;