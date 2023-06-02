import React from "react";

import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <i className="fa fa-bars" />
      <ul>
        <li>Dashboards</li>
        <li>Salesforce</li>
        <li className="active">Engineer Report</li>
      </ul>
    </div>
  );
};
export default Header;
