import React from "react";
import Graph from "../Graph/index";
import DataGrid from "../DataGrid/index";
import HeaderIcon from "../images/header.svg";
import SettingsIcon from "../images/settings.svg";
import FilterIcon from "../images/filter.svg";
import NotificationIcon from "../images/not.svg";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard_header">
        <div className="dashboard_content">
          <div className="header_image" style={{ paddingRight: "10px" }}>
            <img src={HeaderIcon} alt="header_icon" />
          </div>
          <div className="header_content">Engineer Report</div>
        </div>
        <div className="dashboard_actions">
          <img src={NotificationIcon} alt="notifications" />
          <img src={FilterIcon} alt="filters" />
          <img src={SettingsIcon} alt="settings" />
        </div>
      </div>
      <div className="dashboard_body">
        <div className="childone">
          <Graph />
        </div>
        <div className="childtwo">
          <DataGrid />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
