import React from 'react'
import './widgetlarge.scss'
import anime from '../../media-files/images/anime1.jpg'


export default function WidgetLarge() {

  const Button = ({ type }) => {
    return (<button className={'widget-large-' + type}>{type}</button>)
  }

  return (
    <div className='widget-large'>
      <h2>Latest transactions</h2>
      <table className="widget-large-table">
        <tbody>
          <tr className="widget-row">
            <th className="widget-headers">Customer</th>
            <th className="widget-headers">Date</th>
            <th className="widget-headers">Amount</th>
            <th className="widget-headers">Status</th>
          </tr>
          <tr className="widget-row">
            <td className="widget-large-user">
              <img className='widget-large-image' src={anime} alt="" />
              <span>Shinx Stark</span>
            </td>
            <td className="widget-large-date">17 Jun 2022</td>
            <td className="widget-large-amount">$205.00</td>
            <td className="widget-large-status"><Button type="Approved" /></td>
          </tr>
          <tr className="widget-row">
            <td className="widget-large-user">
              <img className='widget-large-image' src={anime} alt="" />
              <span>Shinx Stark</span>
            </td>
            <td className="widget-large-date">17 Jun 2022</td>
            <td className="widget-large-amount">$205.00</td>
            <td className="widget-large-status"><Button type="Declined" /></td>
          </tr>
          <tr className="widget-row">
            <td className="widget-large-user">
              <img className='widget-large-image' src={anime} alt="" />
              <span>Shinx Stark</span>
            </td>
            <td className="widget-large-date">17 Jun 2022</td>
            <td className="widget-large-amount">$205.00</td>
            <td className="widget-large-status"><Button type="Pending" /></td>
          </tr>
          <tr className="widget-row">
            <td className="widget-large-user">
              <img className='widget-large-image' src={anime} alt="" />
              <span>Shinx Stark</span>
            </td>
            <td className="widget-large-date">17 Jun 2022</td>
            <td className="widget-large-amount">$205.00</td>
            <td className="widget-large-status"><Button type="Approved" /></td>
          </tr>
          <tr className="widget-row">
            <td className="widget-large-user">
              <img className='widget-large-image' src={anime} alt="" />
              <span>Shinx Stark</span>
            </td>
            <td className="widget-large-date">17 Jun 2022</td>
            <td className="widget-large-amount">$205.00</td>
            <td className="widget-large-status"><Button type="Declined" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
