import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [backendData2, setBackendData2] = useState([{}]);
  const [backendDataMongo, setBackendDataMongo] = useState([{}]);

  useEffect(() => {
    //config at package.json of the client folder, at proxy
    //localhost:3070/api
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setBackendData(data))
      .catch((error) => console.log("error: ", error));
  }, []);

  useEffect(() => {
    //config at package.json of the client folder, at proxy
    fetch("/api2")
      .then((res) => res.json())
      .then((data) => setBackendData2(data))
      .catch((error) => console.log("error: ", error));
  }, []);

  useEffect(() => {
    //config at package.json of the client folder, at proxy
    fetch("/apiMongo")
      .then((res) => res.json())
      .then((data) => setBackendDataMongo(data))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <div>
      <div className="API1div">
        <p>List of user api 1: </p>
        {backendData.map((object, index) => {
          return (
            <div key={index}>
              <div className="divider"></div>
              <p>{object.name} </p>
              <p>{object.age}</p>
            </div>
          );
        })}
      </div>
      <div className="API2div">
        <p>List of user api 2: </p>
        {
          //format: [{}, {}, {}]
        }
        {backendData2.map((object, index) => {
          return (
            <div key={index}>
              <div className="divider"></div>
              <p>{object.name} </p>
              <p>{object.age}</p>
            </div>
          );
        })}
      </div>
      <div className="APIMongoDBdiv">
        <p>List of user api Mongo: </p>
        {backendDataMongo.map((object, index) => {
          return (
            <div key={index}>
              <div className="divider"></div>
              <p>{object.name} </p>
              <p>{object.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
