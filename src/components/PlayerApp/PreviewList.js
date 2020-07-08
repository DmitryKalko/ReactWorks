import React from 'react';

import './style.css';
import PreviewItem from './PreviewItem';

const PreviewList = (props) => {
    const { videos, onClick } = props;
    
    const items = videos.items.map(video => (
        <PreviewItem key={video.id} {...video} onClick={onClick} />
    ));

    return(
        <ul>
            {items}
        </ul>
    )
}

export default PreviewList;