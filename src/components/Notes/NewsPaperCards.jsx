//npm i @coreui/react

import React from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./NewPaperCards.css";

import pymesYa from "../../icons/addServ.png";

export const NewsPaperCards  = () => {
  return (
    <div>
      <CCardGroup  className="ContainerListComp">
        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              Sistema de Gestión de Turnos
            </CCardTitle>
            <CCardText className="charm-regular">
              Sistema que mejora significativamente la productividad y la
              experiencia del cliente, aportando herramientas clave para la toma
              de decisiones estratégicas. Una solución integral que optimiza la
              administración en establecimientos dedicados al cuidado de
              mascotas.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open(
                  "https://frontend-app-peluqueria.vercel.app/",
                  "_blank"
                )
              }
            >
              Ver Sitio
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              App Mobile Gestión de Turnos PY
            </CCardTitle>
            <CCardText className="charm-regular">
              Aplicación móvil en construcción con la tecnología React Native.
              Será una aplicación que permitirá a los usuarios gestionar sus
              turnos, gastos e ingresos como complemento al sitio web que ya
              está en funcionamiento.
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open(
                  "https://github.com/Walcruz2021/GestionTurnosReactNative",
                  "_blank"
                )
              }
            >
              Ver Repositorio
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              Plataforma PymesYa
            </CCardTitle>
            <CCardText className="charm-regular">
              Plataforma activa que conecta a la comunidad empresarial de Salta.
              Fundamental para fortalecer la presencia digital de Pymes y
              profesionales locales, ofreciendo una solución eficiente y
              accesible
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open(
                  "https://frontend-app-peluqueria.vercel.app/",
                  "_blank"
                )
              }
            >
              Ver Sitio
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              Integración Adonis.js con Backend
            </CCardTitle>
            <CCardText className="charm-regular">
              Se integró el proyecto de Adonis.js con el Backend de la
              aplicación Ucrop.it
              <ul>
                <li>
                  Desarrollo de Scripts para la edición, eliminación y creación
                  de datos masivos en producción
                </li>
                <li>Integración con MongoDB y PostgresQL</li>
                <li>
                  Creación y Modificación de Interfaces, Modelos y Controladores
                </li>
                <li>
                  Modificación de scripts en cuanto a su rendimiento y
                  optimización
                </li>
              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open(
                  "  https://github.com/Walcruz2021/AdonisJSWithUcropit/tree/master",
                  "_blank"
                )
              }
            >
              Ver Repositorio
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              Integración Adonis.js con Backend
            </CCardTitle>
            <CCardText className="charm-regular">
              Se integró el proyecto de Adonis.js con el Backend de la
              aplicación Ucrop.it
              <ul>
                <li>
                  Desarrollo de Scripts para la edición, eliminación y creación
                  de datos masivos en producción
                </li>
                <li>Integración con MongoDB y PostgresQL</li>
                <li>
                  Creación y Modificación de Interfaces, Modelos y Controladores
                </li>
                <li>
                  Modificación de scripts en cuanto a su rendimiento y
                  optimización
                </li>
              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open(
                  "  https://github.com/Walcruz2021/AdonisJSWithUcropit/tree/master",
                  "_blank"
                )
              }
            >
              Ver Repositorio
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
              Integración Adonis.js con Backend
            </CCardTitle>
            <CCardText className="charm-regular">
              Se integró el proyecto de Adonis.js con el Backend de la
              aplicación Ucrop.it
              <ul>
                <li>
                  Desarrollo de Scripts para la edición, eliminación y creación
                  de datos masivos en producción
                </li>
                <li>Integración con MongoDB y PostgresQL</li>
                <li>
                  Creación y Modificación de Interfaces, Modelos y Controladores
                </li>
                <li>
                  Modificación de scripts en cuanto a su rendimiento y
                  optimización
                </li>
              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open(
                  "  https://github.com/Walcruz2021/AdonisJSWithUcropit/tree/master",
                  "_blank"
                )
              }
            >
              Ver Repositorio
            </small>
          </CCardFooter>
        </CCard>

        <CCard>
          <CCardImage orientation="top" src={pymesYa} />
          <CCardBody>
            <CCardTitle className="charm-regular text-center">
            Soporte Técnico Backend y Automatización de Datos UCROPIT
            </CCardTitle>
            <CCardText className="charm-regular">
             
              <ul>
                <li>
                  Asistencia y Soporte continuo. Gestion de requerimientos tecnicos asegurando la operatividad del sistema.
                </li>
                <li>Desarrollo de Scripts para realizar operaciones masivas sobre las base de datos en el entorno de producción</li>
               
                <li>
                  Implementación de cambios que luego de su versionado y pusheado derivaron en actualizaciones visibles en componentes específicos de la aplicación
                </li>

                <li>
                  Ejecución de tareas de mantenimiento y modificaciones de datos asegurando la integridad de la información y la trazabilidad de los cambios aplicados
                </li>

              </ul>
            </CCardText>
          </CCardBody>
          <CCardFooter>
            <small
              className="text-body-secondary"
              onClick={() =>
                window.open("https://ucrop.it/es/inicio/", "_blank")
              }
            >
              Ver Sitio
            </small>
          </CCardFooter>
        </CCard>

      </CCardGroup>
    </div>
  );
};
export default NewsPaperCards;
