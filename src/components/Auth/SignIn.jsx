import React, { useState, useContext } from "react";
import Load from "../Spinner/Load";
import { auth } from "../../database/firebase";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import AppContext from "../../context/AppContext";

const SignIn = () => {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const { loggedIn } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signIn = async (data) => {
    try {
      setLoading(true);
      await auth.signInWithEmailAndPassword(data.email, data.password);
      loggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      switch (err.code) {
        case "auth/user-not-found":
          return setError("El usuario ingresado no existe");
        case "auth/wrong-password":
          return setError("La contraseña ingresada es incorrecta");
        default:
          return setError("Ha ocurrido un error");
      }
    }
  };
  return (
    <div className="container mx-auto p-5">
      {loading ? (
        <Load />
      ) : (
        <form
          className="flex flex-col items-center text-md font-bold"
          onSubmit={handleSubmit(signIn)}
        >
          <p className="text-xl my-1">Inicia Sesión</p>
          {error && (
            <div className="block my-4 alert bg-red-100 p-3 rounded">
              {error}
            </div>
          )}

          <div className="block my-4">
            <label className="block">Email</label>
            <input
              name="email"
              type="email"
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

          <button
            type="submit"
            className="block my-4 px-14 py-2 btn-confirm md:text-sm font-bold rounded self-center hover:no-underline hover:z-40"
          >
            Iniciar sesión
          </button>
        </form>
      )}
    </div>
  );
};

export default SignIn;
