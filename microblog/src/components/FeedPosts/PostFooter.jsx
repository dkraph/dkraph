import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button, useDisclosure } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { NotificationsLogo, UnlikeLogo, CommentLogo } from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment()
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment)
    setComment("")
  }



  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={3}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>

      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} понравилось
      </Text>
      
      {!isProfilePage && (
        <>
          <Text fontSize='sm' fontWeight={700}>
            {creatorProfile?.username}{" "}
            <Text as='span' fontWeight={400} fontSize={16}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text fontSize='sm' color={"gray"} cursor={"pointer"} onClick={onOpen}>
              Показать все {post.comments.length} комментарии
            </Text>
          )}
          {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null}
        </>
      )}

      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup borderBottom="aqua" width="100%">
            <Input variant={"flushed"} placeholder={"Написать что-то..."} fontSize={14}
              onChange={(e) => setComment(e.target.value)} value={comment} ref={commentRef} />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"Aqua"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >Опубликовать</Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  )
}


export default PostFooter