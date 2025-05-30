import React from 'react';
import './AboutUs.css';
import Root from './Root';
import about from "../Pictures/about.png";
import Layout from "./layout";
import Stack from "./stack"; 
import Robust from "./robust";
const AboutUs = () => {
  return (
    <div>
      <Root 
        image={about}
        buttonText="About Us"
        heading="root.ai"
        subheading={`AI-Powered Intelligent Surveillance and\ncommunication systems`}
      />
      <Layout />
      <Stack /> 
      <Robust />
    </div>
  );
};

export default AboutUs;

