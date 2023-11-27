import './../Sales/Sales.css';


import SalesTable from '../SalesTable/SalesTable';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import RightSide from '../RigtSide/RightSide';

function Sales() {
    return (
        <><div className="sales">

            <h1 className='heading'>Sales</h1><Button className='createLead' variant="contained"><Link to="/form">Create</Link></Button>
            {/* <MainDash/> */}
            <div className='sales-table-content'><SalesTable /></div>
        </div><RightSide/></>
    )
}
export default Sales;