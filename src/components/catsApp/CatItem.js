import React from 'react';

import moment from 'moment';

const CatItem = (props) => {
    const { id, name, shortInfo, getDetails, toRemove, status, time } = props;
    return (
        <div className={status === true ? " item-left not-active" : "item-left"}>
            <div onClick={status === false ? () => getDetails(id) : ''}  >
                <h4> {status === true ? 'Помечен на удаление ' + name : name}</h4>
                <p> {status === true ? '' : shortInfo}</p>
            </div>
            <div>
                <button onClick={() => toRemove(id)}>{status === true ? 'Снять пометку' : 'Пометить на удаление'} </button>
                <p>
                     {status === true ? `Удален ${moment(time * 1000).format('DD.MM.YYYY')} в ${moment(time * 1000).format('HH:mm')}` : ''}
                </p>
            </div>
        </div>
    )
}

export default CatItem;
