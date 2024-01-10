import './App.css'
import BarChart from './components/BarChart.js';
import DoughnutChart from './components/DoughnutChart.js';
import LineChart from './components/LineChart.js';

function App() {
  return (
    <div className='App'>
      <div className='chart'>
      <LineChart />
      <br /> <br />
      <BarChart />
      <br /> <br />
      <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
