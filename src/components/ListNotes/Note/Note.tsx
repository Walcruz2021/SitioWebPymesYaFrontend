import { NoteItem } from "../../../types/typeApp"
import "./Note.css";

type Props = {
    note: NoteItem,
    siguiente: () => void;
    anterior: () => void;
    buttonBack: boolean;
    buttonNext: boolean;

}

const Note = ({ note, siguiente, anterior, buttonBack, buttonNext }: Props) => {
    const noteKeys = Object.keys(note)

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
            console.log(value)
            if (value === "img") {
                return true
            } else return false
        }
    }
    return (
        <div className="classNote">
            {noteKeys.map((key) => (
                clasifiedTitle(key) ? <h1>{note[key]}</h1> : clasifiedParagraph(key) ? <p>{note[key]}</p> : clasifiedImg(key) ? <img src={note[key]} alt="MDN" /> : null
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
            <div className="containerCompRedes">
                <h3>¿Te sientes Indentificado con alguna Historia?</h3>
            </div>
            <div className="fb-comments" data-href="http://www.pymesya.com/histories" data-size="large" data-width="100%" data-numposts="5"></div>
        </div>
    )
}

export default Note