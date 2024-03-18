import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react"
import LineChart from "./LineChart";
import Table from "./Table";
import {CONT} from "../const/ContainerConst"
const LineWrap=styled(Box)<any>`
border-radius: 10px;
height:20.875rem;
width:${({ open }) => open ? '56.225rem' : '62.225rem'};
transition: all .5s ease-in-out;
background-color:${(props:any)=>{
    return props.theme.palette.primary.main;
}};
padding:1.25rem;

`
const Label =styled(Typography)`
text-align:left;
`
const SubLabel = styled(Typography)`
text-align:left;
color:${(props:any)=>{
    return props.theme.palette.halfGray.main;
}}
`
const StatText=styled(Box)`
justify-content:space-between;
display:flex;
flex-direction:row;
margin-bottom:1.5rem;
`
const LastSix=styled(Box)`
display:flex;
flex-direction:row;
margin:0 1.5rem;
`
const Previous=styled(Box)`
display:flex;
flex-direction:row;
margin:0 1.5rem;

`
const PurpleRound=styled(Box)`
height:0.5rem;
width:0.5rem;
border-radius:100%;
margin:0.5rem;
background-color:${(props:any)=>{
    return props.theme.palette.purple.main
}}
`
const GreenRound=styled(Box)`
height:0.5rem;
width:0.5rem;
border-radius:100%;
margin:0.5rem;
background-color:${(props:any)=>{
    return props.theme.palette.success.main
}}
`
const LabelWrap=styled(Box)`
display:flex;
flex-direction:column;
`
const LineLegend=styled(Box)`
display:flex;
flex-direction:row;
`
const TableWrap=styled(Box)<any>`
border-radius: 10px;
height:fit-content;
width:${({ open }) => open ? '58.5rem' : '64.5rem'};
margin-top: 1.5rem; 
background-color:${(props:any)=>{
    return props.theme.palette.primary.main
}}
`
const VisitorWrap=styled(Box)`
display:flex;
flex-direction:column;
`
export default function Visitors(props:any){
    return<VisitorWrap>
        <LineWrap open={props.open}>
            <StatText>
                <LabelWrap>
                    <Label variant="h4">{CONT.visitorStats.label}</Label>
                    <SubLabel variant="body2">{CONT.visitorStats.period}</SubLabel>
                </LabelWrap>
                <LineLegend>
                <LastSix>
                    <PurpleRound />
                    <LabelWrap>
                    <SubLabel variant="body2">{CONT.visitorStats.lastSixMonths.label}</SubLabel>
                    <Label variant="h4">{CONT.visitorStats.lastSixMonths.number}</Label>
                    </LabelWrap>
                </LastSix>
                <Previous>
                    <GreenRound />
                    <LabelWrap>
                    <SubLabel variant="body2">{CONT.visitorStats.previousSixMonths.label}</SubLabel>
                    <Label variant="h4">{CONT.visitorStats.previousSixMonths.number}</Label>
                    </LabelWrap>
                </Previous>
                </LineLegend>
            </StatText>
            <LineChart />
        </LineWrap>
        <TableWrap open={props.open}>
            <Table />
        </TableWrap></VisitorWrap>}