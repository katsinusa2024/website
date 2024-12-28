import React from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollToSection';

const Sidebar = ({ showSideBar, setShowSideBar, setSideRef }) => {
  const handleNavigate = () => {
    setShowSideBar(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const clickOnLink = id => {
    setShowSideBar(false);
    setSideRef(id);
    scrollToSection(id);
  };

  return (
    <div className={`sidebar ${showSideBar ? 'open' : ''}`}>
      <div className="bg" onClick={() => setShowSideBar(false)} />
      <div className="sidebar-content">
        <ul>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/welcome'}>Welcome</NavLink>
          </li>
          {/*<li onClick={() => handleNavigate()}>*/}
          {/*  <NavLink to={"/brunch"}>Brunch Menu</NavLink>*/}
          {/*</li>*/}
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/menu'}>Dinner Menu</NavLink>
          </li>

          <li onClick={() => handleNavigate()}>
            <NavLink to={'/bar'}>Bar Menu</NavLink>
          </li>
          <li onClick={() => clickOnLink('venue')}>
            <NavLink to={'/'}>Gallery</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/events'}>Events</NavLink>
          </li>
          {/*<li onClick={() => handleNavigate()}>*/}
          {/*  <NavLink to={'https://pos.toasttab.com/'}>Katsin Cards</NavLink>*/}
          {/*</li>*/}
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/reservation'}>Reservation</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/vip'}>Book VIP Room</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/dress-code'}>Dress Code</NavLink>
          </li>
          <li onClick={() => handleNavigate()}>
            <NavLink to={'/parking'}>Parking</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
