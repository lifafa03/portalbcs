// import "./App.css";
// import MainDash from "./components/MainDash/MainDash";
// import RightSide from "./components/RigtSide/RightSide";
// import Sidebar from "./components/Sidebar";
// import { BrowserRouter } from "react-router-dom";
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";

// function App() {
//   return (
//       <div className="App">
//         <div className="AppGlass">
//           <Sidebar />
//           <MainDash />
//           <RightSide />
//         </div>
//       </div>

//   );
// }

// export default App;
import './App.css'
import MainContent from './components/MainContent/MainContent';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainContent/>
        {/* <RightSide/> */}
      </div>
    </div>
  );
}

export default App;