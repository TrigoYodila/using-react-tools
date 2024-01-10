import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {

  const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'Mar'],
    dataSets:[
        {
            label:'Sales for 2021 (M)',
            data : [3,2,2,1,5]
        }
    ]
  }

  return (
    <Line data={data}/>
  )
}

export default LineChart