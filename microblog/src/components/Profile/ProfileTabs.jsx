import { Box, Flex, Text } from "@chakra-ui/react";
import { Si4Chan } from "react-icons/si";

const ProfileTabs = () => {
	return (
		<Flex
			w={"full"}
			justifyContent={"center"}
			gap={{ base: 4, sm: 10 }}
			fontWeight={"bold"}
		>
			<Flex borderTop={"3px solid yellow"} alignItems={"center"} p='3' gap={1} cursor={"pointer"} color="Aqua">
				<Box fontSize={20}>
					<Si4Chan />
				</Box>
				<Text fontSize={12} display={{ base: "none", sm: "block" }} color="Aqua">
					Микроблогерские публикации
				</Text>
			</Flex>
			
		</Flex>
	);
};

export default ProfileTabs;
