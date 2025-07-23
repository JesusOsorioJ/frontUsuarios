import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginUser } from "../api/auth";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (response && response.status === 200) {
        localStorage.setItem("username", formData.email);
        localStorage.setItem("access_token", response.data.token);
        navigate("/");
      } else {
        Swal.fire(t("loginFailed"), t("invalidCredentials"), "error");
      }
    } catch {
      // Manejo de errores si la llamada API falla
      Swal.fire(t("loginError"), t("connectionProblem"), "error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 gap-3 flex flex-col items-center justify-center">
      <Link to="/" className="flex ms-2">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 me-3"
          alt="FlowBite Logo"
        />
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
          CRUD
        </span>
      </Link>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">{t("login")}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2">{t("email")}</label>
            <input
              type="email"
              required
              {...register("email")}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="usuario@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">{t("password")}</label>
            <input
              type="password"
              required
              {...register("password")}
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {t("enter")}
          </button>
        </form>
        <p className="mt-4 text-center">
          {t("noAccount")}{" "}
          <Link to="/register" className="text-blue-500">
            {t("register")}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
