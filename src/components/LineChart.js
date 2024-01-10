import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';

function LineChart() {

  const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'Mar'],
    datasets:[
        {
            label:'Sales for 2021 (M)',
            data : [3,2,2,1,5]
        }
    ]
  }

  return (
    // <Line data={data}/>
    <div>
      <Line data={data} />
    </div>
  )
}

export default LineChart