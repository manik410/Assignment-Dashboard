import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "100%", marginTop: "25px" }}>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
