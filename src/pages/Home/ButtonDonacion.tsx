
import "./ButtonDonacion.css"

function ButtonDonacion() {
  return (
    <div className="containerButtonDon">
      <a
        href="https://link.mercadopago.com.ar/pymeya"
        className="btnDon1 primaryDon1"
        target="_blank"
      >
        MERCADO PAGO
      </a>
      {/* <p className="textButtonDon">
        Con tu colaboracion podremos seguir creando notas que te interen y te
        ayuden a diario
      </p> */}

      <a
        href="https://www.paypal.com/donate/?hosted_button_id=48HZX2ZGSWKRQ"
        className="btnDon2 primaryDon2"
        target="_blank"
      >
        PAYPAL
      </a>
      {/* <p className="textButtonDon">
        Con tu colaboracion podremos seguir creando notas que te interen y te
        ayuden a diario
      </p> */}
    </div>
  )
};

export default ButtonDonacion;
