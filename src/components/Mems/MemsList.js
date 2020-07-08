import React from 'react';

import OneMem from './OneMem';
import TextForm from './TextForm';

const MemsList = (props) => {
    const { mems, quantity, onClick, saveTexts } = props;
    console.log(props);

    const $items = mems.filter( (_, index) => index < quantity )
    .map(mem => (
        <OneMem 
        key={mem.id} 
        {...mem} 
        onClick={onClick}
        
        />
    ));

    return(
        <ul>
            {$items}
            <TextForm  saveTexts={saveTexts}/>
        </ul>
    )
}

export default MemsList;