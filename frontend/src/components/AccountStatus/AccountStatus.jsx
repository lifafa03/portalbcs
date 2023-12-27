import './../Sales/Sales.css'
import RightSide from '../RigtSide/RightSide';
import AccountStatusTable from '../AccountStatusTable/AccountStatusTable';
import './AccountStatus.css'

function AccountStatus() {
    return (
        <>
            <div className="accountstatus">
                <h1 className='accountstatusheader'>Account Status</h1>
                <AccountStatusTable />
            </div>
            <RightSide />
        </>
    )
}

export default AccountStatus;