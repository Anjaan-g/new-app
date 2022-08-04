import { NavLink, Link } from "react-router-dom"
import { Nav, Navbar } from 'react-bootstrap';

import {
  UserOutlined,
  FundViewOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

const NavbarComponent = () => {
  return (
    <header className="top_nav header">
        <div className="customContainer">
          <nav>
            <Navbar.Brand>
              <Link to="/">
                {/* <Logo />
                 */}
                 Logo
              </Link>
            </Navbar.Brand>
            <Nav className="d-flex desktopHeader">
              {/* <NavLink
                to="/"
                className="nav-link"
                activeClassName="active-nav-link"
                exact
              >
                Home
              </NavLink> */}
              {/* <NavLink
                to="/livemarket"
                className={
                  currentHrs >= 11 && currentHrs <= 15
                    ? 'nav-link live active'
                    : 'nav-link live'
                }
                activeClassName="active-nav-link"
                onClick={onLiveMarketClick}
              >
                <AreaChartOutlined /> LIVE
              </NavLink> */}

              <NavLink
                to="/marketcharts"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <FundViewOutlined /> Market Maps
              </NavLink>
              <NavLink
                to="/marketscreener"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Screener
              </NavLink>
              {/* <NavLink
                to="/dashboard/time-series"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Time Series
              </NavLink>
              <NavLink
                to="/dashboard/technical-analysis-chart"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Technical Analysis
              </NavLink> */}
              <NavLink
                to="/tools"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                <AppstoreOutlined /> Tools
              </NavLink>

              <NavLink
                to="/trading/tradingview"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Trading
              </NavLink>
              {/* <NavLink
                to="/main-table"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Main Table
              </NavLink> */}
              <NavLink
                to="/floorsheet"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Floorsheet
              </NavLink>
              <NavLink
                to="/blogs"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Blogs
              </NavLink>
              <NavLink
                to="/advanced/active_advanced_slug?"
                className="nav-link"
                activeClassName="active-nav-link"
              >
                Advanced
              </NavLink>

              
              
            </Nav>
            {/* mobile header */}
          </nav>
        </div>
      </header>
  )
}

export default NavbarComponent