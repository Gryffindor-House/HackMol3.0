import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';


const features = [{id: 1, title:"Who are we?" , text:"We are Team Gryffindor, a group of students based out of Chennai"},
{id: 2, title:"What is this about?" , text:"We have designed a portal for spotting and plotting disasters around the world with provision to add your own disaster site!"},
{id: 3, title:"What disasters are we talking about here?" , text:"Disasters such as Tsunami, Storm, Floods in the Indian Subcontinent can be spotted and added so far."},
{id: 4, title:"What is the Satellite Image identifier?" , text:"By providing a satellite image of the hurricane damage site, we can accurately provide information as to how much damage has been incurred. "},
{id: 5, title:"How do I add my own disaster data?" , text:"After logging in to our Dashboard, you can fill up our disaster info form and add to our database."},
{id: 6, title:"Does my data get added instantly?" , text:"Once we verify the authencity of your information, it will be published onto our database."},
{id: 7, title:"How authentic and accurate is the disaster data?" , text:"When an user adds details of a disaster site, our team verifies the authencity of the data by contacting the local officials around said location and we confirm the status. The data is accurate upto 1km from the marked location."},
{id: 8, title:"Any Queries" , text:"For any more queries, click on the chat icon below to interact with our AI bot, Alan."}
]
export default function FAQs() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>FAQs</Heading>
        <Text color={'gray.1000'} fontSize={'xl'}>
          These are some common queries that might arise while using our website.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={1000}>{feature.title}</Text>
                <Text color={'gray.1000'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}