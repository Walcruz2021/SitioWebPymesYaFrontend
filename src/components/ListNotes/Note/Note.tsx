import { NoteItem } from "../../../types/typeApp"

type Props = {
    note: NoteItem
}

const Note = ({ note }: Props) => {
    const noteKeys = Object.keys(note)

    function clasifiedParagraph(value: string) {
        value = value.slice(0, -1)
        if (value === "paragraph") {
            return true
        } else {
            value = value.slice(0, -2)
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
            value = value.slice(0, -2)
            if (value === "title") {
                return true
            } else return false
        }
    }
    function clasifiedImg(value: string) {
        value = value.slice(0, -1)
        if (value === "img") {
            return true
        } else {
            value = value.slice(0, -2)
            if (value === "img") {
                return true
            } else return false
        }
    }
    return (
        <div>
            {noteKeys.map((key) => (
                clasifiedTitle(key) ? <h1>{note[key]}</h1> : clasifiedParagraph(key) ? <p>{note[key]}</p> : clasifiedImg(key)?<img src={note[key]} alt="MDN" />:null
            ))}
        </div>
    )
}

export default Note