import React, { useContext, useState } from "react";
import { auth } from "../../database/firebase";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import AppContext from "../../context/AppContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { loggedIn } = useContext(AppContext);
  const [error, setError] = useState("");

  const signUp = async (data, e) => {
    e.target.reset();
    if (data.password !== data.confirm) {
      e.target.reset();
      return Swal.fire({
        icon: "warning",
        timer: 3000,
        text: "Las contraseñas no coinciden",
        showConfirmButton: false,
      });
    }

    try {
      setError("");
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      Swal.fire({
        icon: "success",
        timer: 3000,
        text: "Usuario generado correctamente!",
      });
      loggedIn();
      history.push("/");
    } catch (err) {
      switch (err.code) {
        case "auth/weak-password":
          return setError("La contraseña es muy corta. Debe tener 6 caracteres o más.");
        case "auth/email-already-in-use":
          return setError("El usuario ingresado ya existe");
        case "auth/invalid-email":
          return setError("Formato de email invalido");
        default:
          return setError("Error al intentar crear la cuenta");
      }
    }
  };
  return (
    <div className="container mx-auto p-5">
      <form
        className="flex flex-col items-center text-md font-bold"
        onSubmit={handleSubmit(signUp)}
      >
        <p className="text-xl my-1">Crea una cuenta</p>
        {error && (
          <div className="block my-4 alert bg-red-100 p-3 rounded">{error}</div>
        )}
        <div className="block my-4">
          <label className="block">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Ingresar email"
            className="block p-1 my-2 border-b-2 focus:outline-none"
            ref={register({
              required: {
                value: true,
                message: (
                  <div className="block alert">
                    <i className="fas fa-exclamation-circle" /> Campo
                    obligatorio{" "}
                  </div>
                ),
              },
            })}
          />
          {errors?.email?.message}
        </div>
        <div className="block my-4">
          <label className="block">Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Ingresar contraseña"
            className="block p-1 my-2 border-b-2 focus:outline-none"
            ref={register({
              required: {
                value: true,
                message: (
                  <div className="block alert">
                    <i className="fas fa-exclamation-circle" /> Campo
                    obligatorio{" "}
                  </div>
                ),
              },
            })}
          />
          {errors?.password?.message}
        </div>
        <div className="block my-4">
          <label className="block">Confirmar contraseña</label>
          <input
            name="confirm"
            type="password"
            placeholder="Confirmar contraseña"
            className="block p-1 my-2 border-b-2 focus:outline-none"
            ref={register({
              required: {
                value: true,
                message: (
                  <div className="block alert">
                    <i className="fas fa-exclamation-circle" /> Campo
                    obligatorio{" "}
                  </div>
                ),
              },
            })}
          />
          {errors?.confirm?.message}
        </div>
        <button
          type="submit"
          className="block my-4 px-14 py-2 btn-confirm md:text-sm font-bold rounded self-center hover:no-underline hover:z-40"
        >
          Registrarse
        </button>
        <Link
          to="/signin"
          className="my-4 text-blue-500 md:text-sm font-light	tracking-normal hover:no-underline hover:z-40"
        >
          Ya tenés una cuenta? Inicia sesión
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
