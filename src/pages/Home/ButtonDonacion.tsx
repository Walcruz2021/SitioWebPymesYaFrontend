
import "./ButtonDonacion.css"

function ButtonDonacion() {
  return (
    <div className="containerButtonDon">
      <a
        href="link.mercadopago.com.ar/pymeya"
        className="btnDon primaryDon"
        target="_blank"
      >
        DONACIÓN
      </a>
      <p className="textButtonDon">
        Con tu colaboracion podremos seguir creando notas que te interen y te
        ayuden a diario
      </p>
    </div>
  )
};

export default ButtonDonacion;
