/* eslint-disable react/prop-types */
function Button(props) {
  const {
    children = "...",
    color = "btn btn-primary",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <>
      <button
        type={type}
        className={`btn btn-${color} mb-3`}
        style={{ width: "400px" }}
        onClick={() => onClick()}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
