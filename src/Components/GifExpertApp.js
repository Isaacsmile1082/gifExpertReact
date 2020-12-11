import React, { Fragment, useState } from 'react';
import { AddCategory } from '../Components/AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = ( props ) => {


    const [categories, setCategories] = useState(['One punch']);
    
    // const handleAdd = (  ) => {
        
    //     //setCategories([...categories, 'HunterxHunter']);
    //     setCategories( cats => [...cats, 'HunterxHunter'] );
    // }

    return(
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( category => 
                        <GifGrid
                        key={ category } 
                        category={ category }
                        />
                    )
                }
            </ol>
        </Fragment>
    );
}
