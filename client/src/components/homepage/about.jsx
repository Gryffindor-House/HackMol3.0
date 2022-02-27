import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import {
  FcViewDetails,
  FcMindMap,
  FcSurvey,
  FcMultipleCameras,
  FcOnlineSupport,
  FcFaq,
} from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={1000}>{title}</Text>
      <Text color={'white.200'}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature 
          icon={<Icon as={FcViewDetails} w={10} h={10} />}
          title={'Comprehensive Dashboard'}
          text={
            'This dashboard contains most of the features of the web application like the disaster map, The Satellite Image Processor and the disaster info form. Details about them are given in the respective fields.'
          }
        />
        <Feature
          icon={<Icon as={FcMindMap} w={10} h={10} />}
          title={'Disaster Map'}
          text={ 
            "The disaster map is a web mapping platform and consumer application that offers satellite imagery, aerial photography and street maps. It features real time conditions of your location if there's any calamity happening and features different icons stating the nature of the calamity"
          }
        />
        <Feature
          icon={<Icon as={FcSurvey} w={10} h={10} />}
          title={'Disaster Info Form'}
          text={
            'This is a form containing the coordinates of the areas affected by the calamities. It also has the option of the user adding the coordinates in areas if the web application  has missed anything which will be added promptly to the database.'
          }
        />
        <Feature
          icon={<Icon as={FcMultipleCameras} w={10} h={10} />}
          title={'Satellite Image Processing'}
          text={
            'For this feature, we used an ML model that takes input as a satellite image and classifies the damage done in the area if any damage is done or not.'
          }
        />
        <Feature
          icon={<Icon as={FcOnlineSupport} w={10} h={10} />}
          title={'Chat Bot'}
          text={
            'For our chatbot, we used Alan AI, which is a complete voice AI platform. It increases app adoption through voice onboarding. It provides a personalized voice experience for every user.  The chatterbot can respond to SOS messages and also questions with respect to calamities.'
          }
        />
        <Feature
          icon={<Icon as={FcFaq} w={10} h={10} />}
          title={'FAQ Page'}
          text={
            'The FAQ section has detailed guidelines on how to use the different features provided in this web application. Users will get instructions on how to access the satellite image processor, what the various icons on the disaster map means and what the disaster form is'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
