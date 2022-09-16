// import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landingpage from "./containers/landingpage";
import LoginPage from "./containers/LoginPage";
import Register from "./containers/Register";
// import LoginPage from "./containers/LoginPage";
import BecomeAPartner from "./Components/Header/BecomeAPartner";
import Productscreen from "./Components/productScreen";
import NectarCRMReview from "./Components/NectarCRMReview";
import CRMReview from "./Components/CRMreview";
import Notification from "./Components/Notification";
import CRM from "./Components/CRM"
import HRMS from "./Components/HRMS";
import Products from "./Components/Products"





import Cart from "./Components/Cart";
import ForgetPassword from "./containers/ForgetPassword";
import TelecomeServices from "./Components/TelecomeServices";
import HostingServices from "./Components/HostingServices";
import Modal from "./Components/Header/Modal";
import SideNav from "./Components/SideNav";
import PartnerDashboard from "./containers/partnerDashboard";
import GPSOverview from "./Components/GPSOverview";
import Feature from "./Components/Feature";
import GPSAccordian from "./Components/GPSAccordian";
import NerroTracOverview from "./Components/NerroTracOverview";
import NT3Overview from "./Components/NT3Overview";
import NDatuOverview from "./Components/NDatuOverview";
import NDatuFeatures from "./Components/NDatuFeatures";






import Login from "./containers/Admin/AdLogin";
import NectarCRMtabs from "./containers/NectarCRMtabs"
import NectarHRMS from "./Components/NectarHRMS";
import NectarGPS from "./Components/NectarGPS";
import NerroTrac from "./Components/NerroTrac";
import ITSMTool from "./Components/ITSMTool";
import NDatu from "./Components/NDatu";
import NectarHRMStab from "./Components/NectarHRMStab";
import NectarGPSTracertab from './Components/NectarGPSTracertab'
import NerroTractab from './Components/NerroTractab'
import ITSMTooltab from "./Components/ITSMTooltab";
import NDatutab from './Components/NDatutab'




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />

          <Route path="/products" element={<Products />} />
          {/*Overview Page*/}
          <Route path="/gpsoverview" element={<GPSOverview />} />
          <Route path="/hrmsoverview" element={<HRMS />} />
          <Route path="/nt3overview" element={<NT3Overview />} />
          <Route path="/nerrotracoverview" element={<NerroTracOverview />} />
          <Route path="/ndatuoverview" element={<NDatuOverview />} />
          <Route path="/ndatufeatures" element={<NDatuFeatures />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/gpsaccordian" element={<GPSAccordian />} />
          {/*Header page*/}
        
      
          <Route path="/ndatu" element={<NDatu
            title="nDatu"
            subtext1="It is web-based Task Management Tool. It is easily deployable to aid online product for task management with an extensive database."
            item1="Reporting, Tracking, Assigning & Resolving tasks"
            item2=" Real Time Tracking & Communication "
            item3="Manage Multiple Clients"

            heading="Get 2 months Free Subscription"
            buttontext="Free Demo"
            buttontext2="Buy Now"
             />} />




          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/becomeApartner" element={<BecomeAPartner />} />
          <Route path="/productscreen" element={<Productscreen />} />


          <Route path="/nectarcrmreview" element={<NectarCRMReview />} />




          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/review" element={<CRMReview />}></Route>
          <Route path="/crm" element={<CRM
            title="Nectar CRM"
            subtext1="The easy to use and customizable CRM for your Marketing, Sales,
            & Customer Service Teams."
            item1="Better Sales Performance"
            item2="Increased Profitability & Efficiency "
            item3="CRM Improves Your Customer Service"
            heading="Get 2 months Free Subscription"
            buttontext="Free Demo"
            buttontext2="Buy Now"
          />} />


          <Route path="/productscreen" element={<Productscreen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/telecomeservices" element={<TelecomeServices />} />
          <Route path="/hostingservices" element={<HostingServices />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/nectarcrmtab" element={<NectarCRMtabs />} />
          <Route path="/nectarhrmstab" element={<NectarHRMStab/>} />
          <Route path="/nectarcrmgpstracertab" element={<NectarGPSTracertab/>}/>
          <Route path="/nerrotractab" element={<NerroTractab/>}></Route>
          <Route path="/itsmtooltab" element={<ITSMTooltab/>}></Route>
          <Route path="ndatutab" element={<NDatutab/>}></Route>
    
     
   
          {/* Routes of Reseller */}
          <Route path="reseller" element={<SideNav />}>
            <Route path="" element={<PartnerDashboard />} />
          </Route>

          {/* Routes For Admin Part */}
          <Route path="admin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
