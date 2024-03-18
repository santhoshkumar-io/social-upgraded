
//Packages 
import styled from "@emotion/styled";
import React from "react";
import { Box } from "@mui/system";
import { useState } from "react";
//Components
import Navigation from "./Navigation";
import DashBoard from "./DashBoard";
import Header from "./Header";
import Footer from "./Footer"
const ContainerWrap =styled(Box)`
width:100%;
background-color:${(props:any)=>{
  return props.theme.palette.light.main;
}};
z-index:1000;
`
const HomeWrap =styled(Box)`
display:flex;
flex-direction:row;`

export default function HomeComponent(props:any){
    const [open, setOpen] = useState(true);
return (<HomeWrap>
        <Navigation onOpen={setOpen} />
        <ContainerWrap>
            <Header open={open}/>
            <DashBoard open={open}/>
            <Footer/>
        </ContainerWrap>
    </HomeWrap>);
}