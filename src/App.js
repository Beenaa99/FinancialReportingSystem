
//import './App.scss';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Visualization from './Visualization';


function App() {
  const external_url_payment = 'https://charts.mongodb.com/charts-project-0-twavb/public/dashboards/65501421-73f7-41af-809b-af00ebda6259';
  const external_url_product = 'https://charts.mongodb.com/charts-project-0-twavb/public/dashboards/ad150823-83b3-4d34-90ff-1e005ed54fe3';
  const external_url_customer = 'https://charts.mongodb.com/charts-project-0-twavb/public/dashboards/02565e6f-750e-48e9-967b-5436c1a134c1';
  const external_url_employee = 'https://charts.mongodb.com/charts-project-0-twavb/public/dashboards/d8215ed3-865c-429a-9c0d-ce3a7a55c5c7';

  const dashboard_id_product = 'ad150823-83b3-4d34-90ff-1e005ed54fe3';
  const dashboard_id_payment = '65501421-73f7-41af-809b-af00ebda6259';
  const dashboard_id_customer = '02565e6f-750e-48e9-967b-5436c1a134c1';
  const dashboard_id_employee = 'd8215ed3-865c-429a-9c0d-ce3a7a55c5c7';

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/home/Customer' element={<Visualization mongo_url={external_url_customer} dashboardId={dashboard_id_customer}/>}/>
        <Route path='/home/Employee' element={<Visualization mongo_url={external_url_employee} dashboardId={dashboard_id_employee}/>}/>
        <Route path='/home/Product' element={<Visualization mongo_url={external_url_product} dashboardId={dashboard_id_product}/>}/>
        <Route path='/home/Payment' element={<Visualization mongo_url={external_url_payment} dashboardId={dashboard_id_payment}/>}/>
        <Route path='/Customer' element={<Visualization mongo_url={external_url_customer} dashboardId={dashboard_id_customer}/>}/>
        <Route path='/Employee' element={<Visualization mongo_url={external_url_employee} dashboardId={dashboard_id_employee}/>}/>
        <Route path='/Product' element={<Visualization mongo_url={external_url_product} dashboardId={dashboard_id_product}/>}/>
        <Route path='/Payment' element={<Visualization mongo_url={external_url_payment} dashboardId={dashboard_id_payment}/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
