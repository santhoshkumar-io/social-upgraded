//Packages
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import React from "react";
//Const
import { NAV } from "../const/NavConst";
//Components
import{ NavMainList, SecondaryMainList} from "./NavList";
//Icons
import Burger from "./Burger";
const NavWrap=styled(Box)<any>`
background-color:${(props:any)=>{
    return props.theme.palette.tertiary.main;
}};
width:fit-content;
height:71.875rem;
transition: all .5s ease-in-out;
color:${(props:any)=>{
    return props.theme.palette.primary.main;
}}`
const LogoWrap=styled(Box)<any>`
justify-content:center;
transition: all .5s ease-in-out;
display:flex;
flex-direction:row;
padding:${({ open }) => open ? '1rem' : '1rem 0 1rem 1rem'};
width:fit-content;`

const LogoTextWrap=styled(Box)<any>`
transition: all .5s ease-in-out;
display:${({ open }) => open ? 'flex' : 'none'};
flex-direction:column;
margin: 0 0.4rem `
const LogoText=styled(Typography)`
text-align:left;`
const NavLine=styled(Box)`
height:0.1230rem;
margin:0 1rem;
opacity: 0.1;
background-color:${(props:any)=>{
    return props.theme.palette.primary.main;
}};
`
const ManagerWrap=styled(Box)<any>`
transition: all .5s ease-in-out;
display:${({ open }) => open ? 'flex' : 'none'};
width:fit-content;
border-radius:10px;
background-color:${(props:any)=>{return props.theme.palette.halfLight.main}};
padding:1rem 2.5rem 1rem 0rem;
margin:27rem auto 0;
`
const ManagerTextWrap=styled(Box)`
display:flex;
flex-direction:column;
`
const ListWrap=styled(Box)`
color:${(props:any)=>{
    return props.theme.palette.textHalfLight.main
}};

`
const Manager = styled.img`
border-radius:999px;
margin:0.5rem;
`
const ButtonWrap =styled(IconButton)<any>`
margin-left:${({ open }) => open ? '1rem' : '0'};
padding:${({ open }) => open ? '' : ''};
transition: all .5s ease-in-out;
`   
const LogoImage =styled.img<any>`
height:${({ open }) => open ? 'auto' : '60%'};
width:${({ open }) => open ? 'auto' : '60%'};
transition: all .5s ease-in-out;`

export default function Navigation({onOpen}:any){
    
    const [open, setOpen] = useState(true);

    return(<NavWrap >
        <LogoWrap open={open}>
        <LogoImage src={NAV.logo.image} alt="Logo" open={open}/>
        <LogoTextWrap open={open}>
        <LogoText variant="h3" >{NAV.logo.title}</LogoText>
        <LogoText variant="subtitle1">{NAV.logo.label}</LogoText>
        </LogoTextWrap>
        <ButtonWrap open={open} size="small"><Burger  open={open} setOpen={(val:any)=>{
             setOpen(val)
             onOpen(val)
             }} /></ButtonWrap>
        </LogoWrap>
        <NavLine />
        <ListWrap>
            <NavMainList open={open}/>
            <SecondaryMainList open={open}/>
        </ListWrap>
        <ManagerWrap open={open}>
            <Manager src={NAV.manager.image} alt="Manager"/>
            <ManagerTextWrap>
                <Typography variant="h6">{NAV.manager.name}</Typography>
                <Typography variant="subtitle1">{NAV.manager.post}</Typography>
            </ManagerTextWrap>
        </ManagerWrap>
         </NavWrap>);
}
