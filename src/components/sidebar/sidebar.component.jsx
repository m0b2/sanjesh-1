import React from 'react';
import UserPanel from '../sidebar_userHeader/userHeader';
import Menu from '../sidebar_Menu/menu.component';
import './sidebar.style.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { withRouter } from 'react-router-dom';
const Sidebar = ({ history }) => {

  return (
    <div className='sidebar-container'>
      <Menu title={'صفحه اصلی'} Icon={HomeIcon} historytoPush={'home'} history={history} />
      <Menu title={'قیاس'} Icon={CompareArrowsIcon} historytoPush={'compare'} history={history} />
      <Menu title={'سوالات'} Icon={HelpOutlineIcon} historytoPush={'question'} history={history} />
      <Menu title={'اعلان'} Icon={NotificationsIcon} historytoPush={'notification'} history={history} />
    </div>

  )
}


export default withRouter(Sidebar);