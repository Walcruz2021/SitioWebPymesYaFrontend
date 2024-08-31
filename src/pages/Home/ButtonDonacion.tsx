
import "./ButtonDonacion.css"
import paypal from "../../icons/paypalIcon.png"
import MPago from "../../icons/MPago.png"
import "../../css/ClassGeneralWeb.css"
import IonIcon from '@reacticons/ionicons';
import "../../components/ButtonBar/ButtonBar"
function ButtonDonacion() {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <div className="text-center">
            <div className="card-body">
              <a
                href="https://link.mercadopago.com.ar/pymeya"
                target="_blank"
              >
                <img src={MPago} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center mb-1">
          <div className="text-center">
            <div className="card-body">
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=48HZX2ZGSWKRQ"
                className="btnDon2 primaryDon2"
                target="_blank"
              >
                <img src={paypal} />
              </a>
            </div>

          </div>
        </div>

      </div>


    </div>
  )
};

export default ButtonDonacion;
