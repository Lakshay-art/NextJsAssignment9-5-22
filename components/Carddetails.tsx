import styled from "@emotion/styled"
import Image from 'next/image';
import Button,{ Description, Div, Flex, H1, P} from '../lib/emotions'
const RightComponent: () => JSX.Element = () => {
    // const Gm=styled.button`
    // color: red;
    // background:blue;
    // `
   return (
      <>
      <Div>
      <Div  
        mt="22px"
        padding= "25px"
        mw="290px"
        bgc="rgba(134, 194, 247, 0.061)"
        bt="1px solid rgba(149, 200, 245, 0.171)">
                        <Div 
                          margin="auto"
                          width="fit-content"
                          mb="30px"
                          margin-top="15px"   >
                    
                        <Image  src="/Caed 02.png" height="262px" width="164px" alt="Carlos Brathwaite card image"/>
                    
                    
                </Div>
                <Div>
                    <Div 
                    transform="rotate(-90deg)"
                    mt="30px"
                    ml="-23px"
                    pos="absolute"
                    padding="2px 4px"
                    bg="radial-gradient(271.43% 63.62% at -47.37% 24.62%, #FF996D 0%, #FF0000 100%) "
                    fs="11px"
                    > 29 Jun 2019</Div>
                        <Div 
                        ml="30px"
                        mb=" 15px" >
                        <H1>Super Over</H1>
                        <Description>Carlos Brathwaite, TKR</Description>
                        <Description>TKR vs KNP,CPL T20</Description>

                    </Div>
                    
                </Div>
                <Flex 
                justify="flex-start"
                gap="10px"
                ml="5px"
                
                >
                    <Div
                      bg="linear-gradient(180deg, #F1C153 0%, #D49F17 100%), linear-gradient(180deg, #F4E7E7 0%, #676060 100%)"
                      width="16px"
                      height="16px"
                    ></Div>
                    <P 
                       ml="-8px"
                       mt="0px"
                       mb="10px"
                       fs="14px"
                       transform="scale(0.95,0.8)"
                       >Gold Tier Moment Card Serial #21/200</P>
                </Flex>
                <br/>
                <H1 ml="5px">
                    $35.00
                </H1>
              </Div>
      
             </Div> 
               
      </>
   );
};
export default RightComponent;