import React from 'react'

const TableComponent = () => {

     

    return (
          <div className="flex flex-col mt-9 border border-gray-100 rounded">
              <table className="w-full table-auto">
                <thead
                  className="capitalize text-base text-gray-100 
                font-medium border-b border-gray-100
                "
                >
                  <tr>
                    <th className="py-1">asset</th>
                    <th className="py-1">name</th>
                    <th className="py-1">price</th>
                    <th className="py-1">total volume</th>
                    <th className="py-1">market cap change</th>
                    <th className="py-1">1H</th>
                    <th className="py-1">24H</th>
                    <th className="py-1">7D</th>
                  </tr>
                </thead>
            <tbody>
                <tr className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
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
