import { Button, Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
        <Text fontSize="xl" fontWeight="bold" color="Aqua">dkBloG</Text>
        <Flex gap={4}>
          <Link to='/auth'>
            <Button colorScheme={"teal"} variant={"solid"} size={"sm"} color="black">
              Войти
            </Button>
          </Link>
          <Link to='/auth'>
            <Button  variant={"outline"} size={"sm"} color="white">
              Зарегистрироваться
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
