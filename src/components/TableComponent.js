import React from 'react'

const TableComponent = () => {



    return (
        <div className="container">
            <table className="w-full table-auto">
                <thead
                    className="ont-black text-[20px] border-b border-[#d6d6d6]
                "
                >
                    <tr>
                        <th className="py-4 bg-[#f6f6f6]">Asset</th>
                        <th className="py-4 bg-[#f6f6f6]">Name</th>
                        <th className="py-4 bg-[#f6f6f6]">Price</th>
                        <th className="py-4 bg-[#f6f6f6]">Total volume</th>
                        <th className="py-4 bg-[#f6f6f6]">Market cap change</th>
                        <th className="py-4 bg-[#f6f6f6]">1H</th>
                        <th className="py-4 bg-[#f6f6f6]">24H</th>
                        <th className="py-4 bg-[#f6f6f6]">7D</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center text-base border-b border-[#d6d6d6] last:border-b-0'>
                        <td className='py-4'>name</td>
                        <td className='py-4'>asset</td>
                        <td className='py-4'>price</td>
                        <td className='py-4'>total volume</td>
                        <td className='py-4'>market cap change</td>
                        <td className='py-4'>1H</td>
                        <td className='py-4'>24H</td>
                        <td className='py-4'>7D</td>
                    </tr>
                    <tr className='text-center text-base border-b border-[#d6d6d6] last:border-b-0'>
                        <td className='py-4'>name</td>
                        <td className='py-4'>asset</td>
                        <td className='py-4'>price</td>
                        <td className='py-4'>total volume</td>
                        <td className='py-4'>market cap change</td>
                        <td className='py-4'>1H</td>
                        <td className='py-4'>24H</td>
                        <td className='py-4'>7D</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    )
}

export default TableComponent
