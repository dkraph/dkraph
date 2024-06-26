import { Container, Flex, VStack, Box} from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
	return (
		<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
			<Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>
					<VStack spacing={4} align={"stretch"}>
						<AuthForm />
						<Box textAlign={"center"} color="Aqua">Создавайте свои микроблоги.</Box>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
};

export default AuthPage;
