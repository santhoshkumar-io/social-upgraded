//Packages
import React from "react";
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
//Icons
import Search from "../Icons/Search";
import Sun from "../Icons/Sun";
import Notification from "../Icons/Notification";
import Avatar from "../Icons/Avatar";
//Const
import { HEAD } from "../const/ContainerConst";

const InputWrap = styled(Box)`
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props:any) => {
    return props.theme.palette.inputBackGray.main;
  }};
`;
const IconWrap = styled(IconButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props:any) => {
    return props.theme.palette.inputBackGray.main;
  }};
  border-radius: 999px;
  padding: 0 0.5rem;
  height: 40px;
  width: 40px;
`;
const Input = styled(InputBase)`
  height: 80%;
  width: 13.812rem;
`;
const HeadMenu = styled(Box)`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const HeaderWrap = styled(Box)<any>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.25rem;
  width:${({ open }) => open ? '83.6%' : '91.6%'};
  background-color: ${(props:any) => {
    return props.theme.palette.primary.main;
  }};
  position:fixed;
  z-index:1;
`;
const AvatarWrap = styled(IconButton)`
  height: 40px;
  width: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function Header(props:any) {
  return (
    <HeaderWrap open={props.open}>
      <InputWrap>
        <IconWrap disabled>
          <Search />
        </IconWrap>
        <Input placeholder={HEAD.placeHolder} />
      </InputWrap>
      <HeadMenu>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" defaultValue={10}>
          <MenuItem value={10}>{HEAD.lang[0]}</MenuItem>
          <MenuItem value={20}>{HEAD.lang[1]}</MenuItem>
          <MenuItem value={30}>{HEAD.lang[2]}</MenuItem>
        </Select>
        <IconWrap>
          <Sun />
        </IconWrap>
        <IconWrap aria-label="delete">
          <Notification />
        </IconWrap>
        <AvatarWrap>
          <Avatar />
        </AvatarWrap>
      </HeadMenu>
    </HeaderWrap>
  );
}
