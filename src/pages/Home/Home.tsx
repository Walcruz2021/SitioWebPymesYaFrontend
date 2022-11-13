import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ListCompanies from '../../components/ListCompanies/ListCompanies'
import { useSelector, useDispatch } from 'react-redux';
import useFetchCat from '../../hooks/useFetchCat';
import useFetchSelect from '../../hooks/useFetchSelect';
import { getTurnos } from '../../reducer/actions'
import Select from "react-select"
import './styles.css';
import { CompanyItem } from '../../types/typeApp';
import { CompanyFetch } from '../../types/typeApp';
import axios from 'axios'
import Company from '../../components/ListCompanies/Company/Company';
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
const Home = () => {


    const { categories } = useFetchCat();

    const arrayOptions = []


    if (categories.length > 0) {

        for (let i = 0; i < categories.length; i++) {
            const option = {
                value: categories[i]._id,
                label: categories[i].name
            }
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

    useEffect(()=>{
        setSelectCompanies({
            ...selectCompanies,isLoading:false
        })
    },[])

    const buttonSelected = async (select: any) => {
        setSelectCompanies({
            ...selectCompanies,
            isLoading: true,
            isError: false
        });
        const response = await axios(`https://backendtiendavirtual.onrender.com/api/listCompaniesByCategory/${select.value}`);
        if(response.data.listCompanies.length>0){
            setSelectCompanies({
                companies: response.data.listCompanies,
                isLoading: false,
                isError: false
            });
        }
    }
    //console.log(selectCompanies.companies[0].nameCompany,"dsfsdf")
    return (
        <>
 <Link to="/contact">
            <button className="button3" id="dog" >
              Crear Perro
            </button>
          </Link>

            <NavBar />

            <Container>
                <Select defaultValue={selectedOption} options={arrayOptions} onChange={setSelectedOption} />
                <button onClick={() => buttonSelected(selectedOption)}>Buscar</button>

            </Container>


            {selectCompanies.companies.length > 0 && <h1>{selectedOption.label}</h1>}
            <div className="ContainerListComp">

                {selectCompanies.isLoading ==false?
                    
                    selectCompanies.companies.map(comp => (
                    <div className="ContainerCompany">
                       <Company
                        key={comp._id}
                        company={comp}
                       />
                    </div>
                   ))
                : <h1>cargando...</h1>
                }
            </div>
            <h2>LAS MEJORES EMPRESAS A TU DISPOSICION</h2>
            <Container>
                <ListCompanies />
            </Container>

        </>
    )
}

export default Home;
