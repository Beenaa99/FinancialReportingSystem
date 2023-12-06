import Chart from './Chart';
import { Link } from '@mui/material';

function Visualization( {mongo_url, dashboardId}) {
    
    const dashboard_id_temp = '65501421-73f7-41af-809b-af00ebda6259';
    const dashboard_url = 'https://charts.mongodb.com/charts-project-0-twavb/public/dashboards/65501421-73f7-41af-809b-af00ebda6259';
    return(
        
        <div className="charts">
        <div className='heading'><p>You may also view the dashboard <a href = {mongo_url}  target="_blank">here</a></p></div>
      <Chart height={'100vh'} width={'300rem'} dashboardId={dashboardId}/>

      </div>
    );
}

export default Visualization;