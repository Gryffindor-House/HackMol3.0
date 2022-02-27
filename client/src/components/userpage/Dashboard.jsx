import React, { Component } from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/react';

import Wreckinfo from './wreckinfo';
import Navbar from './navbar';
import GoogleMap from './map';
import Footer from './footer';
import Imagep from './Imageprocess';

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
