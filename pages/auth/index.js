import React from "react";

import User from "../../components/User";

const authIndexPage = (props) => (
  <div>
    <h1>The Auth Index page - {props.appName}</h1>
    <User name="ty" age="2" />
  </div>
);

authIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, rejcect) => {
    setTimeout(() => {
      resolve({ appName: "lol(auth)" });
    }, 1000);
  });
  return promise;
};

export default authIndexPage;
