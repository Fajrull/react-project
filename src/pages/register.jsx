import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Register"
      description="Welcome to Register Page"
      type="register"
    >
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
