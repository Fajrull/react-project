import Button from "../Elements/Buttons/Index";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form>
      <div className="mb-3">
        <InputForm
          label="Fullname"
          type="text"
          placeholder="insert your name here..."
          name="password"
        />
        <InputForm
          label="email"
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
        <InputForm
          label="Confrim Password"
          type="password"
          placeholder="****"
          name="confirmPassword"
        />
      </div>
      <Button color="warning">Register</Button>
    </form>
  );
};

export default FormRegister;
