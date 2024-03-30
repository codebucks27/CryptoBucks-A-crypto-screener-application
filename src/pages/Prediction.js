import React, { useState, useEffect } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

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
import { Line } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const Prediction = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        apiData();
        // fetch('https://eodhd.com/api/real-time/AAPL.US?api_token=6607cc2f5bb8d3.28177759&fmt=json')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Assuming the response contains an array of data points with a 'close' attribute
        // const labels = data.map(entry => entry.date);
        // const closePrices = data.map(entry => entry.close);

        // setChartData({
        //     labels,
        //     datasets: [
        //         {
        //             label: 'Close Prices',
        //             data: closePrices,
        //             borderColor: 'rgb(255, 99, 132)',
        //             backgroundColor: 'rgba(255, 99, 132, 0.5)',
        //         },
        //     ],
        // });
        //     })
        //     .catch(error => console.error('Error fetching data:', error));
    }, []);

    const apiData = () => {
        // fetch('https://eodhd.com/api/real-time/AAPL.US?api_token=6607cc2f5bb8d3.28177759&fmt=json')
        fetch('https://eodhd.com/api/eod/MCD.US?api_token=6607cc2f5bb8d3.28177759&fmt=json')

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // if (!Array.isArray(data)) {
                //     throw new Error('Data is not in the expected format');
                // }
                const labels = data.map(entry => entry.date); // Assuming 'code' is the correct property name
                const closePrices = data.map(entry => entry.close);
                // const labels = data.code;
                // const closePrices = data.close;

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Close Prices',
                            data: closePrices,
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                });
                // Do whatever you want with the fetched data here
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [100, 200, 150, 300, 250, 400, 350], // Sample data
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    return (
        <>
            <div className='container'>

                <div className='p-5 mt-3  bg-white w-full rounded-[30px]'>
                    <div className='flex justify-between px-3 py-3'>
                        <div className='flex gap-4'>
                            <img src={require('../assets/apple.png')} className='' width="70" />
                            <div>
                                <h2 className='text-[28px] font-bold'>Apple</h2>
                                <h6 className='text-zinc-700 text-[18px] mt-1 text-gray'>AAPL</h6>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-2'>
                                <small className='text-[11px] bg-red text-white px-2 py-1 rounded-full'>-110%</small>
                                <h2 className='text-[28px] font-bold'>$150,70</h2>
                            </div>
                            <h6 className='text-gray mt-1 text-[15px] text-zinc-700 float-end'>Last update at 14.30</h6>
                        </div>


                    </div>
                    <hr className='w-full my-3 bg-gray-100' />


                    <div className='flex justify-between px-3 my-8'>
                        <div>
                            <p>Dates to forecast</p>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['SingleInputDateRangeField']}>
                                    <DateRangePicker
                                        slots={{ field: SingleInputDateRangeField }}
                                        name="allowedRange"
                                    />
                                </DemoContainer>
                            </LocalizationProvider>

                        </div>
                        <div>
                            <p>Sort by</p>
                            <div className='flex gap-1 mt-2'>
                                <button className="px-4 border border-1 py-1 rounded-full text-[12px]">07 days </button>
                                <button className="px-4 border border-1 py-1 rounded-full text-[12px]">15 days </button>
                                <button className="px-4 border border-1 py-1 rounded-full text-[12px]">30 days </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        {chartData && <Line options={options} data={chartData} />}
                    </div>
                </div>



                <div className='p-5 mt-5  bg-white w-full rounded-[30px]'>
                    <h2 className='text-[26px] font-bold text-zinc-700'>Reason for prediction</h2>
                    <p className='my-3'>Lorem ipsum dolor sit amet consectetur. A amet vel in auctor. In tempus et viverra mollis. Viverra quisque orci nec risus nisl proin duis. Lorem ac praesent consectetur duis.
                        Quam eget enim morbi arcu neque adipiscing nibh tortor laoreet. Quis enim vitae at nisi magna enim. Imperdiet neque sit porttitor odio iaculis. Sed congue pellentesque sit sit. Et ut tempus orci vitae feugiat dolor etiam. Mauris blandit amet vestibulum pellentesque euismod platea mauris neque curabitur. Viverra tellus fermentum velit tempor mattis sit integer. Quam dictum non eget bibendum. Eu accumsan tincidunt libero in integer eu elementum enim et.
                        Volutpat lectus fermentum egestas tempus pellentesque. Enim.</p>
                </div>



                <div className='p-5 mt-5 w-full'>
                    <h2 className='text-[26px] font-bold'>Financial News</h2>
                    <div class="grid grid-cols-2 gap-3 mt-4">
                        <div className='p-5 mt-5  bg-white w-full rounded-[30px]'>hello</div>
                        <div className='p-5 mt-5  bg-white w-full rounded-[30px]'>hello</div>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div className='p-5 mt-5  bg-white w-full rounded-[30px]'>hello</div>
                        <div className='p-5 mt-5  bg-white w-full rounded-[30px]'>hello</div>
                    </div>
                </div>


            </div>
        </>
    )
}
