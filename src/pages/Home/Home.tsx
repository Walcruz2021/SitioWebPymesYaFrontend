import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ListCompanies from '../../components/ListCompanies/ListCompanies'
import { useSelector, useDispatch } from 'react-redux';
import useFetchCat from '../../hooks/useFetchCat';
import useFetchSelect from '../../hooks/useFetchSelect';
import Select from "react-select"
import './styles.css';
import { CompanyItem } from '../../types/typeApp';
import { CompanyFetch } from '../../types/typeApp';
import axios from 'axios'
import Company from '../../components/ListCompanies/Company/Company';
import CompanyOtros from '../../components/ListCompanies/Company/CompanyOtros';
import "./Home.css"
import NavBar from '../../components/NavBar/NavBarBoostrap';
import ButtonBar from '../../components/ButtonBar/ButtonBar';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {exportImg} from "./imagenes/icons/hospital.png"
import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap"

const Home = () => {
    const { categories } = useFetchCat();
    //console.log(categories)
    const arrayOptions = []
var compOtros=[]

    const a = "construct-outline"
    if (categories.length > 0) {

        for (let i = 0; i < categories.length; i++) {
            const icono = categories[i].logo
            const option = {
                value: categories[i]._id,
                label: categories[i].name,
                logo: categories[i].logo
            }
            // console.log(icono)
            arrayOptions.push(option)
        }
    }
    const [loading, setLoading] = useState<Boolean>(false)
    const [selectedOption, setSelectedOption] = useState<any>(null)


    const [selectCompanies, setSelectCompanies] = useState<CompanyFetch>({
        companies: [],
        isLoading: true,
        isError: false
    })

    console.log(selectCompanies, "---> companias OTRAS>")

    useEffect(() => {
        setSelectCompanies({
            ...selectCompanies, isLoading: false
        })
    }, [])

    const buttonSelected = async (value: any) => {

        //console.log(value, "categoria elegida en el menu")
        setSelectedOption(value)
        setSelectCompanies({
            ...selectCompanies,
            isLoading: true,
            isError: false
        });

        const response = await axios(`https://backendtiendavirtual.onrender.com/api/listCompaniesByCategory/${value}`);
        if (response.data.listCompanies.length > 0) {
            setSelectCompanies({
                companies: response.data.listCompanies,
                isLoading: false,
                isError: false
            });
        }
    }

    return (
        <>
            <NavBarBoostrap />
            {/* LISTADO DE EMPRESAS */}
            <h2>SELECCIONA UNA CATEGORIA</h2>

            <ul className="containerButtons">

                <li>
                    <button onClick={() => buttonSelected("63c87cc2a40ae240e81e0e13")}>
                        <IonIcon name="business-outline"></IonIcon>

                    </button>
                    <h6 className="titButton">Hoteles</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("63c87c1aa40ae240e81e0e09")}>
                        <IonIcon name="fast-food-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Restaurantes</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6362adecdd463420189414d2")}>
                        <IonIcon name="cart-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Supermercados</h6>

                </li>

                <li>
                    <button onClick={() => buttonSelected("63c87c8ba40ae240e81e0e0f")}>
                        <IonIcon name="bicycle-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Gimnasios</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("63c87c76a40ae240e81e0e0d")}>
                        <IonIcon name="fitness-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Hospitales</h6>
                </li>


                <li>
                    <button onClick={() => buttonSelected("63c87c54a40ae240e81e0e0b")}>
                        <IonIcon name="paw-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Veterinarias</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6361a622884b44df2751139a")}>
                        <IonIcon name="location-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Drugstores</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6362ad64dd463420189414cf")}>
                        <IonIcon name="hammer-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Ferreterias</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6362ad83dd463420189414d0")}>
                        <IonIcon name="layers-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Mayoristas</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6362add2dd463420189414d1")}>
                        <IonIcon name="restaurant-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Carnicerias</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6362ae72dd463420189414d3")}>
                        <IonIcon name="color-palette-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Librerias</h6>
                </li>
                <li>
                    <button onClick={() => buttonSelected("6408e10042e6881a681f6955")}>
                        <IonIcon name="add-circle-outline"></IonIcon>
                    </button>
                    <h6 className="titButton">Otros</h6>
                </li>


            </ul>




            <div className="ContainerListComp">

                {/* {selectCompanies.isLoading == false ?

                    selectedOption === "6408e10042e6881a681f6955" ?
                    
                    selectCompanies.companies.map(comp =>(
                        comp.typeCategory==="Marroquineria"?
                        <div className="ContainerCompany">
                           <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
                               <CompanyOtros
                                  key={comp._id}
                                  company={comp}
                              />
                          </Link>
                       </div>
                       :
                        comp.typeCategory==="Comercio Electronico"?
                         <div className="ContainerCompany">
                            <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
                                <CompanyOtros
                                   key={comp._id}
                                   company={comp}
                               />
                           </Link>
                        </div>
                       :
                       comp.typeCategory==="Tienda de Ropas"?
                        <div className="ContainerCompany">
                           <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
                               <CompanyOtros
                                  key={comp._id}
                                  company={comp}
                              />
                          </Link>
                       </div>
                       :null
                    ))
                    :  selectCompanies.companies.map(comp => (
                            <div className="ContainerCompany">
                                <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
                                    <Company
                                        key={comp._id}
                                        company={comp}
                                    />
                                </Link>
                            </div>
                        ))
                    : <h1>cargando...</h1>
                } */}

{selectCompanies.isLoading == false ?

selectedOption === "6408e10042e6881a681f6955" ?

selectCompanies.companies.map(comp =>(
    
    <div className="ContainerCompany">
       <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
           <CompanyOtros
              key={comp._id}
              company={comp}
          />
      </Link>
   </div>
 

))
:
selectCompanies.companies.map(comp =>(
    
    <div className="ContainerCompany">
       <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
           <Company
              key={comp._id}
              company={comp}
          />
      </Link>
   </div>
 

))

: <h1>cargando...</h1>
}

            </div>

            <h2>LAS MEJORES EMPRESAS A TU DISPOSICION</h2>
            <div>
                <ListCompanies />
            </div>

            <div className="containerWeb">
                <h4>¿Queres que tu empresa este en esta pagina?</h4>
                <Link style={{ textDecoration: 'none' }} to={`/contactPubli`}>
                    <h3 className="buttonBanner">Clic Aqui</h3>

                </Link>
            </div>

            <ButtonBar />
        </>
    )
}

export default Home;


// {arrayOptions.map((logo) => (
//     <button className="IconButton" onClick={() => buttonSelected(logo.value)}>
//         <div>

//         <i className="material-icons"></i>
//         {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}

//         </div>
//     </button>
// ))} 