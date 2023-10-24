/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, description, type } = props;
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
      <p>
        {type === "login"
          ? "Dont't have an account?"
          : "Already have an account?"}

        {type === "login" ? (
          <Link to="/register">Register</Link>
        ) : (
          <Link to="/"> Login</Link>
        )}
      </p>
    </div>
  );
};

export default AuthLayout;
