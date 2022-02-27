import React, { Component } from 'react';
import { Grid, GridItem, Flex, Stack, Heading, Text } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import GoogleMap from './map';
import Imagep from './Imageprocess';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Imagep />
      <Grid
        style={{
          marginTop: '50px',
        }}
      >
        <ColoredLine />
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Disaster Map &{' '}
            <Text as={'span'} color={'orange.400'}>
              Disaster Info Form
            </Text>
          </Heading>
        </Stack>

        <GridItem colStart={1} colEnd={2} p={'40px'}>
          <GoogleMap />
        </GridItem>
        <GridItem colStart={1} colEnd={2} mt={'-90px'} pr={'40px'}>
          <Wreckinfo />
        </GridItem>
      </Grid>
    </>
  );
};
