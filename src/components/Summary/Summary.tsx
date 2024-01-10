import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TableContent, { salesInformation } from "../elements/TableContent";
import { GridColDef } from "@mui/x-data-grid";
import ModalAddInformation from "../elements/ModalAddInformation";

export const Summary = () => {
  const columns: GridColDef[] = [
    { field: "brand", headerName: "Brand", width: 90 },
    {
      field: "model",
      headerName: "Model",
      width: 150,
      editable: false,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      editable: false,
    },
    {
      field: "color",
      headerName: "Color",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "sold",
      headerName: "Sold",
      type: "number",
      width: 110,
      editable: false,
    },
  ];

  const fakeData: salesInformation[] = [
    {
      id: 1,
      brand: "Rolex",
      model: "Submariner",
      quantity: 2,
      color: "Black",
      sold: 90000,
      earning: 40000,
    },
    {
      id: 2,
      brand: "Rolex",
      model: "Datejust",
      quantity: 2,
      color: "Black",
      sold: 90000,
      earning: 40000,
    },
    {
      id: 3,
      brand: "Audemars Piguet",
      model: "Datejust",
      quantity: 2,
      color: "Black",
      sold: 90000,
      earning: 40000,
    },
  ];

  const tableColumns = [
    "Brand",
    "Model",
    "Quantity",
    "Color",
    "Price",
    "Earning",
  ];
  const [year, setYear] = useState("2023");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleYear = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Total number of sales this month: 15
      </Typography>

      <Typography variant="h5" gutterBottom>
        Total amount of sales: 1.000.000 CRC
      </Typography>

      <Typography variant="h5" gutterBottom>
        Total earning this month: 1.600.000 CRC
      </Typography>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">YEAR</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={year}
          onChange={handleYear}
          label="Year"
        >
          <MenuItem value={2023}>2023</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FormControl>

      <Divider />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="outlined" style={{ margin: "10px" }}>
          January
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          February
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          March
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          April
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          May
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          June
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          July
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          August
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          September
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          October
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          November
        </Button>
        <Button variant="outlined" style={{ margin: "10px" }}>
          December
        </Button>
      </div>
      <Divider />

      <br />
      <TableContent columns={columns} data={fakeData} />
      <br />
      <Button variant="contained" onClick={handleOpen}>
        Add to this month
      </Button>

      <ModalAddInformation open={open} close={handleClose} month={'January'}/>
    </>
  );
};
