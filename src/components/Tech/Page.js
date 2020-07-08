import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTech } from '../../redux/tech/actions';

import TechList from './List';
import FormCreate from './FormCreate';


const TechPage = (props) => {
  return (
    <>
      <h3>Форма добавления техники</h3>
      <FormCreate saveTech={props.addTech}  />
      <br/>
      
      <h3>Список техники</h3>
      
       <button style={{ backgroundColor: 'yellow' }}>
         <Link to={`/tech/favourites`} style={{ textDecoration: 'none' }}>ИЗБРАННАЯ ТЕХНИКА</Link>
      </button>
      <br/>
       
      <TechList />
      
      
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
      addTech: (oneTech) => dispatch(addTech(oneTech)),
  }
}

export default connect(null, mapDispatchToProps)(TechPage);