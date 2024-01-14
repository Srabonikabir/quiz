import { createContext, useEffect, useState } from 'react';
import Tropics from './Tropics';
import { useLoaderData } from 'react-router-dom';


export const TopicContext = createContext([]);

const Tropic = () => {
    const tropics = useLoaderData();


    const [tropic, setTropic] = useState([]);

useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/quiz')
    .then(res=> res.json())
    .then(data=> setTropic(data.data));
},[])
    return (

        <div>

            

<div className='grid md:grid-cols-3 gap-6 '>
    {
        tropic.map(tropics => <Tropics key={tropics.id} tropics={tropics}></Tropics>)
    }
</div>


        </div>
    
    );
};

export default Tropic;