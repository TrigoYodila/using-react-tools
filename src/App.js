import './App.css'
import BarChart from './components/BarChart.js';
import LineChart from './components/LineChart.js';

function App() {
  return (
    <div className='App'>
      <div className='chart'>
      <LineChart />
      <br /> <br />
      <BarChart />
      </div>
    </div>
  );
}

export default App;
