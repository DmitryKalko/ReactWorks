import React from 'react';
import { connect } from 'react-redux';
import { removeTechFromFavoriteList } from '../../redux/tech/actions';

import FavouriteItem from './FavouriteItem';


const mapStoreToProps = (store) => {

    return {
        techList: store.tech.tech,
    };
}


const Favourites = (props) => {

    const { techList } = props;
    console.log(techList);

    const favouritesTech = techList.filter(tech => tech.favorite === true);
    console.log(favouritesTech);

    const $oneFavTech = favouritesTech.map(tech => {
        return <FavouriteItem key={tech.id} {...tech} onClick={props.removeTechFromFavoriteList} />
    })

    return (
        <>
            <table style={{ border: "solid", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <td style={{ border: "solid", textAlign: "center" }}>Наименование</td>
                        <td style={{ border: "solid", textAlign: "center" }}>Цена</td>
                        <td style={{ border: "solid", textAlign: "center" }}>★</td>
                    </tr>
                </thead>
                <tbody>
                    {$oneFavTech}
                </tbody>
            </table>

        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTechFromFavoriteList: (id) => dispatch(removeTechFromFavoriteList(id)),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Favourites);