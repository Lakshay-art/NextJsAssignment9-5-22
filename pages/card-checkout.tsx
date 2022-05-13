import Form from '../components/Form'
import Carddetails from '../components/Carddetails'
import Image from 'next/image';
import { NextPage } from 'next';
import { BackGround, Div, Flex, FlexMedia, Nav, Pattern } from '../lib/emotions';
import React from 'react';
import { css } from '@emotion/react';
const Test:NextPage = () => {

   const [width, setWidth] = React.useState(1260);
  const [height, setHeight] = React.useState(545.6);
  React.useEffect(() => {
  window.addEventListener("resize", () => setWidth(window.innerWidth));})
  React.useEffect(() => {

   setWidth( window.innerWidth)
 },[]) 
  React.useEffect(() => {

   setHeight(window.innerHeight)
 },[])
React.useEffect(() => {
  window.addEventListener("resize", () =>
    setHeight(window.innerHeight)
  );
  })

   return (
      <>
      <BackGround zoom={(100-((1661600-(width*height))/40000))/100 >.875?0:(100-((1661600-(width*height))/40000))/100}>
      <Pattern>
      <Nav>
         <Div ml="-10px">
            <Image src="/Logo_Dark.png" height="55px" width="135px" alt="Rario"/>
        </Div>
        </Nav>
      <FlexMedia 
          width="67%"
          margin= "auto"
          justify= "space-between"
          gap="20px"
          mt="40px"
         
          
          > 
          <Form/>
          <Carddetails/>
      </FlexMedia>
      </Pattern>
      </BackGround>
      </>
   );
};
export default Test;