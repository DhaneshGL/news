import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Landing from "./components/Landing";
import "../src/App.css";
const App = () => {
  const [parentC, setParentC] = useState("us");
  const [currentRoute, setCurrentRoute] = useState("general");
  const [pInput, setPInput] = useState("");
  const [switchMode, setSwitchMode] = useState("on");
  const [scrollMode, setScrollMode] = useState(true);
  const [buttonStyle, setButtonStyle] = useState("btn-dark btn bt");
  const [switchPos1, setSwitchPos1] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, []);

  const setProgressValue = (progress) => {
    setProgress(progress);
  };

  const dmode = {
    backgroundColor: "#293551",
    color: " white",
    borderColor: "white",
  };
  const wmode = {
    backgroundColor: "#f0f0f0",
    color: " black",
    borderColor: "black",
  };
  const bdmode = {
    backgroundColor: "#1a1a2e",
    color: " white",
    borderColor: "white",
  };
  const bwmode = {
    backgroundColor: "white",
    color: " black",
    borderColor: "black",
  };

  const handleVariableChange = async (value) => {
    setCurrentRoute(window.location.pathname);
    setParentC(value);
  };

  const handleInputChange = (value) => {
    setPInput(value);
  };

  const toggleSwitchPos1 = () => {
    setSwitchPos1(!switchPos1);
  };

  const handleCatChange = (value) => {
    setCurrentRoute(value);
  };

  const handleSwitchMode = () => {
    if (switchMode === "off") {
      setSwitchMode("on");
      setButtonStyle("btn-success btn bt");
      document.body.style.backgroundColor = "#293551";
    } else {
      setSwitchMode("off");
      setButtonStyle("btn-danger btn bt");
      document.body.style.backgroundColor = "#f0f0f0";
    }
  };

  const handleScrollMode = () => {
    setScrollMode(!scrollMode);
  };

  const apiKey = "ddeec61f51824ae2b05a8b3d081fb5eb";

  return (
    <div className="text-align-center body">
      <div className="l">
        <Router>
          <NavBar
            onVariableChange={handleVariableChange}
            setSwitchPos1={toggleSwitchPos1}
            currentRoute={currentRoute}
            onInputChange={handleInputChange}
            onCatChange={handleCatChange}
            mode={switchMode}
            buttonStyle={buttonStyle}
          />
          <LoadingBar color="#f11946" progress={progress} />

          <div className="">
            <div className="switchPos form-check form-switch m-1">
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleSwitchMode}
              />

              <label
                className="form-check-label"
                style={
                  switchMode === "on"
                    ? { color: " black" }
                    : { color: " white" }
                }
                htmlFor="flexSwitchCheckDefault"
              >
                {switchMode === "on" ? "dark" : "light"} mode
              </label>
            </div>
            <div className="switchPos form-check form-switch m-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleScrollMode}
              />

              <label
                className="form-check-label"
                style={
                  switchMode === "on"
                    ? { color: " black" }
                    : { color: " white" }
                }
                htmlFor="flexSwitchCheckDefault"
              >
                {scrollMode ? "button" : "infinite"} scroll
              </label>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route
              path="/general"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`general-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="general"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`business-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="business"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`entertainment-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="entertainment"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`health-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="health"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`science-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="science"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`sports-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="sports"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`technology-${parentC}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput=""
                  country={parentC}
                  category="technology"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/search"
              element={
                <News
                  setProgress={setProgressValue}
                  key={`search-${pInput}`}
                  pageSize={8}
                  appKey={apiKey}
                  currentRoute={currentRoute}
                  pInput={pInput}
                  country="us"
                  category="general"
                  mode={switchMode}
                  buttonStyle={buttonStyle}
                  scrollMode={scrollMode}
                />
              }
            />
            <Route
              path="/About"
              element={<About mode={switchMode} buttonStyle={buttonStyle} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
