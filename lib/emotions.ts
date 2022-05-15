import styled from "@emotion/styled"
import { css } from "@emotion/react"

type bg={
  zoom?:any;
}
type nav={
  ml?:string;
}
type h1={
  ml?:string;
}
type div={
    mb?:string ;
    mxw?:string;
    mw?:string;
    mt?:string;
    bt?:string;
    padding?:string;
    bgc?:string;
    margin?:string;
    width?:string;
    height?:string;
    bg?:string;
    transform?:string;
    ml?:string;
    pos?:string;
    fs?:string;
    zoom?:string;
 

}
type p={
  ml?:string;
  mt?:string;
  mb?:string;
  fs?:string;
  transform?:string;
}
type flexx={
  justify?:string;
  align?:string;
  mt?:string;
  mw?:string;
  gap?:string;
  width?:string;
  margin?:string;
  ml?:string;
  media?:string;
  mxw?:string
}
// const media680=css`
// @media(max-width:680px){
//  zoom:65%;
// }

// `
// const media1260=css`
// @media(max-width:1260px){
//  zoom:65%;
// }

// `
const input=css`
border:none;
outline: none;
border-bottom: 1px rgba(255, 255, 255, 0.534) solid;
background-color: transparent;
color: white;
width: 400px;
padding: 10px 5px ;
font-size: medium;
letter-spacing: 1px;

&:focus{
    border-bottom: 1px rgba(255, 255, 255, 0.968) solid
}
`
const p=css`
  font-size:16px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  word-spacing: 1px;

  font-weight: 200;
  margin:10px 0px;
`

const Pattern=styled.div`
background-image:url("/Pattern.png") ;
  
  background-size:cover;
  background-repeat: no-repeat;
  width: 100%;
`
const Button=styled.button`
color:black;
  padding: 12px 65px;
  background-color: rgb(255, 255, 255);
  margin-top:55px;
  margin-bottom: 10px;
  border:none;
  border-radius: 2px;
  font-weight: 800;
  transform: translate(-250px,70px);
  margin: 20px;
  margin-left: -270px;
  @media  ( max-width:520px) {
   // max-width:500px;
     margin-left:-200px;
  transform: translate(-130px,70px);

    }
`
const BackGround=styled.div<bg>`
// background-image:url("/BackGround.png") ;
// margin:0px;  
// background-size:cover;
// background-repeat:no-repeat;
color: white;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
transform:scaleX(1.05);
overflow-x: hidden;
zoom:${props=>props.zoom};
`

const H1=styled.h1<h1>`
margin-bottom: 0px;
 transform: scaleY(0.9);
 font-weight: 800;
 margin-left:${props=>props.ml};
`
const H2=styled.h2`
margin-bottom: 0px;
`
const H3=styled.h3`
margin: 0px;
`
const H4=styled.h4`
margin: 0px;
`
const Label=styled.label`
height:120px;

`
const NameInput=styled.input`
${input}
margin-bottom: 70px;
  margin-left:-63px ;
  padding-left: 75px;
  width:330px;
  color:white;
`
const Lastname=styled.input`
${input}
:focus{
    margin-top: 30px;
    transition: ease-in-out ,margin-top .7s;   
  }

 :not(:focus){
    margin-top: -20px;
    transition: ease-in-out ,margin-top .7s;
  } 
  :not(:placeholder-shown){
    margin-top: 30px;
 }  
`

const Radio=styled.input`
margin-right: -40px;
zoom:200%;
:checked+ label{
    height: 150px;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    
  }
:not(:checked)+ label{
    height: 50px;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    overflow-y: hidden;
   }
:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    //top: -2px;
    //left: -.5px;  
    //transform: translate(.5px,0.5px);
    position: relative;
    background-color: #10FFC6;
    content: '';
    display: inline-block;
    visibility: visible;
  }
:not(:checked):after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    //top: -2px;
   //left: -.5px;
   // transform: translate(.5px,0.5px);
    position: relative;
    background-color: #22498a;
    content: '';
    display: inline-block;
    visibility: visible; 
`

const P=styled.p<p>`
${p};
margin-bottom:${props=>props.mb};
margin-top:${props=>props.mt};
margin-left:${props=>props.ml};
font-size:${props=>props.fs}; 
transform:${props=>props.transform};
`
const PMedia=styled.p<p>`
${p};
margin-bottom:${props=>props.mb};
margin-top:${props=>props.mt};
margin-left:${props=>props.ml};
font-size:${props=>props.fs}; 
transform:${props=>props.transform};
@media  ( max-width:1260px) {
 text-align:center}
`
const Description=styled.p<div>`
${p}
color: rgba(212, 236, 247, 0.714);
  font-size: 13px;
  margin-bottom: 0px ;
  margin-top: 3px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom:${props=>props.mb};

`
const DescriptionMedia=styled.p<div>`
${p}
color: rgba(212, 236, 247, 0.714);
  font-size: 13px;
  margin-bottom: 0px ;
  margin-top: 3px;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom:${props=>props.mb};
  @media  ( max-width:1260px) {
    text-align:center}

`

const Nav=styled.nav<nav>`
width: 67%;
margin: auto;
margin-left:${props=>props.ml};


`
const Div=styled.div<div>`
margin-bottom:${props=>props.mb};
min-width:${props=>props.mw};
max-width:${props=>props.mxw};
background-color:${props=>props.bgc};
padding:${props=>props.padding};
border-top:${props=>props.bt};
margin-top:${props=>props.mt};
width:${props=>props.width};
height:${props=>props.height};
background:${props=>props.bg};
margin:${props=>props.margin};
transform:${props=>props.transform};
font-size:${props=>props.fs};
position:${props=>props.pos};
margin-left:${props=>props.ml};
zoom:${props=>props.zoom};

`
const DivMedia=styled.div<div>`
margin-bottom:${props=>props.mb};
min-width:${props=>props.mw};
max-width:${props=>props.mxw};
background-color:${props=>props.bgc};
padding:${props=>props.padding};
border-top:${props=>props.bt};
margin-top:${props=>props.mt};
width:${props=>props.width};
height:${props=>props.height};
background:${props=>props.bg};
margin:${props=>props.margin};
transform:${props=>props.transform};
font-size:${props=>props.fs};
position:${props=>props.pos};
margin-left:${props=>props.ml};
@media  ( max-width:1260px) {
  text-align:center;
  width:fit-content;
      margin:auto}


`
const Flex=styled.div<flexx>`
display:flex;
justify-content:${props=>props.justify};
align-items:${props=>props.align};
gap:${props=>props.gap};
width:${props=>props.width};
margin:${props=>props.margin};
margin-top:${props=>props.mt};
flex-wrap:nowrap;
min-width:${props=>props.mw};
max-width:${props=>props.mxw};
margin-left:${props=>props.ml};





`
export const Flex2=styled.div<flexx>`
display:flex;
justify-content:${props=>props.justify};
align-items:${props=>props.align};
gap:${props=>props.gap};
width:${props=>props.width};
margin:${props=>props.margin};
margin-top:${props=>props.mt};
flex-wrap:nowrap;
min-width:${props=>props.mw};
max-width:${props=>props.mxw};
margin-left:${props=>props.ml};

@media  ( max-width:520px) {
max-width:400px;
 margin-left:60px;
}
 `
const FlexMedia=styled.div<flexx>`
display:flex;
justify-content:${props=>props.justify};
align-items:${props=>props.align};
gap:${props=>props.gap};
width:${props=>props.width};
margin:${props=>props.margin};
margin-top:${props=>props.mt};
flex-wrap:nowrap;
min-width:${props=>props.mw};
margin-left:${props=>props.ml};
@media  ( max-width:1260px) {
 
  justify-content: center;
  flex-wrap: wrap-reverse;}
  
  
`


// const Flex=styled.div({
//    display:"flex"},
// props=>({
// justifyContent:props.justifyContent
// })


//)

const Select=styled.select`
  width: 60px;
  padding: 5px;
  font-size: 15px;
  line-height: 1;
  border: 0;
  border-radius: 0;
  height: 34px;
  font-family:helvetica-roman;
  color:#ffffff;   
  background-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  border: none;
  text-indent: 0.01px;
  text-overflow: '';
  z-index: 100;
  outline: none;
  position: relative;
`
const Carret=styled.span`
   position: absolute;
   margin-left: 0px;
   margin-bottom: 0px;
   transform: translate(-20px,14px) scale(1.1,1.2);
`

export default Button;
export {Button,H1,H2,H3,H4,NameInput,P,PMedia,Nav,Label,Radio,Div,DivMedia,Flex,Lastname,Select,Description,DescriptionMedia,Carret,Pattern,BackGround,FlexMedia};