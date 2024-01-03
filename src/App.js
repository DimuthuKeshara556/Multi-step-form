import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import AddOns from "./pages/AddOns";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <div className="bg-white sm:w-[60rem] h-[35rem] mt-[100px] sm:mt-0 rounded-xl shadow-xl p-4 flex flex-col sm:flex sm:flex-row justify-between">
            <Sidebar />
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/selectplan" element={<SelectPlan />} />
              <Route path="/addons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/thankyou" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
     </div> 
  );
}

export default App;
