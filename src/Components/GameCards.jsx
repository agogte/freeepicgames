import React, { useEffect, useState } from 'react'
import { url, options } from '../api'

const GameCards = () => {

    const [data, setData] = useState('')

    const loaddata = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setData(result)
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     loaddata()
    // }, [])

    console.log(data)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-white">
            <img className="w-full" src={data[0].offerImageTall} alt="image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{data[0].name}</div>
                    <p className="text-gray-50 text-base">{data[0].description}</p>
                </div>
        </div>
    )
}

export default GameCards