import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./TechnicalStatusTable.css";
import { Link } from "react-router-dom";

function createData(name, trackingId, date, status, technicalstatus, details) {
  return { name, trackingId, date, status, technicalstatus, details };
}

const rows = [
  createData("Ben Awad", 12306731, "2 March 2022", "Approved","Rejected"),
  createData("Christopher Nolan ", 98710456, "2 March 2022", "Pending", "Approved"),
  createData("Cyllian Murphy", 41233789, "4 March 2022", "Approved", "Pending"),
  createData("Travis Scott", 18908421, "19 March 2022", "Rejected", "Rejected"),
  createData("Travis Scott", 18908421, "19 March 2022", "Approved", "Rejected"),
  createData("Travis Scott", 18908421, "19 March 2022", "Rejected", "Rejected"),
  createData("Travis Scott", 18908421, "19 March 2022", "Rejected", "Rejected"),
  createData("Travis Scott", 18908421, "19 March 2022", "Pending", "Pending"),
  createData("Travis Scott", 18908421, "19 March 2022", "Approved", "Approved"),
  createData("Christopher Nolan ", 98710456, "2 March 2022", "Pending", "Approved"),
  createData("Cyllian Murphy", 41233789, "4 March 2022", "Approved", "Pending"),
];


const filteredRows = rows.filter((row) => row.technicalstatus === "Approved");

const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
  else{
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
}

export default function TechnicalStatusTable() {
  return (
      <div className="Table">


        <TableContainer className="container-table"
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
            <TableHead>
              <TableRow>
                <TableCell>Client Name</TableCell>
                <TableCell align="left">UID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="center">Sales Status</TableCell>
                <TableCell align="center">Technical Status</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="center">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className="status" style={makeStyle(row.technicalstatus)}>{row.technicalstatus}</span>
                  </TableCell>
                  <TableCell align="left" className="Details"><Link to="/details">Details</Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}



// const filteredRows = rows.filter((row) => row.status === "Approved");
