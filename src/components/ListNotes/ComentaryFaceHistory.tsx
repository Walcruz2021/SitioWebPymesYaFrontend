const ComentaryFace = () => {
    return (
        <>
            {/* <div className="containerCompRedes">
                <h3>¿Te sientes Identificado con alguna Historia?</h3>
            </div> */}
            <div
                className="fb-comments"
                data-href="http://www.pymesya.com/histories"
                data-size="large"
                data-width="100%"
                data-numposts="5"
            />
        </>

    )
}

export default ComentaryFace