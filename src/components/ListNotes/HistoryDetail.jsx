
import { useParams, Navigate } from "react-router-dom";
import useFetchNote from "../../hooks/useFetchNote";
import Note from "./Note/Note";
import { InfinitySpin } from "react-loader-spinner";

const HistoryDetail = () => {
  const { id } = useParams();
  const { notes, isLoading } = useFetchNote();

  if (isLoading) {
    return 
     <div
            style={{
              height: "80vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <InfinitySpin
              width="200"
              height="400"
              color="#ebe4e4"
            />

            <h2
              style={{
                fontSize: "50px",
                fontWeight: "400",
                color: "#efe9e9",
                margin: 0,
              }}
            >
              Cargando...
            </h2>
          </div>
  }

  const historia = notes?.find(
    (note) => note._id === id
  );

  if (!historia) {
    return <Navigate to="/histories" replace />;
  }

  return (
    <div className="historyDetailContainer">
      <Note note={historia} />
    </div>
  );
};

export default HistoryDetail;
