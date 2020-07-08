import React from 'react';

import './cat.css';
import CatItem from './CatItem';

const CatList = (props) => {
    const { cats, getDetails, toRemove } = props;
    
    
    const allCats = cats.map(cat => (
<CatItem key={cat.id} {...cat} getDetails={getDetails} toRemove={toRemove}/>
     ) );
     
    return (
        <div className="split left">
{allCats}
        </div>

    )
}

export default CatList;