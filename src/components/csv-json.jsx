import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { CloudUpload, Description } from "@mui/icons-material";
import Papa from "papaparse";
import { attendantData, clientData, transactionData, voucherData } from "../data/modals";
import { LoadingBackdrop, SnackbarAlert } from "./feedback";
import { createVoucherData } from "../services/voucher.services";

export const CsvToJsonConverter = () => {
  const [jsonData, setJsonData] = useState(null);
  const [load, setLoad] = useState(false)
  const [toast, setToast] = useState({open: false, msg: "", type: ""})

    const handleToastClose = () =>{
        setToast({...toast, open: false})
  }

  const handleConvertToJSON = () => {
    if (jsonData) {
      validateAndSendData()
    }
  };

  const validateAndSendData = () => {
    let requiredKeys = [];

    // Check current path and set the required keys accordingly
    if (window.location.pathname === "/vouchers") {
      requiredKeys = Object.keys(voucherData())
    } else if (window.location.pathname === "/clients") {
      requiredKeys = Object.keys(clientData())
    } else if (window.location.pathname === "/transactions") {
      requiredKeys = Object.keys(transactionData())
    } else if (window.location.pathname === "/attandants") {
      requiredKeys = Object.keys(attendantData())

    } else {
      alert("invalid csv file");
      return;
    }
    // Add more conditions for other paths if needed

    const filteredData = jsonData.map((data) => {
      const filteredObject = {};

      requiredKeys.forEach((key) => {
        if (data.hasOwnProperty(key)) {
          filteredObject[key] = data[key];
        }
      });

      return filteredObject;
    });

    handleAddData(filteredData)
  };

  const handleAddData = async (data) =>{
    setLoad(true)
    const { response, error} = await createVoucherData(data)
    setLoad(false)
    if(error){
      setToast({open: true, msg: "Error", type: "error"})
    }
    if(response){
      // setToast({open: true, msg: "Done!", type: "success"})
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const { data } = results;
          setJsonData(data);
        },
      });
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const { data } = results;
          setJsonData(data);
        },
      });
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <LoadingBackdrop open={load} />
      <SnackbarAlert open={toast.open} msg={toast.msg} type={toast.type} handleToastClose={handleToastClose}/>
      <Stack gap={{xs: 2, sm: 3, md: 4, lg: 5}}>
        <Stack>
          <Typography variant="h5">Upload File</Typography>
          <Typography variant="caption" gutterBottom>
            Drag and drop a CSV file or click the button below to upload.
          </Typography>
        </Stack>
        <Stack gap={2}>
          <div
            style={{
              border: "2px dashed #ccc",
              borderRadius: "4px",
              padding: "16px",
              margin: 0,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
            }}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <CloudUpload fontSize="large" style={{ marginBottom: "8px" }} />
            <Typography variant="body2" component="p" color="textSecondary">
              {jsonData
                ? "File uploaded: " + jsonData?.length + " rows"
                : "Drag and drop a CSV file here"}
            </Typography>
          </div>
          <Button
            variant="outlined"
            component="label"
            startIcon={<Description />}
            sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
          >
            Browse CSV
            <input type="file" hidden accept=".csv" onChange={handleFileChange} />
          </Button>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          disabled={!jsonData}
          onClick={handleConvertToJSON}
          sx={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
        >
          Convert to JSON
        </Button>
      </Stack>
    </Box>
  );
};

export default CsvToJsonConverter;
