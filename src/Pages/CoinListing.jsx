import { useEffect, useState } from 'react';
import CoinDisplay from '../Components/CoinDisplay/CoinDisplay'

import axios from 'axios';
import LoadingSpinner from '../Components/Loading/Loading';


function CoinListing(){

    const [coins,setCoins] = useState({});
    const [loading, setLoading] = useState(true);

   useEffect(()=>{

        const fetchCoinsList = async () =>{

            const coinList = await axios.get('https://api.coingecko.com/api/v3/coins/list', {
                headers: {
                   'X-CoinAPI-Key': `CG-7VSBe4x7tbHxZshvcj1jM4vU`
                }
              }).then(response=>{
                const TopCoins = response.data.slice(0,100);
                setCoins(TopCoins);
                setLoading(false)
              });
        }

        fetchCoinsList()

    },[])


    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return(
        <>
            <h5 className='text-7xl snap-center ml-80 mb-5 mt-10'>Coin Listing</h5>
            <div className='ml-80 w-96'>
            <CoinDisplay coins={coins}></CoinDisplay>
            </div>
        </>
    )
}

export default CoinListing;