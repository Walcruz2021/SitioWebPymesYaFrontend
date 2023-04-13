import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CompanyItem } from '../../../types/typeApp';

type Props={
  company:CompanyItem;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}


function ModalComp({company,state,setState}:Props) {


  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        {/* <Modal.Header closeButton onClick={()=>{
          setState(!state)
        }}>
          <Modal.Title>{company.nameCompany}</Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <p>{company.notesComp}</p>
        </Modal.Body>

        <Modal.Body>
          <p>{company.phone}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setState(!state)}}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalComp;