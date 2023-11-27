import './../MainContent/MainContent.css';
import { Route, Routes } from 'react-router-dom';
import MainDash from './../MainDash/MainDash';
import Sales from '../Sales/Sales';
import NotFound from '../NotFound/NotFound';
import SalesForm from '../Forms/Form';
import TechnicalStatus from '../TechnicalStatus/TechnicalStatus';
import AccountStatus from '../AccountStatus/AccountStatus';
// import SignUpForm from '../SignUpForm/SignUpForm';

function MainContent() {
    return (
        <Routes>
            <Route path="/" element={<MainDash/>} />
            <Route path="/dashboard" element={<MainDash/>} />
            <Route path="/sales" element={<Sales/>} />
            <Route path="/technicalstatus" element={<TechnicalStatus/>}/>
            <Route path="/accountstatus" element={<AccountStatus/>}/>
            <Route path="/form" element={<SalesForm/>} />
            {/* <Route path="/signup" element={<SignUpForm/>} />  */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default MainContent;