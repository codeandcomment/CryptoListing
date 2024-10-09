import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function CoinChart({chartData}){

    
    if(!chartData || typeof chartData === 'object' && Object.keys(chartData).length === 0){
        return ''
    }
    let priceData = chartData.prices;
        const chartDataSet = {

            labels : priceData.map(data => new Date(data[0]).toLocaleDateString()),
            datasets: [
                {
                  label: 'Price (USD)',
                  data: priceData.map(data => data[1]),
                  fill: false,
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  tension: 0.1,
                },
              ],

        }

        const chartOptions = {
            scales: {
              y: {
                beginAtZero: false,
                title: {
                  display: true,
                  text: 'Price (USD)',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Date',
                },
              },
            },
          };

          return <Line data={chartDataSet} options={chartOptions} />;
        }


export default CoinChart;