import React from 'react';

import './style.css';

const PreviewItem = (props) => {
    const { onClick, id } = props;

    return (
        <img onClick={() => onClick(id)} src={props.snippet.thumbnails.default.url} />
    )
}

export default PreviewItem;