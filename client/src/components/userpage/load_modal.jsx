import React from 'react';
import {
  Button,
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  Center,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

export default function VerticallyCenter() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        rounded={'full'}
        size={'lg'}
        fontWeight={'normal'}
        px={6}
        colorScheme={'red'}
        bg={'red.400'}
        color={'white'}
        _hover={{ bg: 'red.500' }}
        onClick={onOpen}
      >
        Predict
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: 'center' }}>RESULT</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ textAlign: 'center' }}>Damage Present</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
