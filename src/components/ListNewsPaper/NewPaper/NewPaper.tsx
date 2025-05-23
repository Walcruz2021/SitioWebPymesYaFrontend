import { NewPaperItem } from "../../../types/typeApp";
import "./NewPaper.css";

type Props = {
  newpaper: NewPaperItem;
};

const NewPaper = ({ newpaper }: Props) => {
  return (
    <div>
      <div className="CardNewPaper">
        <div className="imgContainerNewPaper">
          <img className="imgCardNewPaper" src={newpaper.img1}></img>
        </div>
        <h1 className="titleGralh1 instrument-serif-regular">
          {newpaper.title1}
        </h1>
        <p className="instrument-serif-regular">{newpaper.paragraph1}</p>
      </div>
    </div>
  );
};

export default NewPaper;
