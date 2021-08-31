import React from "react";
import SideNav from "../components/SideNav";
import Search from "../components/Search";
import Result from "../components/Result";
import { connect } from "react-redux";

const HomePage = () => {
  return (
    <div id="page-container" className="App">
      <div id="content-wrapper">
        <SideNav />
        {/* <Banner /> */}
        <div className="main-content">
          <div className="main-content-container">
            {/* <Title title="Move-out List" />
          <OccupantColumns />
          <OccupantList /> */}
            <Search />
            <Result />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  // const { movies } = state;
  return { state };
};
export default connect(mapStateToProps)(HomePage);