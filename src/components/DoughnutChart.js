import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto';

function DoughnutChart() {

  const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'Mar'],
    datasets:[
        {
            label:'Sales for 2021 (M)',
            data : [3,2,2,1,5],
            //borderColor:['rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)','rgba(54,162,235,0.2)'],
            backgroundColor:['rgba(255,99,132,1)','rgba(255,205,86,1)','rgba(54,162,235,1)','rgba(255,159,64,1)','rgba(153,102,255,1)'],
            // pointBackgroundColor:'rgba(255,206,86,0.2)',
            // pointBorderColor:'rgba(255,206,86,0.2)'
        },
        // only one dataset
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
    // not scales
  }

  return (
    // <Line data={data}/>
    <div>
      <Doughnut data={data} options={options}/>
    </div>
  )
}

export default DoughnutChart