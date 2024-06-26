import {
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import Comment from "../Comment/Comment";
import usePostComment from "../../hooks/usePostComment";
import { useEffect, useRef } from "react";

const CommentsModal = ({ isOpen, onClose, post }) => {
	const { handlePostComment, isCommenting } = usePostComment();
	const commentRef = useRef(null);
	const commentsContainerRef = useRef(null);
	const handleSubmitComment = async (e) => {
		e.preventDefault();
		await handlePostComment(post.id, commentRef.current.value);
		commentRef.current.value = "";
	};

	useEffect(() => {
		const scrollToBottom = () => {
			commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
		};
		if (isOpen) {
			setTimeout(() => {
				scrollToBottom();
			}, 100);
		}
	}, [isOpen, post.comments.length]);

	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
			<ModalOverlay />
			<ModalContent bg={"#181513"} border={"1px solid gray"} maxW={"600px"}>
				<ModalHeader fontSize="l" bg={"aqua"} color={"black"}>Комментарии</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Flex
						mb={4}
						gap={4}
						flexDir={"column"}
						maxH={"450px"}
						overflowY={"auto"}
						ref={commentsContainerRef}
					>
						{post.comments.map((comment, idx) => (
							<Comment key={idx} comment={comment} />
						))}
					</Flex>
					<form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
						<Input placeholder='Написать' size={"sm"} ref={commentRef} />
						<Flex w={"full"} justifyContent={"flex-end"}>
							<Button type='submit' ml={"auto"} size={"sm"} my={4} isLoading={isCommenting} colorScheme="teal" variant="outline">
								Написать
							</Button>
						</Flex>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CommentsModal;
