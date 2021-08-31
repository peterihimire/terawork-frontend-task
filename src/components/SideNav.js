import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <aside className='sidenav'>
      <div className="navbar-container">
        {/* <div className={isColor ? "navbar-main navbar-padding" : "navbar-main"}>
          <div className="navbar-head">
            <button
              className="navbar-btn"
              type="button"
              onClick={openDrawerHandler}
            >
              <img src={MenuIcon} alt="menu icon" className="menu-icon" />
            </button>
            <div className="navbar-logo-div">
              <Link to="/" className="navbar-logo">
                <strong>
                  bnk<span>-homes</span>
                </strong>
              </Link>
            </div>
          </div>
          <NavLinks scrollColor={isColor} />
        </div> */}
        <h2>This is side Nav</h2>
      </div>
    </aside>
  );
};

export default SideNav;
