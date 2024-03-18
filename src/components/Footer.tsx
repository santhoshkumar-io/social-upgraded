import styled from "@emotion/styled";
import { Divider, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FOOT } from "../const/ContainerConst";

const FootWrap=styled(Box)`
margin-top:1rem;
color:${(props:any)=>{
    return props.theme.palette.halfGray.main;
}};
`
const FootText=styled(Typography)`
text-align:left;
display:flex;
align-items:center;
`
const NavWrap=styled(Box)`
display:flex; 
flex-direction:row;
`
const FootTextWrap=styled(Box)`
display:flex; 
flex-direction:row;
justify-content:space-between;
margin:0 1.5rem;
`
export default function Footer(){
    return(
    <FootWrap>
        <Divider/>
        <FootTextWrap>
        <FootText variant="body2">{FOOT.text}</FootText>
        <NavWrap>
            <ListItemButton><ListItemText>{FOOT.nav[0]}</ListItemText></ListItemButton>
            <ListItemButton><ListItemText>{FOOT.nav[1]}</ListItemText></ListItemButton>
            <ListItemButton><ListItemText>{FOOT.nav[2]}</ListItemText></ListItemButton>
        </NavWrap>
        </FootTextWrap>
    </FootWrap>);
}