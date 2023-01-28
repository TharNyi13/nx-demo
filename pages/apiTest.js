import axios from "axios";
import { useEffect } from "react";
import React from "react";
import ReactPlayer from "react-player";
import https from "https";

const TestApiPage = () => {
  const fetchModuleInformation = async () => {
    await axios
      .get("https://localhost:7001/api/moduleInformation")
      .then((response) => {
        console.log("ModuleInformation: ", response.data);
      });
  };

  const fetchGetTime = async () => {
    await axios.get("https://localhost:7001/api/getTime").then((response) => {
      console.log("GetTime: ", response.data);
    });
  };

  const fetchLoginUser = async () => {
    const username = "admin";
    await axios
      .get(`https://localhost:7001/rest/v1/login/users/${username}`)
      .then((response) => {
        console.log("LoginUser: ", response.data);
      });
  };

  const config = {
    headers: {
      //   Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      //   "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      //   "Access-Control-Max-Age": "86400",
      //   Authorization: "Bearer vms-d96b407679ef1b39bcc986173a5081b5-QOR9ZOiKiU",
    },
  };
  const dataToBeFedToCreateSessionAPI = {
    username: "admin",
    password: "User12345***",
    setCookie: true,
  };
  const fetchCreateSession = async () => {
    await axios
      .post(
        "https://730fa31c-211e-423e-99fd-1af90269b56e.relay.vmsproxy.com/rest/v1/login/sessions",
        dataToBeFedToCreateSessionAPI,
        config
      )
      .then((response) => {
        console.log("CreateSession: ", response.data);
      });
  };

  const fetchGetUserRecords = async () => {
    await axios
      .get(
        "https://730fa31c-211e-423e-99fd-1af90269b56e.relay.vmsproxy.com/rest/v1/users",
        {
          headers: {
            Authorization:
              "Bearer vms-d96b407679ef1b39bcc986173a5081b5-QOR9ZOiKiU",
          },
        }
      )
      .then((response) => {
        console.log("GetUserRecords: ", response.data);
      });
  };

  const fetchGetDeviceRecords = async () => {
    await axios
      .get(
        "https://730fa31c-211e-423e-99fd-1af90269b56e.relay.vmsproxy.com/rest/v1/devices",
        {
          headers: {
            Authorization:
              "Bearer vms-d96b407679ef1b39bcc986173a5081b5-QOR9ZOiKiU",
          },
        }
      )
      .then((response) => {
        console.log("GetDeviceRecords: ", response.data);
      });
  };

  const dataToBeFedToLocalCreateSessionAPI = {
    username: "admin",
    password: "User12345***",
    setCookie: false,
  };
  const fetchLocalCreateSession = async () => {
    await axios
      .post(
        "https://localhost:7001/rest/v1/login/sessions",
        dataToBeFedToLocalCreateSessionAPI
      )
      .then((response) => {
        console.log("LocalCreateSession: ", response.data);
      });
  };
  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });

  // instance.post("https://192.168.200.100:7001/rest/v1/login/sessions", {
  //   username: "admin",
  //   password: "User12345***",
  //   setCookie: false,
  // });
  const options = {
    method: "post",
    url: "https://192.168.200.100:7001/rest/v1/login/sessions",
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    auth: {
      username: "admin",
      password: "User12345***",
    },
    data: "TEMP",
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };
  function postToConfluence() {
    options.data = JSON.stringify({
      username: "admin",
      password: "User12345***",
      setCookie: false,
    });
    instance(options).then((res) => {
      console.log("getSession: ", res.data);
    });
  }
  useEffect(() => {
    fetchModuleInformation();
    fetchGetTime();
    fetchLoginUser();
    fetchCreateSession();
    fetchGetUserRecords();
    fetchGetDeviceRecords();
    // fetchLocalCreateSession();
    // postToConfluence();
  }, []);

  return (
    <section>
      <div>Welcome to Test Nx Witness API Page!</div>
      <div>TEST</div>
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
      <ReactPlayer
        url={
          "https://localhost:7001/media/05eb8655-b7d1-3702-39dd-7f549a5c7006.mp4"
        }
        playing={true}
        controls={true}
      />
    </section>
  );
};

export default TestApiPage;
