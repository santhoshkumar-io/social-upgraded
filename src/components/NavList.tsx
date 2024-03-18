//Packages
import React from "react";
import styled from "@emotion/styled";

//Icons
import Home from "../Icons/Home";
import Posts from "../Icons/Posts";
import Categories from "../Icons/Categories";
import Media from "../Icons/Media";
import Paper from "../Icons/Paper";
import Comment from "../Icons/Comment";
import Edit from "../Icons/Edit";
import Extension from "../Icons/Extension";
import Users from "../Icons/Users";
import Settings from "../Icons/Settings"

//Components
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

//Const
import { NAV } from "../const/NavConst";
const SubHeading=styled(ListSubheader)<any>`
transition: all .5s ease-in-out;
display:${({ open }) => open ? 'block' : 'none'};
text-align:left;
background-color:inherit;
color:inherit;`
const ListText=styled(ListItemText)<any>`
transition: all .5s ease-in-out;
display:${({ open }) => open ? 'block' : 'none'};
&:hover{
    color:${(props:any)=>{
        return props.theme.palette.primary.main
    }};
}`
const ListIcon=styled(ListItemIcon)<any>`
    justify-content:${({ open }) => open ? 'flex-start' : 'center'};
    margin:${({ open }) => open ? 'auto' : '1rem auto'};
    transition: all .5s ease-in-out;
`
export  function NavMainList(open:any){
    
    return <React.Fragment>
    <ListItemButton>
        <ListIcon open={open.open}>
            <Home />
        </ListIcon>
        <ListText open={open.open} primary={NAV.items[0]} />
    </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
            <Posts />
        </ListIcon>
        <ListText open={open.open} primary={NAV.items[1]}/>
    </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
            <Categories />
        </ListIcon>
        <ListText open={open.open} primary={NAV.items[2]}/>
    </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
            <Media />
        </ListIcon>
        <ListText open={open.open} primary={NAV.items[3]}/>    
    </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
            <Paper />
        </ListIcon>
        <ListText open={open.open} primary={NAV.items[4]}/>    
    </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
            <Comment />
        </ListIcon>
        <ListText open={open.open} primary={NAV.items[5]}/>
    </ListItemButton>
    </React.Fragment>
}
export function SecondaryMainList(open:any){
    return(
    <React.Fragment>
           <SubHeading open={open.open}>    
      {NAV.itemLabel}
    </SubHeading>

    <ListItemButton>
        <ListIcon open={open.open}>
    <Edit />
    </ListIcon>
    <ListText open={open.open} primary={NAV.items[6]}/>
    </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
    <Extension />
    </ListIcon>
    <ListText open={open.open} primary={NAV.items[7]}/>
        </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
    <Users />
    </ListIcon>
    <ListText open={open.open} primary={NAV.items[8]}/>
        </ListItemButton>
    <ListItemButton>
        <ListIcon open={open.open}>
    <Settings />
    </ListIcon>
    <ListText open={open.open} primary={NAV.items[9]}/>
        </ListItemButton>
    </React.Fragment>);
}

