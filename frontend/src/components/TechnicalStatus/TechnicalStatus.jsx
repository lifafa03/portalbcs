import './../Sales/Sales.css';
import TechnicalStatusTable from '../TechnicalStatusTable/TechnicalStatusTable';
import './TechnicalStatus.css'
import RightSide from '../RigtSide/RightSide';

function TechnicalStatus() {
    return (
        <><div className="technicalstatus">

            <h1 className='technicalstatusheader'>Technical Status</h1>
            <TechnicalStatusTable />
        </div><RightSide /></>
    )
}

export default TechnicalStatus;