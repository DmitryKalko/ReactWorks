import React from 'react';

import WeatherItem from './WeatherItem';
import './style.css';

const WeatherOthers = (props) => {
    const { weather } = props;

const list = weather.list.filter((day, index) => index % 8 === 0);

const $items = list.map(day => (
    <WeatherItem key={day.id} {...day} />
));
    return (
        <div className="block-days">
		<div className="container">
			<div className="flex-container-2">
             {$items}   
            </div>
            </div>
            </div>
    );
};

export default WeatherOthers;
