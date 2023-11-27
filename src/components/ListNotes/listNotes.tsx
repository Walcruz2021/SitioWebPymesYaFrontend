import Note from "./Note/Note"
import useFetchNote from "../../hooks/useFetchNote"
import NavBar from "../../components/NavBar/NavBarBoostrap"
import ButtonBar from "../../components/ButtonBar/ButtonBar";

const ListNotes = (codigo: any) => {

    const { notes, isLoading } = useFetchNote()

    if (isLoading) return <h1>Cargando....</h1>

    return (
        <div>
       
                {
                    notes && notes.map(note => (
                       
                            <Note
                                note={note}
                            />
                        
                    ))
                }
        
        </div>
    )
}

export default ListNotes