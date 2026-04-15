import Note from "./Note/Note";
import useFetchNote from "../../hooks/useFetchNote";
import "./listNotes.css";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserLogin } from "../../store/actions/actionUser";

const ListNotes = (codigo) => {
  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified, displayName } = userCred;
        setLoginUser({ email, emailVerified, displayName });
      }
    });
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);
  const { notes, isLoading } = useFetchNote();


  const [historiaActual, setHistoriaActual] = useState(0);
  const [buttonBack, setButtonBack] = useState(false);
  const [buttonNext, setButtonNext] = useState(true);

  if (isLoading)
    return (
      <div className="titGral">
        <h1>Cargando....</h1>
      </div>
    );

  function mergeCamps(notes) {
    //console.log(notes[0])
    const arrayCamps = [];

    for (let camp in notes) {

      //console.log(noteKeys)
      //arrayCamps.push(noteKeys)
    }
    return arrayCamps;
  }
  if (notes) {
    console.log(mergeCamps(notes));
  }


  const siguienteHistoria = () => {
    setHistoriaActual(historiaActual + 1);
    if (historiaActual - 1 !== 0) {
      setButtonBack(true);
    }
    if (historiaActual + 1 >= notes.length - 1) {
      setButtonNext(false);
    }
  };

  const anteriorHistoria = () => {
    setHistoriaActual(historiaActual - 1);
    if (historiaActual - 1 <= 0) {
      setButtonBack(false);
    }
    if (historiaActual + 1 !== 0) {
      setButtonNext(true);
    }
  };

  return (
    <>
      <div className="containerListNotes">
        <div className="contenedorTitulos">
          {notes
            ? notes.map((note) => (
                <div className="elemento">
                  <h6>{note.title1}</h6>
                </div>
              ))
            : null}
        </div>  

        <Note
          note={notes[historiaActual]}
          siguiente={siguienteHistoria}
          anterior={anteriorHistoria}
          buttonBack={buttonBack}
          buttonNext={buttonNext}
        />
      </div>

    </>
  );
};

export default ListNotes;
