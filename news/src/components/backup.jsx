import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentC: "us",
      currentRoute: "general",
      pInput: "",
      switch: "on",
      scrollMode: true,
      buttonStyle: "btn-dark btn bt",
      switchPos1: false,
      progress: 0,
    };
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  dmode = { backgroundColor: "#293551", color: " white", borderColor: "white" };
  wmode = { backgroundColor: "#f0f0f0", color: " black", borderColor: "black" };
  bdmode = {
    backgroundColor: "#1a1a2e",
    color: " white",
    borderColor: "white",
  };
  bwmode = { backgroundColor: "white", color: " black", borderColor: "black" };
  handleVariableChange = async (value) => {
    this.setState({ currentRoute: window.location.pathname });
    this.setState({ parentC: value });
  };
  handleInputChange = (value) => {
    this.setState({ pInput: value });
  };
  setSwitchPos1 = () => {
    if (this.state.switchPos1 === true) {
      this.setState({ switchPos1: false });
    } else {
      this.setState({ switchPos1: true });
    }
  };

  handleCatChange = (value) => {
    this.setState({ currentRoute: value }, () => {});
  };
  handleSwitch = () => {
    if (this.state.switch === "off") {
      this.setState(
        { switch: "on", buttonStyle: "btn-success btn  bt" },
        () => {
          document.body.style.backgroundColor = "#293551";
        }
      );
    } else {
      this.setState({ switch: "off", buttonStyle: "btn-danger btn bt" }, () => {
        document.body.style.backgroundColor = "#f0f0f0";
      });
    }
  };
  handleScroll = async() => {
    if (this.state.scrollMode === false) {
      this.setState({ scrollMode: true });
    } else {
      this.setState({ scrollMode: false });
    }
  };

  apiKey = "ddeec61f51824ae2b05a8b3d081fb5eb";
  render() {
    return (
      <div className='text-align-center'>
        <Router>
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <NavBar
            onVariableChange={this.handleVariableChange}
            setSwitchPos1={this.setSwitchPos1}
            currentRoute={this.state.currentRoute}
            onInputChange={this.handleInputChange}
            onCatChange={this.handleCatChange}
            mode={this.state.switch}
            buttonStyle={this.state.buttonStyle}
          />
          <div className=''>
            <div className='switchPos form-check form-switch m-1'>
              <input
                className='form-check-input '
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
                onChange={this.handleSwitch}
              />

              <label
                className='form-check-label'
                style={this.state.switch === "on" ? this.dmode : this.wmode}
                htmlFor='flexSwitchCheckDefault'>
                {this.state.switch === "on" ? "dark" : "light"} mode
              </label>
            </div>
            <div className='switchPos form-check form-switch m-1'>
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
                onChange={this.handleScroll}
              />

              <label
                className='form-check-label'
                style={this.state.switch === "on" ? this.dmode : this.wmode}
                htmlFor='flexSwitchCheckDefault'>
                {this.state.scrollMode === true ? "button" : "infinite"} scroll
              </label>
            </div>
          </div>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`/-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              exact
              path='/general'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`general-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='general'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />

            <Route
              exact
              path='/business'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`business-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='business'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              exact
              path='/entertainment'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`entertainment-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='entertainment'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              exact
              path='/health'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`health-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='health'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                />
              }
            />
            <Route
              exact
              path='/science'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`science-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='science'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              exact
              path='/sports'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`sports-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='sports'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              exact
              path='/technology'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`technology-${this.state.parentC}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput=''
                  country={this.state.parentC}
                  category='technology'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              path='/search'
              element={
                <News
                  setProgress={this.setProgress}
                  key={`search-${this.state.pInput}`}
                  pageSize={8}
                  appKey={this.apiKey}
                  currentRoute={this.state.currentRoute}
                  pInput={this.state.pInput}
                  country='us'
                  category='general'
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                  scrollMode={this.state.scrollMode}
                />
              }
            />
            <Route
              path='/About'
              element={
                <About
                  mode={this.state.switch}
                  buttonStyle={this.state.buttonStyle}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
