import { Link, useParams } from "react-router-dom";
import CoinDetails from "../Components/CoinDetails/CoinDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinChart from "../Components/CoinDetails/CoinChart";

function CoinDetailsDisplay(){

    const {id} = useParams();
    const [coin,setCoinData]=useState();

    const [chartData,setChartData]= useState();

    useEffect(()=>{

        const getCoinDetails = async () =>{

            const CoinData = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
                headers: {
                   'X-CoinAPI-Key': `CG-7VSBe4x7tbHxZshvcj1jM4vU`
                }
              }).then(response=>{
                setCoinData(response.data);
              })
            }
            getCoinDetails();
            
    },[])

    useEffect(()=>{


        const getCoinChart = async () => {

            const coinChartData = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`,{
                headers: {
                    'X-CoinAPI-Key': `CG-7VSBe4x7tbHxZshvcj1jM4vU`
                 },
                 params: {
                    vs_currency: 'inr',
                    days: '30', // Change to your desired timeframe (e.g., '7', '14', '30', '90', '365', 'max')
                    interval: 'daily' // Options: 'daily', 'hourly'
                  }
            }).then(response=>{
                console.log(response.data);
                setChartData(response.data);
            })

        }

        getCoinChart();

    },[])



    return(
        <>
        <div className="container mx-4 my-4">
            <Link to='/'><p>Back to Main Page</p></Link>
        <CoinDetails coin={coin}></CoinDetails>
        <CoinChart chartData={chartData}></CoinChart>
        </div>
        </>
    )
}

export default CoinDetailsDisplay;