
import Image from 'next/image';
import { Carret, Description, DescriptionMedia, Div,  DivMedia,  H1,  Lastname, NameInput, P, PMedia, Select } from '../lib/emotions';
import PaymentOptions from './PaymentOptions'
const LeftBlock =()=> {
   return (
      <>
       
      <Div mw="650px" mxw="650px">
                   <form>
                        <Div mb="70px">
                            <DivMedia id="aboutYou2">
                            <H1>TELL US A BIT ABOUT YOU</H1>
                            <DescriptionMedia >Please tell us a little bit about you.</DescriptionMedia>
                            <br/>
                            <PMedia id="titlename">Title and First Name</PMedia>
                            <Div id="titleNameFlex">
                                
                                    <Select >
                                      <option value="0">Mr.</option>
                                      <option value="1">Miss</option>
                                      <option value="2">Mrs.</option>
                                     
                                    </Select>
                                    <Carret>^</Carret>
                                <NameInput id="nameInput" type="text" required/>
                            </Div>
                            <Div id="lastnameDiv">
                                <DescriptionMedia mb="-20px" id="lastnamep" >Last Name</DescriptionMedia>
                          
                                <Lastname  type="text" placeholder=" "/>
                            </Div>
                       </DivMedia>
                    </Div>
                       <DivMedia >
                        <H1>PAY USING BELOW METHODS</H1>
                        <Description >You can use your credit or debit cards to pay or use your existing <br/>crypto wallets</Description>
                       </DivMedia>
                       <PaymentOptions title="Credit or Debit Card" image="/Ellipse 61.png" value="stripe" checked/>
                       <PaymentOptions title="ETH, BTC or other crypto currencies" image="/Ellipse 56.png" value="cr" desc='Pay with your existing crypto wallets'/>
                       <Div mb="100px"></Div>

                        {/* <Text padding="2px" color="red">lakshay</Text> */}
                    </form>
                </Div>
      </>
   );
};
export default LeftBlock;