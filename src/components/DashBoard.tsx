//Packages
import { Box } from "@mui/system"
import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import React from "react"
import Visitors from "./Visitor";
//Icons
import BarChart from "../Icons/BarChart"
import File from "../Icons/File"
import Mail from "../Icons/Mail"
import Feather from "../Icons/Feather"
import GrowthSuccess from "../Icons/GrowthSuccess"
import GrowthFailure from "../Icons/GrowthFailure"
import GrowthWarning from "../Icons/GrownthWarning"
//Const
import {NAV} from "../const/NavConst"
import {CONT} from "../const/ContainerConst"
import AvgCategories from "./AvgCategories";
const Label =styled(Typography)`
text-align:left;
`
const DashWrap=styled(Box)`
color:${(props:any)=>{
    return props.theme.palette.secondary.main;
}};
display:flex;
flex-direction:column;
margin:6.25rem 1.25rem 0;`
const StatWrap = styled(Box)`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:1.25rem 0;
`
const Stats=styled(Box)<any>`
width:${({ open }) => open ? '17.875rem' : '18.875rem'};
display:flex;
flex-direction:row;
border-radius: 10px;
padding:0.5rem;
background-color:${(props:any)=>{
    return props.theme.palette.primary.main;
}};
`
const BarIcon=styled(Box)`
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
margin:2rem 0.5rem;
border-radius:100%;
background-color:${(props:any)=>{
    return props.theme.palette.barIcon.main;
}};
`
const FileIcon=styled(Box)`
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
margin:2rem 0.5rem;
border-radius:100%;
background-color:${(props:any)=>{
    return props.theme.palette.warningLight.main;
}};
`
const MailIcon=styled(Box)`
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
margin:2rem 0.5rem;
border-radius:100%;
background-color:${(props:any)=>{
    return props.theme.palette.purpleLight.main;
}};
`
const FeatherIcon=styled(Box)`
display:flex;
justify-content:center;
align-items:center;
padding:1rem;
margin:2rem 0.5rem;
border-radius:100%;
background-color:${(props:any)=>{
    return props.theme.palette.successLight.main;
}}
`
const StatsTextWrap=styled(Box)`
display:flex;
flex-direction:column;
justify-content:center;
margin-top:1rem;
`
const SubLabel = styled(Typography)`
text-align:left;
color:${(props:any)=>{
    return props.theme.palette.halfGray.main;
}}
`
const MonthStatsWrap=styled(Box)`
margin:0.25rem 0;
display:flex;
flex-direction:row;
`
const SuccessGrowth=styled(Typography)`
margin:0 0.5rem 0 0.25rem;
color:${(props:any)=>{
    return props.theme.palette.success.main;
}}
`
const FailureGrowth=styled(Typography)`
margin:0 0.5rem 0 0.25rem;
color:${(props:any)=>{
    return props.theme.palette.danger.main;
}}
`
const WarningGrowth=styled(Typography)`
margin:0 0.5rem 0 0.25rem;
color:${(props:any)=>{
    return props.theme.palette.warning.main;
}}
`
const DailyStats=styled(Box)`
display:flex;
flex-direction:row;
justify-content:space-between;
`
export default function DashBoard(props:any){
    return(<DashWrap>
        <Label variant="h1">{NAV.logo.label}</Label>
        <StatWrap>
            <Stats open={props.open}>
                <BarIcon><BarChart /></BarIcon>
                <StatsTextWrap>
                <Label variant="h4">{CONT.dashboard.visits.number}</Label>
                <SubLabel variant="body2">{CONT.dashboard.visits.label}</SubLabel>
                <MonthStatsWrap><GrowthSuccess /><SuccessGrowth variant="body2">{CONT.dashboard.visits.growth}</SuccessGrowth><SubLabel variant="body2">{CONT.dashboard.subLabel}</SubLabel></MonthStatsWrap>
                </StatsTextWrap>
            </Stats>
            <Stats open={props.open}>
                <FileIcon><File /></FileIcon>
                <StatsTextWrap>
                <Label variant="h4">{CONT.dashboard.articles.number}</Label>
                <SubLabel variant="body2">{CONT.dashboard.articles.label}</SubLabel>
                <MonthStatsWrap><GrowthSuccess /><SuccessGrowth variant="body2">{CONT.dashboard.articles.growth}</SuccessGrowth><SubLabel variant="body2">{CONT.dashboard.subLabel}</SubLabel></MonthStatsWrap>
                </StatsTextWrap>
            </Stats>
            <Stats open={props.open}>
                <MailIcon><Mail /></MailIcon>
                <StatsTextWrap>
                <Label variant="h4">{CONT.dashboard.subscriptions.number}</Label>
                <SubLabel variant="body2">{CONT.dashboard.authors.label}</SubLabel>
                <MonthStatsWrap><GrowthFailure /><FailureGrowth variant="body2">{CONT.dashboard.articles.growth}</FailureGrowth><SubLabel variant="body2">{CONT.dashboard.subLabel}</SubLabel></MonthStatsWrap>

                </StatsTextWrap>
            </Stats>
            <Stats open={props.open}>
                <FeatherIcon><Feather /></FeatherIcon>
                <StatsTextWrap>
                <Label variant="h4">{CONT.dashboard.authors.number}</Label>
                <SubLabel variant="body2">{CONT.dashboard.authors.label}</SubLabel>
                <MonthStatsWrap><GrowthWarning /><WarningGrowth variant="body2">{CONT.dashboard.authors.growth}</WarningGrowth><SubLabel variant="body2">{CONT.dashboard.subLabel}</SubLabel></MonthStatsWrap>
                </StatsTextWrap>
            </Stats>
        </StatWrap>            
        <DailyStats>
        <Visitors open={props.open}/>
        <AvgCategories open={props.open}/>
        </DailyStats>

    </DashWrap>);
}