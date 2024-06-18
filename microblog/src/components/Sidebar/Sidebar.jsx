import {  Box, Flex, Link, Text, Tooltip, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BsFillPhoneFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from './SIdebarItems';


const Sidebar = () => {

  
  const {handleLogout, isLoggingOut} = useLogout()
  return (
    <Box
      height={"100vh"}
      //borderRight={"20px solid"}
      borderColor={"aqua"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >

      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
          <Text fontSize="xl" fontWeight="bold" color="Aqua">dkBloG</Text>
        </Link>
        <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "Aqua",
          }}
          w={10}
          cursor={"pointer"}
          fontSize="xl"
          color="Aqua"
        >
          <BsFillPhoneFill />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        {/* выход */}
        <Tooltip
          hasArrow
          label={"Выход"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAplha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <BiLogOut size={25} />
            <Button display={{ base: "none", md: "block",}} color={"red"} variant={"ghost"} _hover={{bg:"transparent"}} isLoading={isLoggingOut}> 
              Выход
            </Button>
          </Flex>
        </Tooltip>
      </Flex>

    </Box >
  );
};

export default Sidebar;