import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ({defaultCategories = []}) => {
    // , 'Spiderman', 'Buzz Lightyear', 'Rick And Morty'
    const [categories, setCategories] = useState(defaultCategories)

    // const handleAdd = () => {
    // //   setCategories(categories.concat('Frozono'))
    // //   setCategories( cats => [...cats, 'Frozono'])
    //      setCategories(['Frozono',...categories])
    // }

    return(
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories }/>
    <hr />
    <ol>
        {
            categories.map( (category) => (
               <GifGrid 
                    category={category}
                    key={category}/>
            ))
        }
    
    </ol>

    </>
)

}