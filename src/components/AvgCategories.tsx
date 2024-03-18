import styled from "@emotion/styled"
import React from "react";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { CONT } from "../const/ContainerConst";
import DailyLine from "../components/DailyLine"
const DailyAvg = styled(Box)<any>`
height:16.125rem;
width:${({ open }) => open ? '18.875rem' : '19.875rem'};
display:flex;
flex-direction:column;
position:relative;
justify-content:space-between;
border-radius: 10px;
box-shadow: 0px 15px 50px rgba(160, 163, 189, 0.1);
background-color:${(props:any)=>{
    return props.theme.palette.purple.main;
}};
`
const Label=styled(Typography)`
text-align:left;
color:${(props:any)=>{
    return props.theme.palette.primary.main
}}
`
const SubLabel=styled(Typography)`
text-align:left;
color:${(props:any)=>{
    return props.theme.palette.halfGray.main
}}`
const LabelWrap =styled(Box)`
display:flex;
flex-direction:column;
`

const TextWrap =styled(Box)`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:1rem;
`
const LineWrap=styled(Box)`
position:absolute;
left:-9px;
bottom:-8px;
border:10px;
`
const TopCategories=styled(Box)`
margin:1rem 0;

`
const TopCategoriesWrap=styled(Box)`
background-color:${(props:any)=>{
    return props.theme.palette.primary.main
}};
padding:0 1rem ;
border-radius:10px;
`
const CatLabel=styled(Typography)`
text-align:left;
`

const AvgCat=styled(Box)`
display:flex;
flex-direction:column;
justify-content:space-between;
`
const CatWrap=styled(Box)`

`
const Categories=styled(Box)`

`
const RateLabel=styled(Typography)<any>`
padding:0.125rem;
border-radius:3px;
color:${(props:any)=>{
    if (props.catName==="life"){
        return props.theme.palette.purple.main;
    }
    else if(props.catName==="tutor"){
        return props.theme.palette.tertiary.main;
    }
    else if(props.catName==="tech"){
        return props.theme.palette.danger.main;
    }
    else if(props.catName==="design"){
        return props.theme.palette.success.main;
    }
    else if(props.catName==="warn"){
        return props.theme.palette.warning.main;
    }
    else if(props.catName==="geo"){
        return props.theme.palette.geo.main;
    }
}};
background-color:${(props:any)=>{
    if (props.catName==="life"){
        return props.theme.palette.purpleLight.main;
    }
    else if(props.catName==="tutor"){
        return props.theme.palette.tertiaryLight.main;
    }
    else if(props.catName==="tech"){
        return props.theme.palette.dangerLight.main;
    }
    else if(props.catName==="design"){
        return props.theme.palette.successLight.main;
    }
    else if(props.catName==="warn"){
        return props.theme.palette.warningLight.main;
    }
    else if(props.catName==="geo"){
        return props.theme.palette.geoLight.main;
    }
}}
`
const CatTextWrap=styled(Box)`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:0.3rem 0`
export default function AvgCategories(props:any){
    return <AvgCat>
    <DailyAvg open={props.open}>
        <TextWrap>
        <LabelWrap><Label variant="h4">{CONT.visitorStats.dailyCustomers.label}</Label >
        <SubLabel  variant="body2">{CONT.visitorStats.dailyCustomers.period}</SubLabel ></LabelWrap>
        <Label  variant="h3">{CONT.visitorStats.dailyCustomers.value}</Label >
        </TextWrap>
        <LineWrap><DailyLine/></LineWrap>
    </DailyAvg>
    <TopCategoriesWrap>
        <TopCategories>
            <CatLabel variant="h3">{CONT.categories.label}</CatLabel>
            <SubLabel variant="body2">{CONT.categories.subLabel}</SubLabel>
        </TopCategories>
        <Categories>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.lifeStyle.label}</CatLabel>
                <SubLabel variant="body2">{CONT.categories.lifeStyle.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="life">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.tutorials.label}</CatLabel>
                <SubLabel variant="body2">{CONT.categories.tutorials.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="tutor">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.technology.label}</CatLabel>
                <SubLabel variant="subtitle1">{CONT.categories.technology.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="tech">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.design.label}</CatLabel>
                <SubLabel variant="subtitle1">{CONT.categories.design.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="design">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.interaction.label}</CatLabel>
                <SubLabel variant="subtitle1">{CONT.categories.interaction.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="warn">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.development.label}</CatLabel>
                <SubLabel variant="subtitle1">{CONT.categories.development.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="warn">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.nature.label}</CatLabel>
                <SubLabel variant="subtitle1">{CONT.categories.nature.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="warn">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
                <Divider />
            </CatWrap>
            <CatWrap>
                <CatTextWrap>
                    <LabelWrap>
                <CatLabel variant="body1">{CONT.categories.geography.label}</CatLabel>
                <SubLabel variant="subtitle1">{CONT.categories.geography.subLabel}</SubLabel>
                </LabelWrap>
                <LabelWrap>
                    <CatLabel variant="body1">{CONT.categories.count}</CatLabel>
                    <RateLabel variant="subtitle2" catName="geo">{CONT.categories.rate}</RateLabel>
                </LabelWrap>
                </CatTextWrap>
            </CatWrap>


        </Categories>
    </TopCategoriesWrap>

    </AvgCat>
}