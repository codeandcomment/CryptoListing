import LoadingSpinner from "../Loading/Loading";


function CoinDetails({coin}){


    if(!coin || typeof coin === 'object' && Object.keys(coin).length === 0){
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
            
            <div className="w-64 border ml-96">
                <img src={coin.image.large} className="w-full" alt="..."></img>
                <div className="p-4">
                <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{coin.name}</h5>
                <p>PRICE : {coin.market_data.current_price.inr}</p>
                </div>
            </div>
        )

}

export default CoinDetails;