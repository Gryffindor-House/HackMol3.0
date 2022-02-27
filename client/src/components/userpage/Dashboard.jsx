import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import GoogleMap from './map';
import Footer from './footer';
import Slider from './Carousel';
import Image from './Imageprocess';
import Imagep from './Imageprocess';

const slideData = [
  {
    index: 0,
    headline: 'New Fashion Apparel',
    button: 'Shop now',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
  },
  {
    index: 1,
    headline: 'In The Wilderness',
    button: 'Book travel',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
  },
  {
    index: 2,
    headline: 'For Your Current Mood',
    button: 'Listen',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg',
  },
  {
    index: 3,
    headline: 'Focus On The Writing',
    button: 'Get Focused',
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg',
  },
];

export const Dashboard = () => {
  useEffect(() => {
    alanBtn({
      key: '9abaa052627881f04f83b53e99ecff092e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: commandData => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      },
    });
  }, []);
  return (
    <>
      <Navbar />
      <Grid>
        <Imagep />
        <GridItem colStart={1} colEnd={2} p={'40px'}>
          <GoogleMap />
        </GridItem>
        <GridItem colStart={1} colEnd={2} mt={'-80px'}>
          <Wreckinfo />
        </GridItem>
      </Grid>
      <Flex
        style={{
          position: 'absolute',
          marginTop: '900px',
          marginLeft: '1px',
        }}
        className="flex"
      >
        <Footer />
      </Flex>
    </>
  );
};
