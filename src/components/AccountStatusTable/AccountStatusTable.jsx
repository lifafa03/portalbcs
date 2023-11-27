import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./AccountStatusTable.css";
import { Link } from "react-router-dom";

function createData(orderID, name, trackingId, date, technicalstatus, accountstatus, details) {
  return { orderID, name, trackingId, date, technicalstatus,accountstatus, details };
}

const rows = [
  createData("1234", "Ben Awad", 12306731, "2 March 2022", "Approved","Rejected"),
  createData("2345", "Christopher Nolan ", 98710456, "2 March 2022",  "Approved", "Pending"),
  createData("3456", "Cyllian Murphy", 41233789, "4 March 2022", "Approved",  "Approved"),
  createData("4567", "Jimmy Donald", 18908421, "19 March 2022", "Approved",  "Rejected"),
  createData("5678", "Travis lorej", 18908321, "19 March 2022", "Approved", "Rejected"),
  createData("6789", "Carl hsfhd", 18908021, "19 March 2022", "Rejected",  "Rejected"),
  createData("7890", "Smith Scott", 18908421, "19 March 2022", "Approved", "Approved"),
  createData("8910", "Raven Claw", 10208371, "19 March 2022", "Pending",  "Pending"),
  createData("9012", "Shaun Scott", 18001421, "19 March 2022", "Approved", "Approved"),
  createData("0123", "Christopher Paul ", 98710456, "2 March 2022", "Pending", "Approved"),
  createData("1235", "Cyllian Ross", 41273789, "4 March 2022", "Approved", "Approved"),
];


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

function AccountStatusTable() {

  const filteredRows = rows.filter((row) => row.accountstatus === "Approved");

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
                {/* <TableCell align="center">Sales Status</TableCell> */}
                <TableCell align="center">Technical Status</TableCell>
                <TableCell align="center">Account Status</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.orderID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="center">
                    <span className="status" style={makeStyle(row.technicalstatus)}>{row.technicalstatus}</span>
                  </TableCell>
                  {/* <TableCell align="center">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell> */}
                  <TableCell align="center">
                    <span className="status" style={makeStyle(row.accountstatus)}>{row.accountstatus}</span>
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

export default AccountStatusTable;



