// import React, { useEffect, useState } from "react";

// const LoginGoogle = () => {
//   const [user, setUser] = useState(null);

//   const signInWithGoogle = () => {
//     // Crea un elemento <a> para redirigir a la página de inicio de sesión de Google
//     const googleSignInUrl =
//       "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=1073503569961-6eutpae37ffnvb5atug0e63ebegfbc3e.apps.googleusercontent.com&redirect_uri=http://localhost:3000&scope=email%20profile&approval_prompt=auto";
//     const googleSignInLink = document.createElement("a");
//     googleSignInLink.href = googleSignInUrl;
//     googleSignInLink.click();
//   };

//   useEffect =
//     (() => {
//       const checkUser = async () => {
//         try {
//           const response = await fetch("/api/check-user");
//           const userData = await response.data.json();
//           setUser(userData);
//         } catch (error) {
//           console.error("Error al verificar ususario", error);
//         }
//       };
//       checkUser();
//     },
//     []);

//   return (
//     <div>
//       <h2>Formulario con Autenticación de Google</h2>
//       <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
//     </div>
//   );
// };

// export default LoginGoogle;
