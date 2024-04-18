import Note from "./Note/Note";
import useFetchNote from "../../hooks/useFetchNote";
import NavBarBoostrap from "../NavBar/NavBarBoostrap";
import ButtonBarBoostrap from "../ButtonBar/ButtonBarBoostrap";
import "./listNotes.css";
import ComentaryFace from "./ComentaryFaceHistory";
import ButtonDonacion from "../../pages/Home/ButtonDonacion";
import { auth } from "../../hooks/configFirebase";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getUserLogin } from "../../reducer/actions";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";


const ListNotes = (codigo) => {
  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();
  const userFullName = useSelector((state) => state.userDataName);

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
  console.log(notes);
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
      const noteKeys = Object.keys(camp);
      //console.log(noteKeys)
      //arrayCamps.push(noteKeys)
    }
    return arrayCamps;
  }
  if (notes) {
    console.log(mergeCamps(notes));
  }
  function clasifiedParagraph(value) {
    value = value.slice(0, -1);
    if (value === "paragraph") {
      return true;
    } else {
      value = value.slice(0, -2);
      if (value === "paragraph") {
        return true;
      } else return false;
    }
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
    {userFullName ? <NavBarBoostrapLogin user={userFullName}/>:<NavBarBoostrap />}
      
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
      <ButtonBarBoostrap />
    </>
  );
};

export default ListNotes;
