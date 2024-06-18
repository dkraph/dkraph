import { Flex, Box, Avatar, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import useFollowUser from "../../hooks/useFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(post.createdBy);

  return (
    <Flex justifyContent="space-between" alignItems="center" w="full" my={2}>
      {creatorProfile && (
        <Flex alignItems="center" gap={2}>
          <Link to={`/${creatorProfile.username}`}>
            <Avatar src={creatorProfile.profilePicURL} alt="user profile pic" size="sm" borderRadius="lg" />
          </Link>
          <Flex fontSize={12} fontWeight="bold" gap="2">
            <Link to={`/${creatorProfile.username}`}>{creatorProfile.username}</Link>
            <Box color="gray.500">{timeAgo(post.createdAt)}</Box>
          </Flex>
        </Flex>
      )}

      <Box cursor="pointer">
        <Button
          fontSize={12}
          color="aqua"
          fontWeight="bold"
          _hover={{ color: "white" }}
          transition="0.2s ease-in-out"
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Отписаться" : "Подписаться"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
