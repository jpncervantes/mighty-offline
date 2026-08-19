import { useLocation, useNavigate } from 'react-router-dom'
import { HEADER_MENU_REJUV } from '../constants/header-constants'
import { Navbar, NavItem } from '../styled-components/StyledNavigation'
import { useState } from 'react'
import './Header.css'

const HeaderRejuv = ({ setSidebarOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [menuItems, setMenuItems] = useState([])
  const [activeLink, setActiveLink] = useState('')

  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  const handleCloseSubMenu = () => {
    setActiveLink('')
    setMenuItems([])
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const clickNavItem = (e, item) => {
    console.log('item', item)
    if (item.submenu) {
      if (item.submenu.length > 0) {
        setActiveLink(item.label)
        setMenuItems(item.submenu)
        console.log('open', item.submenu)
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
      }
    } else {
      setActiveLink('')
      navigate(item.route)
    }
  }

  const filteredMenuItems = HEADER_MENU_REJUV.map((item) => {
    return item
  })

  return (
    <>
      <Navbar className="rejuv" $showSnackbar={false}>
        <div
          style={{ height: '69px', width: '70%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          className="branding-content"
        >
          <img style={{ cursor: 'pointer' }} onClick={() => navigate('/home')} src="/menu-logo.png" width={45} height={49} />
          <div className="profile-contents" style={{ height: '31px', gap: '20px', alignItems: 'center' }}>
            {/* Coins */}
            <div
              className="item-container"
              style={{
                borderRight: '1px solid #A3A3A3',
                height: '31px',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '20px',
                cursor: 'pointer'
              }}
            >
              <img src="/header-coins.png" height={43} width={43} />
              <span
                className="item-text"
                style={{
                  color: 'white'
                }}
              >
                10 ASTIG POINTS
              </span>
            </div>

            {/* Profile */}
            <div
              className="item-container"
              onClick={() => navigate('/profile')}
              style={{
                gap: '9px',
                borderRight: '1px solid #A3A3A3',
                height: '31px',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '20px',
                cursor: 'pointer'
              }}
            >
              <span
                className="item-text"
                style={{
                  color: `${location.pathname.includes('/profile') ? '#3CFF00' : 'white'}`
                }}
              >
                PROFILE
              </span>
            </div>

            {/* Logout */}
            <div
              className="item-container"
              style={{
                gap: '9px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
            >
              <span className="item-text" style={{color: 'white'}}>LOGOUT</span>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.39844 4.72344C6.59219 2.47344 7.74844 1.55469 10.2797 1.55469H10.3609C13.1547 1.55469 14.2734 2.67344 14.2734 5.46719V9.54219C14.2734 12.3359 13.1547 13.4547 10.3609 13.4547H10.2797C7.76719 13.4547 6.61094 12.5484 6.40469 10.3359"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10.2141 7.5H3.10156" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M4.49219 5.40625L2.39844 7.5L4.49219 9.59375"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* will display on mobile */}
          <div className="mobile-menu" style={{ gap: '10px', alignItems: 'center', color: "white", display: 'flex', paddingTop: '10px' }}>
            <div style={{ gap: '10px', display: 'flex', alignItems: 'center' }} onClick={() => setSidebarOpen()}>
              <span className="paragraph3v1" style={{ paddingBottom: '3px', marginLeft: '3px' }} onClick={() => setSidebarOpen()}>
                <img src='./menu.svg'/>
              </span>
              {/* <img src={MenuIcon} width={33} /> */}
            </div>
          </div>
        </div>

        {/* navigation section */}
        <div
          className="navigation-section"
          style={{ height: '56px', gap: '50px', width: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <div
            className="navitems-container"
            style={{ height: '56px', width: '68%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
            {filteredMenuItems.map((item, idx) => (
              <NavItem
                $disable={item.submenu && item.submenu.length === 0}
                key={idx}
                onClick={(e) => clickNavItem(e, item)}
                $active={activeLink === item.label || location.pathname.startsWith(item.route) ? '#3cff00' : 'white'}
              >
                {item.label}
                {item.submenu &&
                  (activeLink === item.label ? (
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.9462 8.75L8.24125 6.045C8.08689 5.89146 7.87803 5.80527 7.66031 5.80527C7.44259 5.80527 7.23373 5.89146 7.07938 6.045L4.375 8.75"
                        stroke="#3CFF00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.9462 6.25L8.24125 8.955C8.08689 9.10854 7.87803 9.19473 7.66031 9.19473C7.44259 9.19473 7.23373 9.10854 7.07938 8.955L4.375 6.25"
                        stroke={`${item.submenu && item.submenu.length === 0 ? '#A3A3A3' : activeLink === item.label || location.pathname.startsWith(item.route) || (item.submenu && item.submenu.some((subItem) => location.pathname === subItem.route)) ? '#3cff00' : 'white'}`}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
              </NavItem>
            ))}
          </div>
        </div>
      </Navbar>
    </>
  )
}

export default HeaderRejuv
