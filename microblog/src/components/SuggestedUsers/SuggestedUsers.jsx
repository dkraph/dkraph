import { VStack, Flex, Text} from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";

const SuggestedUsers = () => {

  const { isLoading, suggestedUsers } = useGetSuggestedUsers()
  if (isLoading) return null;

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"LightSlateGrey"} >
            Для тебя представлены пользователи:
          </Text>
         
        </Flex>
      )}

      {suggestedUsers.map(user => (
        <SuggestedUser user={user} key={user.id} />
      ))}
      
    </VStack>
  )
}

export default SuggestedUsers