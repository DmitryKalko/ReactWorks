import React from 'react';
import { connect } from 'react-redux';

import TechItem from './Item';
import { deleteTech } from '../../redux/tech/actions';

const TechList = (props) => {
  const { techList = [] } = props;
  console.log(props);

  const $items = techList.map(tech => (
    <TechItem key={tech.id} {...tech} onClick={props.deleteTech} />
  ))

  return (
    <>
      {$items}
    </>
  )
}

const mapStoreToProps = (store) => {
   console.log(store);

  return {

    techList: store.tech.tech,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

    deleteTech: (id) => dispatch(deleteTech(id)),
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(TechList);

