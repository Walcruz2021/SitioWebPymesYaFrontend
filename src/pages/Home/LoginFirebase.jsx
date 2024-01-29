import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBarBoostrap";
import FormsRegister from "../../forms/FormsRegister";
import FormsLogin from "../../forms/FormsLogin";
import "./LoginFirebase.css";
import { auth } from "../../hooks/configFirebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function LoginFirebase() {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    const onsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        setUserState(null);
        localStorage.removeItem("user");
      }
    });
    return () => onsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesion", error.message);
    }
  };
  return (
    <>
      <NavBar />

      <div className="classContainerSitio">
        {userState ? (
          <>
            <p>Bienvenido, {userState.displayName}!</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <FormsRegister />
            <FormsLogin />
          </>
        )}
      </div>
    </>
  );
}

export default LoginFirebase;
//https://www.youtube.com/watch?v=Djh_eVj0D2w&t=2610s&ab_channel=Fazt
