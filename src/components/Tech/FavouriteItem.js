import React from 'react';

const FavouriteItem = (props) => {
    const { id, title, price, onClick } = props;

    return (
        <tr>
            <td style={{ border: "solid", textAlign: "center" }}>{title}</td>
            <td style={{ border: "solid", textAlign: "center" }}>{price}</td>
            <td style={{ border: "solid", textAlign: "center" }} onClick={() => onClick(id)}>Удалить из избранного</td>
        </tr>
    )

}

export default FavouriteItem;