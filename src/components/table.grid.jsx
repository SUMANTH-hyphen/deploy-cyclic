import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridToolbar } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import BasicModal from "./popup.modal";
import { useNavigate } from "react-router-dom";
import { attendantData, clientData, transactionData, voucherData } from "../data/modals";

const DataTable = ({ row, column, loading, uniqueId, path }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate()

  const handleButton = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRowClick = (params) =>{
    if(params.field !== "delete"){
      navigate(`${params?.row[uniqueId]}`, {state: {...params?.row}})
    }
  }

  const handleAdd = () =>{
    if(path === "voucher"){
      navigate("add", {state: {...voucherData()}})
    }
    else if(path === "client"){
      navigate("add", {state: {...clientData()}})
    }
    else if(path === "transaction"){
      navigate("add", {state: {...transactionData()}})
    }
    else if(path === "attendant"){
      navigate("add", {state: {...attendantData()}})
    }
  }

  return (
    <Box sx={{width: "95%", mr: 'auto', ml: 'auto'}}>
      <Box sx={{display: 'flex', justifyContent: 'end', alignItems: 'end', pt: 3, pb: 3, gap: 1}}>
        <Button
          variant="outlined"
          onClick={handleAdd}
        >
          {`Add ${path}`}
        </Button>
        <Button
          variant="outlined"
          onClick={handleButton}
        >
          Import Data
        </Button>
      </Box>
      <DataGrid
        sx={{
          height: "80vh",
          width: "100%",
          backgroundColor: '#FCFDFF',
          padding: 1
        }}
        rows={row}
        columns={column}
        getRowId={(row) => row[uniqueId]}
        loading={loading}
        onCellClick={handleRowClick}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            sx:{padding: 2, backgroundColor : "#FCFDFF"},
          },
        }}
      />
      {isModalOpen && <BasicModal handleCloseModal={handleCloseModal} isModalOpen={isModalOpen}/>}
    </Box>
  );
};

export default DataTable;
