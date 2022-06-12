import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import './home.scss'
import {data} from '../../testData'
import WidgetSmall from '../../components/widgetComponents/WidgetSmall'
import WidgetLarge from '../../components/widgetComponents/WidgetLarge'

export default function Home() {
  console.log(Object.keys(data[0])[1])

  return (
    <div className='home'>
        <Featured/>
        <Chart data={data} dataKey='name' title="User Analytics" grid/>
        <div className="widgets">
            <WidgetSmall/>
            <WidgetLarge/>
        </div>
    </div>
  )
}
