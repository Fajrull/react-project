/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      name={name}
      style={{ width: "400px" }}
    />
  );
};

export default Input;
