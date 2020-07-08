import React from 'react';
import axios from 'axios';

import WeatherToday from './WeatherToday';
import WeatherOthers from './WeatherOthers';


const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247';

class WeatherApp extends React.Component{

    state = {
weather:null,
get: false,
    };

   componentDidMount() {
        axios.get(`${url}`)
          .then(response => {
            const weather= response.data;
            console.log(weather);
            this.setState({weather, get:true});
        }) 
    }
      

    render() {
        const { weather } = this.state;

        if (!weather) {
          return (
          <div>
              ЗАГРУЗКА 
          </div>
          );
        }
        return(
            <>
            <WeatherToday  weather={weather}/>
            <WeatherOthers weather={weather}/>
            </>
        )
    }    
}

export default WeatherApp;