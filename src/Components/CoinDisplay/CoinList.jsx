import { Link } from "react-router-dom";

function CoinList({coinData}){

    return (<>
            <li key={coinData.id} className="rounded-lg p-4 bg-gray-300 flex flex-col mb-1">
                <Link to={`/coin/${coinData.id}`}>
                <span className="text-gray-600 text-2xl font-bold leading-none mb-1"> Name: {coinData.name}  </span>  
                <span className="text-gray-600 text-2xl font-bold leading-none">Symbol: {coinData.symbol}</span> 
                </Link>
            </li>
            
    </>)
}


export default CoinList;


