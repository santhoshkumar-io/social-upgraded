//Packages
import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { bool } from 'prop-types';
//Icons
import DownArrow from "../Icons/DownArrow";


const DashWrap=styled(Box)<any>`
 
    position:relative;
    display:${({ open }) => open ? 'flex' : 'none'};
    justify-content:space-between;
    align-items:center;
    width:fit-content;
    height:1rem;
    cursor:pointer;
    transition: all .5s ease-in-out;
    z-index:1000000000;
    flex-direction:column;
    margin:0 auto;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(200px)'};
    
  
    
  div {
  width: 16px;
  height: 2px;
  background-color:#ffffff;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  align-self:flex-start;
  }
`
const BurgerWrap=styled(Box)`
align-items:center;
justify-content:center;
display:flex;
`
const ArrowWrap=styled(Box)<any>`
transform:  ${({ open }) => open ? 'rotate(450deg)' : 'rotate(0deg)'};
display:flex;
align-items:flex-end;
justify-content:center;
padding-bottom:0.25rem;
transition: all .5s ease-in-out;
`
export default function Burger({setOpen, open} : {setOpen: any, open:boolean}){
    

    return <BurgerWrap onClick={() => setOpen(!open)}>
      <DashWrap open={open}>
        <div ></div>
        <div ></div>
        <div ></div>
      </DashWrap>
      <ArrowWrap open={open}>
      <DownArrow />
      </ArrowWrap>
    </BurgerWrap>
}
Burger.propTypes = {
    open: bool.isRequired,
  }
