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

import Aboutmodal from './about_modal';

const Links = ['Aboutmodal'];

export default function Hero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Attention,
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Disaster Alert!
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white.500'}>
          Disasters are serious disruptions to the functioning of a community but how do we spot and plot them? Click on the Learn More button to find out more!
          </Text>
          
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Aboutmodal></Aboutmodal>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images5.alphacoders.com/115/1156325.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}
