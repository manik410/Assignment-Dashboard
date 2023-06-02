import React from "react";
import NotificationIcon from "../images/not.svg";
import One from "../images/one.svg";
import Two from "../images/two.svg";
import ArrowIcon from "../images/arrowDown.svg";
import "./DataGrid.scss";
import Footer from "../Footer";
const DataGrid = () => {
  const data = [
    {
      id: 1,
      img: "one",
      contributor: "Srinivas",
      closed: 68,
      reviewed: 68,
      score: 987,
    },
    {
      id: 2,
      img: "one",
      contributor: "Tom",
      closed: 48,
      reviewed: 48,
      score: 783,
    },
    {
      id: 3,
      img: "two",
      contributor: "Nawaz",
      closed: 24,
      reviewed: 42,
      score: 682,
    },
    {
      id: 4,
      img: "two",
      contributor: "Noah",
      closed: 42,
      reviewed: 34,
      score: 500,
    },
    {
      id: 5,
      img: "two",
      contributor: "Sera",
      closed: 34,
      reviewed: 24,
      score: 452,
    },
  ];
  return (
    <div className="dataGrid">
      <div className="header_grid">
        <div className="heading">Top Contributors</div>
        <div className="header_grid_actions">
          <span>Weekly</span>
          <img
            src={NotificationIcon}
            alt="notifications"
            height={"22px"}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <table className="gridTable">
        <thead>
          <tr>
            <td></td>
            <td>Contributors</td>
            <td>Closed</td>
            <td>Reviewed</td>
            <td>Score</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item?.id}>
                <td>
                  <img src={item?.img === "one" ? One : Two} alt="icon" />
                </td>
                <td>{item?.contributor}</td>
                <td>{item?.closed}</td>
                <td>{item?.reviewed}</td>
                <td>{item?.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Footer
        src={ArrowIcon}
        content={"Users who have commited key secrets in their project"}
      />
    </div>
  );
};
export default DataGrid;
