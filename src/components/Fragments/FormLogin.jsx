import Button from "../Elements/Buttons/Index";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <InputForm
          label="Email"
          type="email"
          placeholder="Email@gmail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="****"
          name="password"
        />
      </div>
      <Button color="warning" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
