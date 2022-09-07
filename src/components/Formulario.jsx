import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import UseSelectMonedas from '../hooks/UseSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [criptos, setCriptos] = useState([])
    //Desde custom hook
    const [moneda, SelectMonedas] = UseSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = UseSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {

        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            //Creo un array con la data que necesito
            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            //seteo el state y le paso el array con la data que necesito
            setCriptos(arrayCriptos)
        }
        consultarAPI()
    }, [])


    return (
        <form>
            <SelectMonedas />
            <SelectCriptomoneda/>

            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario