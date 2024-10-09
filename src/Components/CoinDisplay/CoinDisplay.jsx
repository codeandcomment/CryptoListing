import CoinList from "./CoinList";


function CoinDisplay({coins}){

    return(
        <>
           <ul >
                {coins.map(coin => ( <CoinList key={coin.id} coinData={coin}/> )) }
            </ul>
               </>     

    )

}
export default CoinDisplay;