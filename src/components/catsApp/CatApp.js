import React from 'react';
import axios from 'axios';

import './cat.css';
import CatList from './CatList';
import Settings from './Settings';
import CatDetails from './CatDetails';

const url = 'https://serene-mesa-35124.herokuapp.com/files/cats/list.json';
const detailUrl = 'https://serene-mesa-35124.herokuapp.com/files';

class CatApp extends React.Component {
  state = {
    cats: [],
    catDetails: null,
    selectedCat: null,
    search: '',

  }

  componentDidMount() {

    axios.get(`${url}`)
      .then(response => {
        const cats = response.data;
        this.setState({ cats: cats.data });

        const supplementedCats = this.state.cats.map((cat) => {
          return { ...cat, status: false, time:null };
        });
        this.setState({ cats: supplementedCats });
      })
  }

  getDetails = (id) => {

    const { cats } = this.state;

    const copyCats = [...cats];
    const selectedCatArr = copyCats.filter(cat => cat.id === id);
    const selectedCat = selectedCatArr[0];

    this.setState({ selectedCat });

    const postfix = selectedCat.more;
    console.log(postfix);

    axios.get(`${detailUrl}${postfix}`)
      .then(response => {
        const catDetails = response.data;
        console.log(catDetails);

        this.setState({ catDetails });
      })
  }
  toRemove = (id) => {

    const updatedCats = this.state.cats.map((cat) => {
      if (cat.id !== id) {
        return cat;
      }   

      const clickTime = Math.round(new Date().getTime()/1000.0);   
      return { ...cat, status: !cat.status, time:clickTime }; 
    });
    
    this.setState({ cats: updatedCats });

  }
  findCat = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  filterCats() {

    const { cats, search } = this.state;
    console.log(cats);

    let copyCats = [...cats];
    if (search !== '') {
      copyCats = copyCats.filter(cat => {
        return cat.name.toLowerCase().includes(search.toLowerCase());
      })
    }
    
const deletedCats = copyCats.filter(cat => {
   
    return cat.status;
  
} )

const activeCats = copyCats.filter(cat => {
  
    return !cat.status;
  
} )

 const filteredCats = [...activeCats , ...deletedCats];

  return filteredCats;
  }

  render() {

    const cats = this.filterCats();
    const { catDetails, selectedCat } = this.state;

    return (
      <>
        <Settings onChange={this.findCat} />
        <div className="main-block">

          <CatList cats={cats} getDetails={this.getDetails} toRemove={this.toRemove} />

          {catDetails && (
            <>
              <CatDetails catDetails={catDetails} cat={selectedCat} />
            </>
          )}
        </div>
      </>
    )
  }
}

export default CatApp;
