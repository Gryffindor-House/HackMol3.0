import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { server_URL } from '../../config/urls';


export default function Wreckinfo(): JSX.Element {
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const [disasterform, setdisasterform] = useState({
    latdec: '',
    londec: '',
    type: '',
    description: '',
  });

  const params = new URLSearchParams();

  const delete_details = () => {
    params.delete('latdec');
    params.delete('londec');
    params.delete('type');
    params.delete('description');
  };

  const handlewreck = () => {
    delete_details();
    params.append('latdec', parseFloat(disasterform.latdec));
    params.append('londec', parseFloat(disasterform.londec));
    params.append('type', parseFloat(disasterform.type));
    params.append('description', parseFloat(disasterform.description));

    axios.post(server_URL + 'register_disaster', params).then(res => {
      if (res.data === true) {
        seterror(false);
      } else {
        seterror(true);
      }
      navigate('/user');
    });
  };

  return (
    <Flex
      minH={'100vh'}
      align={'Center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      position={'absolute'}
      left={'1200px'}
    >
      {error ? (
        (toast({
          title: 'Error',
          description: 'Error in uploading shipwreck info',
          status: 'error',
          duration: 9000,
          position: 'top',
          isClosable: true,
        }),
        seterror(false))
      ) : (
        <div></div>
      )}

      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Disaster Info Form
        </Heading>
        <FormControl id="Name" isRequired>
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Disaster Type" isRequired>
          <FormLabel>Disaster Type:</FormLabel>
          <Select
            onChange={e =>
              setdisasterform({
                ...disasterform,
                type: e.target.value,
              })
            }
          >
            <option value="option1">Tsunami</option>
            <option value="option2">Storm</option>
            <option value="option3">Floods</option>
            <option value="option3">Landslide</option>
          </Select>
        </FormControl>
        <FormControl id="Description of Disaster Site" isRequired>
          <FormLabel>Description:</FormLabel>
          <Input
            placeholder="ex: Ravaged/Flooded "
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setdisasterform({
                ...disasterform,
                description: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="Latitude" isRequired>
          <FormLabel>Latitude:</FormLabel>
          <Input
            placeholder="ex: 3.276533"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setdisasterform({
                ...disasterform,
                latdec: e.target.value,
              })
            }
          />
        </FormControl>
        <FormControl id="Longitude" isRequired>
          <FormLabel>Longitude:</FormLabel>
          <Input
            placeholder="ex: -61.565292"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            onChange={e =>
              setdisasterform({
                ...disasterform,
                londec: e.target.value,
              })
            }
          />
        </FormControl>

        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            onClick={handlewreck}
          >
            Submit
          </Button>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
            onClick={() => {
              setdisasterform({
                latdec: '',
                londec: '',
                depth: '',
                feature_type: '',
                history: '',
                watlev: '',
              });
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
