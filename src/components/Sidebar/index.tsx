import { Box, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, useBreakpointValue, DrawerBody } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });


  return isDrawerSidebar ? (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="gray.800" p="4">
          <DrawerCloseButton mt ="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  ) : (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}