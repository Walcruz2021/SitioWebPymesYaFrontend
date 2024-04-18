import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import ListCompaniesVip from '../../components/ListCompanies/ListCompaniesVip'
import useFetchCat from '../../hooks/useFetchCat';
import './styles.css';
// import { CompanyFetch } from '../../types/typeApp.js';
import axios from 'axios'
import CompanyOtros from '../../components/ListCompanies/Company/CompanyOtros';
import "./Home.css"
import ButtonBar from '../../components/ButtonBar/ButtonBar';
import { Link } from 'react-router-dom';
import IonIcon from '@reacticons/ionicons';
import rutaBackend from '../../helpers/rutaBackend';
// import {exportImg} from "./imagenes/icons/hospital.png"
import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap"
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin"
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap"
import ListCompaniesFilterTrue from "../../components/ListCompanies/filterCompanies/ListCompaniesFilterTrue"
import ListCompaniesFilterFalse from "../../components/ListCompanies/filterCompanies/ListCompaniesFilterFalse"
import "./ClassGeneralWeb.css"
import {getUserLogin } from "../../reducer/actions";
import { auth } from "../../hooks/configFirebase";

const Home = () => {
    const [loginUser, setLoginUser] = useState();
    const dispatch=useDispatch()
    const userFullName = useSelector((state) => state.userDataName);
    
    useEffect(() => {
        auth.onAuthStateChanged((userCred) => {
          if (userCred) {
            const { email, emailVerified,displayName } = userCred;
            setLoginUser({ email, emailVerified,displayName });
          }
        });
      }, []);
    
      useEffect(() => {
        if (loginUser && loginUser.emailVerified) {
          dispatch(getUserLogin())
        }
      }, [dispatch, loginUser]);

    //   useEffect(() => {
       
    //       dispatch(getUserLogin())
        
    //   }, [dispatch]);

    const { categories } = useFetchCat();
    //console.log(categories)
    const arrayOptions = []
    var compOtros = []

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
    const [loading, setLoading] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)


    const [selectCompanies, setSelectCompanies] = useState({
        companies: [],
        isLoading: true,
        isError: false
    })

    useEffect(() => {
        setSelectCompanies({
            ...selectCompanies, isLoading: false
        })
    }, [])

    const buttonSelected = async (value) => {

        console.log(value, "categoria elegida en el menu")
        setSelectedOption(value)
        setSelectCompanies({
            ...selectCompanies,
            isLoading: true,
            isError: false
        });

        //const response = await axios(`https://backendtiendavirtual.onrender.com/api/listCompaniesByCategory/${value}`);
        const response = await axios(`${rutaBackend}/api/listCompaniesByCategory/${value}`);
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
            {userFullName?<NavBarBoostrapLogin user={userFullName}/>:<NavBarBoostrap />}
            <div className="alert alert-primary titGral">
                <h3 className="titNewPapers">¡ Agregamos nuevo contenido en Inversión en Bolsa !</h3>
            </div>

            {/* LISTADO DE EMPRESAS */}
            <div className="titGral">
                <h2>SELECCIONA UNA CATEGORIA</h2>

            </div>

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

                {selectCompanies.isLoading == false ?

                    //pregunta si las empresas elegidas correspondena la opcion OTROS del MENU
                    selectedOption === "6408e10042e6881a681f6955" ?

                        selectCompanies.companies.map(comp => (

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
                        //en caso contrario imprime las empresas que pagaron por el aviso
                        <>
                            <ListCompaniesFilterTrue companies={selectCompanies.companies} />

                        </>

                    //queda cargando hasta que el LOADING este en FALSE
                    : <div className="titGral">
                        <h1>cargando...</h1>
                    </div>
                }

            </div>

            {/* imprime las empresas que no pagaron por el servicio */}
            {
                selectedOption ?
                    <>
                        <div className="titGral">
                            <h3 className="classSubt">OTRAS QUE TE PUEDAN INTERESAR</h3>
                        </div>
                        <ListCompaniesFilterFalse companies={selectCompanies.companies} />
                    </>

                    : null

            }

            <div className="titGral">

                <h2>LAS MEJORES EMPRESAS A TU DISPOSICION</h2>
            </div>

            <div>
                <ListCompaniesVip />
            </div>

            <div className="containerWeb">
                <h4>¿Queres que tu empresa este en esta pagina?</h4>
                <Link style={{ textDecoration: 'none' }} to={`/contact`}>
                    <div className="titGral">

                        <h3 className="buttonBanner">Clic Aqui</h3>
                    </div>

                </Link>
            </div>

            <ButtonBarBoostrap />
        </>
    )
}

export default Home;


