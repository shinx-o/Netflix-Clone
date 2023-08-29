import React, { useEffect, useMemo, useState } from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import './home.scss'
import WidgetSmall from '../../components/widgetComponents/WidgetSmall'
import WidgetLarge from '../../components/widgetComponents/WidgetLarge'
import axios from 'axios';


export default function Home() {
  const months = useMemo(() => ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'Spetember', 'October', 'November', 'December'], []);
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", { headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem('user')) } });
        const sortedStats = res.data.sort(function (a, b) {
            return a._id - b._id;
          })
        sortedStats.map((item) => setUserStats((prev) => [
          ...prev,
          { name: months[item._id - 1], "New User": item.total },
        ]));

      } catch (err) {
        console.log(err);
      }

    }
    getStats();
  }, [months]);


  return (
    <div className='home'>
      {
        userStats.length !== 0 && (
          <>
            <Featured />
            <Chart data={userStats} dataKey='name' title="User Analytics" grid />
            <div className="widgets">
              <WidgetSmall />
              <WidgetLarge />
            </div>
          </>
        )}
    </div>
  )
}
