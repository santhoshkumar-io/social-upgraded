import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styled from '@emotion/styled'
import {  Typography } from '@mui/material';

const ThumbImage =styled.img`
border-radius:10px;
`
const AuthorIcon =styled.img`
border-radius:100%;
margin-right:0.5rem;
`
const StatusTag=styled(Typography)<any>`
width:100%;
border-radius: 100px;
color:${(props:any)=>{

    if ( props.stat==="Pending"){
    return props.theme.palette.warning.main;
    }
    else{
        return props.theme.palette.active.main;
    }
}};
background-color:${(props:any)=>{
    
    if ( props.stat==="Pending"){
    return props.theme.palette.warningLight.main;
    }
    else{
        return props.theme.palette.activeLight.main;
    }
}}
`
const columns: GridColDef[] = [
  { 
      field: 'thumbnail', 
      headerName: 'Thumbnail', 
      width: 100 ,    
      sortable: false,
      renderCell: (params: any) =>{
      return <ThumbImage src={params.row.thumbnail} alt={"Thumbnail"} />}
    },
  { 
      field: 'title', 
      headerName: 'Title', 
      width: 335 
    },
  { 
      field: 'author', 
      headerName: 'Author', 
      width: 150 ,
      renderCell: (params: any) =>{
          
        return <><AuthorIcon src={params.row.authorIcon} alt='Author Icon'/><Typography variant='body2'>{params.row.author}</Typography> </>
      }
    },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
    sortable: false,
    renderCell: (params: any) =>{
        
      return <StatusTag variant='body2'stat={params.row.status}>{params.row.status}</StatusTag> 
    }
  },
  {
    field: 'date',
    headerName: 'Date',
    description: 'This column has a value getter and is not sortable.',
    width: 80,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 90,
    sortable: false,

  },
];

const rows = [
  { id:"1", thumbnail:"./Images/ThumbnailOne.png", title:"Any mechanical keyboard enthusiasts in design?",authorIcon:"./Images/AuthorIconOne.png",author:"Eleanor Pena",status:"Pending", date:"18.05.2020"},
  { id:"2", thumbnail:"./Images/Thumbnail.png", title:"17 Iconic Movies That Got Surprisingly Low Ratings",authorIcon:"./Images/AuthorIconTwo.png",author:"Courtney Henry",status:"Pending", date:"27.11.2019"},
  { id:"3", thumbnail:"./Images/ThumbnailThree.png", title:"The Fun Side of Hitting Reset",authorIcon:"./Images/AuthorIconThree.png",author:"Jacob Jones", status:"Active", date:"04.11.2019"},
  { id:"4", thumbnail:"./Images/ThumbnailFour.png", title:"U.S. Chemical Production Improves In July",authorIcon:"./Images/AuthorIconFour.png",author:"Brooklyn Simmons",status:"Active", date:"08.07.2020"},
  { id:"5", thumbnail:"./Images/Thumbnail.png", title:"Chemical Activity Barometer Shows Gain In August",authorIcon:"./Images/AuthorIconFive.png",author:"Darrell Steward",status:"Active", date:"10.04.2020"},
];

export default function DataTable() {
  return (
    <div style={{ height: 358, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        hideFooterPagination={true}
        classes={{
            columnHeaders: 'tableHeader',
            panelFooter:"footer",
            row:"tableCell",
            footerContainer:"footer",
            columnHeaderCheckbox:"headCheckBox",
            cellCheckbox:"checked",
            cell:"cell",
        }}
      />
    </div>
  );
}