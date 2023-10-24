/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  });

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unxpected error has occured</p>
    </div>
  );
};

export default ErrorPage;
