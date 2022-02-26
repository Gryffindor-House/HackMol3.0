import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    HStack,
    Link,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter
  } from '@chakra-ui/react';

import About from './about';

const Links = ['About'];
export default function Aboutmodal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (<><HStack spacing={8} alignItems={'center'}>
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <About/>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
    <Button rounded={'full'} onClick={onOpen} >Learn More</Button>
  </Stack>
  </HStack></>

          
    )}
