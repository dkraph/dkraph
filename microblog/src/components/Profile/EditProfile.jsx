import {
  Avatar,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import useAuthStore from "../../store/authStore";
import usePreviewImg from "../../hooks/usePreviewImg";
import useShowToast from "../../hooks/useShowToast";
import useEditProfile from "../../hooks/useEditProfile";

const EditProfile = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    bio: ""
  });

  const authUser = useAuthStore((state) => state.user);
  const fileRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg()
  const {isUpdating, editProfile} = useEditProfile()
  const showToast = useShowToast()

  const handleEditProfile = async () => {
		try {
			await editProfile(inputs, selectedFile);
			setSelectedFile(null);
			onClose();
		} catch (error) {
			showToast("Ошибка", error.message, "error");
		}
	};

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#181513"} boxShadow={"xl"} border={"1px solid aqua"} mx={3}>
          <ModalHeader fontSize="l" bg={"aqua"} color={"black"}>Настройки профиля</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex bg={"black"}>
              <Stack spacing={4} w={"full"} maxW={"md"} bg={"#181513"} p={6} my={0}>
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                  Настройки
                </Heading>
                <FormControl>
                  <Stack direction={["column", "row"]} spacing={6}>
                    <Center>
                      <Avatar size='xl' src={selectedFile || authUser.profilePicURL}  borderRadius={"lg"}/>
                    </Center>
                    <Center w='full'>
                      <Button w='full' onClick={() => fileRef.current.click()} borderRadius={"lg"} bg={"aqua"} color={"black"}>Измените фотографию</Button>
                    </Center>
                    <Input type='file' hidden ref={fileRef} onChange={handleImageChange} />
                  </Stack>
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Имя</FormLabel>
                  <Input placeholder={"Введите имя"} size={"sm"} type={"text"} borderRadius={"lg"} value={inputs.fullName || authUser.fullName}
                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>Никнейм</FormLabel>
                  <Input placeholder={"Введите никнейм"} size={"sm"} type={"text"} borderRadius={"lg"} value={inputs.username || authUser.username}
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={"sm"}>О себе...</FormLabel>
                  <Input placeholder={"Напииши что-то о себе"} size={"sm"} type={"text"} borderRadius={"lg"} value={inputs.bio || authUser.bio}
                    onChange={(e) => setInputs({ ...inputs, bio: e.target.value })} />
                </FormControl>

                <Stack spacing={6} direction={["column", "row"]}>
                  <Button
                    bg={"red.400"}
                    color={"white"}
                    w='full'
                    size='sm'
                    onClick={onClose}
                  >
                    Отмена
                  </Button>
                  <Button
                    bg={"aqua"}
                    color={"black"}
                    size='sm'
                    w='full'
                    onClick={handleEditProfile}
                    isLoading={isUpdating}
                  >
                    Изменить
                  </Button>
                </Stack>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;
