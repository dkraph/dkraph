import { Box,  VStack,  Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup"
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid Aqua"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            cursor="pointer"
            color="Aqua"
          >
            dkBloG
          </Text>
                 
          {isLogin ? <Login /> : <Signup />}
         
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"Aqua"} />
            <Text mx={1} color={"teal"}>
              ИЛИ
            </Text>
            <Box flex={2} h={"1px"} bg={"Aqua"} />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Войти" : "Зарегистрироваться"}/>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "У вас ещё нет аккаунта в этом замечательном приложении?" : "У вас уже есть аккаунт?"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
						{isLogin ? "Зарегистрируйтесь" : "Войти"}
					</Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;