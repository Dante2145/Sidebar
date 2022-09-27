// // import React from 'react';
// // import {
// //   CDBSidebar,
// //   CDBSidebarContent,
// //   CDBSidebarFooter,
// //   CDBSidebarHeader,
// //   CDBSidebarMenu,
// //   CDBSidebarMenuItem,
// // } from 'cdbreact';
// // import { NavLink } from 'react-router-dom';

// // const Sidebar = () => {
// //   return (
// //     <div style={{ display: 'flex', position: 'absolute',left: '0px', top:'0px', height: '100vh', overflow: 'scroll initial' }}>
// //       <CDBSidebar textColor="#fff" backgroundColor="#1b1919">
// //         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
// //         </CDBSidebarHeader>

// //         <CDBSidebarContent className="sidebar-content">
// //           <CDBSidebarMenu>
// //             <NavLink exact to="/dashboard" activeClassName="activeClicked">
// //               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
// //             </NavLink>
// //             <NavLink exact to="/tables" activeClassName="activeClicked">
// //               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
// //             </NavLink>
// //             <NavLink exact to="/profile" activeClassName="activeClicked">
// //               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
// //             </NavLink>
// //             <NavLink exact to="/analytics" activeClassName="activeClicked">
// //               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
// //             </NavLink>

// //             <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
// //               <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
// //             </NavLink>
// //           </CDBSidebarMenu>
// //         </CDBSidebarContent>

// //         <CDBSidebarFooter style={{ textAlign: 'center' }}>
// //           <div
// //             style={{
// //               padding: '20px 5px',
// //             }}
// //           >
// //             EasyRent
// //           </div>
// //         </CDBSidebarFooter>
// //       </CDBSidebar>
// //     </div>
// //   );
// // };

// // export default Sidebar;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 100ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;