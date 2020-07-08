import React from 'react';
import { connect } from 'react-redux';
import { addTechToFavoriteList, removeTechFromFavoriteList } from '../../redux/tech/actions';


const mapStoreToProps = (store) => {

    return {
        techList: store.tech.tech,
    };
}


const ItemPage = (props) => {
    const userId = props.match.params.id;
    console.log(userId);

    const { techList } = props;
    console.log(techList);

    const $oneTech = techList.filter(tech => tech.id == userId);
    console.log($oneTech);


    return (

        <>
            <h1>{$oneTech[0].title}</h1>
            <p>Цена ${$oneTech[0].price}</p>
            <button onClick={ $oneTech[0].favorite !== true ?
                 () => props.addTechToFavoriteList($oneTech[0].id) : 
                 () => props.removeTechFromFavoriteList($oneTech[0].id) }>
                {$oneTech[0].favorite === true ? 'Удалить из избранного' : 'В избранное'}
            </button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTechToFavoriteList: (id) => dispatch(addTechToFavoriteList(id)),
        removeTechFromFavoriteList: (id) => dispatch(removeTechFromFavoriteList(id)),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ItemPage);
