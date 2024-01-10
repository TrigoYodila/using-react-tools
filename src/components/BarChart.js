import React from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto';

function BarChart() {

  const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'Mar'],
    datasets:[
        {
            label:'Sales for 2021 (M)',
            data : [3,2,2,1,5],
            borderColor:['rgba(255,206,86,0.2)'],
            backgroundColor:['rgba(255,206,86,0.2)'],
            pointBackgroundColor:'rgba(255,206,86,0.2)',
            pointBorderColor:'rgba(255,206,86,0.2)'
        },
        {
          label:'Sales for 2019 (M)',
          data:[1,2,3,2,4]
        }
    ]
  }

  const options = {
    animation:true, //default (false)
    plugins:{
      title:{
        display:true,
        text:'Bar Chart'
      },
      tooltip:{
        enabled:false
      },
      legend:{
        display:true, // default (false)
        position:"bottom"
      },

    },
    scales:{ 
      y:{
        max:6,
        min:0,
        ticks:{
          stepSize:1
        }
      }
  },
  }

  return (
    // <Line data={data}/>
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default BarChart