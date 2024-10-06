import { NoteItem } from "../../../types/typeApp"
import "./Note.css";
import ButtonDonacion from "../../../pages/Home/ButtonDonacion"

type Props = {
    note: NoteItem,
    siguiente: () => void;
    anterior: () => void;
    buttonBack: boolean;
    buttonNext: boolean;

}

const Note = ({ note, siguiente, anterior, buttonBack, buttonNext }: Props) => {
    /**
     * note (object of notes from BD) is passed by Object.keys. Return title1,paragraph1,img1,etc
     */
    const noteKeys = Object.keys(note)
    
    /**
     * the functions clasifiedParagraph - clasifiedTitle - clasifiedImg determine 
     * the type of tag (title-img-etc) to which the passed string belongs 
     * (belongs(pertence))
     * Since the values ​​come with a one or two digit number, at the end it is passed through the slice 
     * function to eliminate them. return title of title1 or title10
     */

    function clasifiedParagraph(value: string) {
        value = value.slice(0, -1)
        if (value === "paragraph") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "paragraph") {
                return true
            } else return false
        }
    }
    function clasifiedTitle(value: string) {
        value = value.slice(0, -1)
        if (value === "title") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "title") {
                return true
            } else return false
        }
    }


    function clasifiedImg(value: string) {
        value = value.slice(0, -1)
        //console.log(value)
        if (value === "img") {
            return true
        } else {
            value = value.slice(0, -1)
            if (value === "img") {
                return true
            } else return false
        }
    }
    return (
        <>

            <div className="classNote">

                {/* {noteKeys.map((key) => (
                    clasifiedTitle(key) ? <h1>{note[key]}</h1> : clasifiedParagraph(key) ? <p>{note[key]}</p> : clasifiedImg(key) ? <img src={note[key]} alt="MDN" /> : null
                ))} */}
                {noteKeys.map((key, index) => (
                    clasifiedTitle(key) ? 
                    <div className="titGral"><h1 key={index}>{note[key]}</h1></div> : 
                    clasifiedParagraph(key) ? <p key={index}>{note[key]}</p> : 
                    clasifiedImg(key) ? <div className="imgGral"><img key={index} src={note[key]} alt="MDN" /></div> : 
                    null
                ))}
                {buttonNext ? (
                    <button className="buttonNote" onClick={siguiente}>
                        Siguiente Historia
                    </button>
                ) : null}
                {buttonBack ? (
                    <button className="buttonNote" onClick={anterior}>
                        Anterior Historia
                    </button>
                ) : null}
                <br />
                <br />

            </div>
            <ButtonDonacion />

        </>
    )
}

export default Note