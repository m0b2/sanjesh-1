import React from 'react';
import UserPanel from '../sidebar_userHeader/userHeader';
import Menu from '../sidebar_Menu/menu.component';
import './sidebar.style.css';
const Sidebar = () => {

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 mysidebar">

        <div className="sidebar" style={{ direction: 'ltr' }}>
          <div style={{ direction: 'rtl' }}>
            {/* Sidebar user panel (optional) */}
            <UserPanel />
            {/* Sidebar Menu */}
            <Menu />
            {/* /.sidebar-menu */}
          </div>
        </div>
      </aside>
    </div>

  )
}


export default Sidebar;