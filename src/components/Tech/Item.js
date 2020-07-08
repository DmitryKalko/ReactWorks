import React from 'react';
import { Link } from 'react-router-dom';

const TechItem = (props) => {
  return (
    <div>
      {props.title}
      <button onClick={() => props.onClick(props.id)}>Удалить</button>
     <button> 
       <Link to={`/tech/${props.id}`} style={{ textDecoration: 'none' }}>Просмотреть</Link>
       </button>
    </div>
  )
}

export default TechItem;