import React from "react";
import NotificationIcon from "../images/not.svg";
import ArrowIcon from "../images/arrowup.png";
import "./Graph.scss";
import Footer from "../Footer";
const Graph = () => {
  const graphData = [
    {
      color: "#FF9B85",
      score: "68%",
      info: "Issues Created",
    },
    {
      color: "#17BEBB",
      score: "48%",
      info: "Issues Resolved",
    },
    {
      color: "#EE6055",
      score: "28%",
      info: "Issues in Progress",
    },
  ];
  const GraphLine = ({ item }) => {
    return (
      <div className="graphLine" key={item?.score}>
        <div
          className="progress_bar"
          style={{ width: item?.score, background: item?.color }}
        >
          <span className="tooltiptext">{`${item?.score?.replace(
            "%",
            ""
          )} issues were reported`}</span>
        </div>
        <div className="score_data">{item?.score?.replace("%", "")}</div>
      </div>
    );
  };

  return (
    <div className="graph">
      <div className="graph_header">
        <div className="heading">
          Jira Issue Status
          <div className="subHeading">MAY 24</div>
        </div>
        <div className="graph_actions">
          <span>Daily</span>
          <img
            src={NotificationIcon}
            alt="notifications"
            height={"22px"}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      {graphData?.map((item, index) => {
        return <GraphLine item={item} key={`graphData${index}`} />;
      })}
      <div className="graph_meta">
        {graphData?.map((item, index) => {
          return (
            <div className="graph_meta_labels" key={index}>
              <div className="dot" style={{ background: item?.color }}></div>
              <div className="info">{item?.info}</div>
            </div>
          );
        })}
      </div>
      <div className="graph_summary">
        <div className="parent_summary">
          <div>1k</div>
          <div>Issue in Total Added this week</div>
        </div>
        <div className="parent_summary">
          <div>90</div>
          <div>Issues Today</div>
        </div>
      </div>
      <Footer
        src={ArrowIcon}
        height={"45px"}
        content={"Higher by 50% compared to last week at 500"}
      />
    </div>
  );
};
export default Graph;
