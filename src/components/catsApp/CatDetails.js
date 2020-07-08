import React from 'react';

import './cat.css';

const url = 'https://serene-mesa-35124.herokuapp.com/files';

const CatDetails = (props) => {
    const { catDetails, cat } = props;
    const { bio, pic } = catDetails;
    const { name, shortInfo } = cat;

    console.log(cat);



    return (
        <div className="split right">
            <div className="info">

                <h1>{name}</h1>
                <h3>{shortInfo}</h3>
                <p>{bio}</p>
                <img src={url + pic} alt="catPhoto" />
            </div>
        </div>
    )
}

export default CatDetails;