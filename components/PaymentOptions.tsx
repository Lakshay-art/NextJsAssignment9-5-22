import { NextPage } from 'next';
import Image from 'next/image';
import Button, { Description, Div, Flex, H4, Label,P,Radio } from '../lib/emotions';
type Paymentprops={
    title:string
    image:any
    value:string
    checked?:boolean
    desc?:string
}
const Test: (props: Paymentprops) => JSX.Element = ({title,image,value,checked,desc}:Paymentprops) => {
   return (
      <>
         <Div
            bgc='rgba(134, 194, 247, 0.061)' 
            padding="15px 30px"
            bt="1px solid rgba(149, 200, 245, 0.171)"
            mt="35px"

              >
                            <Flex  justify="space-between"
                                  align="flex-start">
                                <Flex justify="start"
                                    align="center"
                                    gap="30px"
                                    mw="400px">
                                    <Image src={image} height="40px" width="40px" alt="Credit or Debit Card"/>
                                    <div>
                                        <H4>{title}</H4>
                                        <Description>{desc} </Description>
                                        {/* <!-- <Button>PAY $10</Button> --> */}
                                    </div>
                                </Flex>
                                <Radio type="radio" value={value}id={value} name="paymentmethod" checked={checked}/>
                                <Label htmlFor={value}><Button id="sButton">PAY $10</Button></Label>
                            </Flex>
         </Div>
                        
      </>
   );
};
export default Test;