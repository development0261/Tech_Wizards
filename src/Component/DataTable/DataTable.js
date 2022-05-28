import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import styles from './datatable.module.css';

export const CustomDataGrid = styled(DataGrid)({
    border: "none !important",
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "400",
      fontSize: "14px",
      fontStyle: "normal",
      textOverflow: "clip",
      whiteSpace: "break-spaces",
      lineHeight: 1,
      color: "#FFFFFF",
      textAlign: "center",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#051551",
      color: "#FFFFFF",
    },
    "& .MuiDataGrid-columnHeaders button svg": {
      fill: "#FDAE15",
    },
    "& .MuiDataGrid-row:nth-of-type(odd)": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-cell--textLeft": {
      color: "#000000",
      fontWeight: "400",
      fontSize: "12px",
      borderBottom: "0 !important",

    },
    "& .table_text": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "0 !important",
      "&:nth-child(14)": {
        overflow: "inherit !important",
        borderRight: "none !important",
      },
    },
    "& .searchSummary": {
      fontWeight: " bold !important",
      fontSize: "14px !important",
    },
    "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
      outline: "none !important",
    },
    "& .MuiDataGrid-cell--withRenderer": {
      fontFamily: "Roboto !important",
      borderRight: "1px solid #CCC6C6",
    },
    "& .MuiDataGrid-columnHeader": {
      padding: "15px 0 !important",
      borderRight: "1px solid #CCC6C6",
    },
  });

  
const columns = [
    { field: 'mobileName', 
    headerName: 'Mobile Name', 
     flex:1,
    headerAlign:'center',
    align: 'center',
 },
    {
        field: 'holderName',
        headerName: 'Holder Name',
        flex:1,
        headerAlign:'center',
        align: 'center',
    },
    {
        field: 'holderSparkId',
        headerName: 'Spark Id',
        flex:1,
        headerAlign:'center',
        align: 'center',
    },
    {
        field: 'holderOfficeNo',
        headerName: 'Office Number',
        flex:1,
        headerAlign:'center',
        align: 'center',
    },
    {
        field: 'fromDate',
        headerName: 'Holding From',
        description: 'Holding From',
        sortable: true,
        flex:1,
        headerAlign:'center',
        align: 'center',
    },
    {
        field: 'action  ',
        headerName: 'Request Otp',
        description: 'Click To Request Otp',
        flex:1,
        headerAlign:'center',
        align: 'center',
        renderCell: (params) => {
            const onClick = (e) => {
              e.stopPropagation(); // don't select this row after clicking
      
              const api = params.api;
              const thisRow = {};
      
              api
                .getAllColumns()
                .filter((c) => c.field !== "__check__" && !!c)
                .forEach(
                  (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                );
      
              return alert(JSON.stringify(thisRow, null, 4));
            };
      
            return <Button className={styles.register_add_user}onClick={onClick}>Send Request</Button>;
          }
    },
];

const rows = [
    { id: 1, holderSparkId: 'HJ', mobileName: 'Redmi Note 9', holderName: 'Jon', holderOfficeNo: 315, fromDate: '2020-01-01' },
    { id: 2, holderSparkId: 'MD', mobileName: 'Realme Narzo 2', holderName: 'Cersei', holderOfficeNo: 416, fromDate: '2020-01-01' },
    { id: 3, holderSparkId: 'HAP', mobileName: 'Samsung Galaxy Not 9', holderName: 'Jaime', holderOfficeNo: 409, fromDate: '2020-01-01' },
    { id: 4, holderSparkId: 'RP', mobileName: 'MI 8', holderName: 'Arya', holderOfficeNo: 315, fromDate: '2020-01-01' },
    { id: 5, holderSparkId: 'AS', mobileName: 'One Pluse 3T', holderName: 'Daenerys', holderOfficeNo: 315, fromDate: '2020-01-01' },
    { id: 6, holderSparkId: 'AMK', mobileName: 'Blackberry Passport', holderName: "Hemang", holderOfficeNo: 409, fromDate: '2020-01-01' },
    { id: 7, holderSparkId: 'DEP', mobileName: 'Nokia 3310', holderName: 'Ferrara', holderOfficeNo: 416, fromDate: '2020-01-01' },
    { id: 8, holderSparkId: 'JT', mobileName: 'Blackberry Passport(testing)', holderName: 'Rossini', holderOfficeNo: 326, fromDate: '2020-01-01' },
    { id: 9, holderSparkId: 'CP', mobileName: 'Redmi Note 2', holderName: 'Harvey', holderOfficeNo: 416, fromDate: '2020-01-01' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%',marginLeft:"50px",marginTop:"10px" }}>
      <CustomDataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        disableColumnSelector
        disableSelectionOnClick
      />
    </div>
  );
}
