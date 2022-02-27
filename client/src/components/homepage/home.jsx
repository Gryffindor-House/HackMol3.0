import React from 'react';
import Hero from './hero';
import Nav from './nav';
import About from './about';
import Footer from './footer';

import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

export const Home = () => {
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
      <Nav />
      <div className="flex">
        <Hero />
      </div>
      <Footer />
    </>
  );
};
