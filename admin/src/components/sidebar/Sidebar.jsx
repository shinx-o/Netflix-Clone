import React from 'react'
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InsightsIcon from '@mui/icons-material/Insights';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="wrapper">
                <div className="menu">
                    <h5>Dashboard</h5>
                    <ul className="list">
                        <Link className='link' to='/'>
                            <li>
                                <HomeIcon />
                                <span>Home</span>
                            </li>
                        </Link>
                        <Link className='link' to='/analytics'>
                            <li>
                                <TrendingUpIcon />
                                <span>Analytics</span>
                            </li>
                        </Link>
                        <Link className='link' to='/sales'>
                            <li>
                                <InsightsIcon />
                                <span>Sales</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="menu">
                    <h5>Quick Menu</h5>
                    <ul className="list">
                        <Link className='link' to='/users'>
                            <li>
                                <PersonIcon />
                                <span>Users</span>
                            </li>
                        </Link>
                        <Link className='link' to='/products'>
                            <li>
                                <CategoryIcon />
                                <span>Products</span>
                            </li>
                        </Link>
                        <Link className='link' to='/transactions'>
                            <li>
                                <AttachMoneyIcon />
                                <span>Transactions</span>
                            </li>
                        </Link>
                        <Link className='link' to='/reports'>
                            <li>
                                <BarChartIcon />
                                <span>Reports</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="menu">
                    <h5>Notifications</h5>
                    <ul className="list">
                        <Link className='link' to='/mail'>
                            <li>
                                <EmailIcon />
                                <span>Mail</span>
                            </li>
                        </Link>
                        <Link className='link' to='/feedback'>
                            <li>
                                <RateReviewIcon />
                                <span>Feedback</span>
                            </li>
                        </Link>
                        <Link className='link' to='/messages'>
                            <li>
                                <MessageIcon />
                                <span>Messages</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="menu">
                    <h5>Staff</h5>
                    <ul className="list">
                        <Link className='link' to='/manage'>
                        <li>
                            <ManageAccountsIcon />
                            <span>Manage</span>
                        </li>
                        </Link>
                        <Link className='link' to='analytics'>
                        <li>
                            <TrendingUpIcon />
                            <span>Analytics</span>
                        </li>
                        </Link>
                        <Link className='link' to='/reports'>
                        <li>
                            <ReportIcon />
                            <span>Reports</span>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
