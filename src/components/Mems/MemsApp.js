import React from 'react';
import axios from 'axios';
import qs from 'query-string';

import GettingForm from './GettingForm';
import MemsList from './MemsList';

class MemsApp extends React.Component {
    state = {
        mems: null,
        quantity: null,
        activeMemId: null,
        madeMem: '',

    }

    requestForMemes = (quantity) => {
        axios.get(`https://api.imgflip.com/get_memes`)
            .then(response => {
                const mems = response.data;
                console.log(mems);
                this.setState({ mems: mems.data.memes, quantity: quantity });
            });
    }

    selectMem = (id) => {
        const{mems} = this.state;
        const updateMems = mems.map(mem => {
            if(mem.id !== id) {
                return mem;
            } 
            return {...mem, status:true};
        });
        this.setState({mems:updateMems, activeMemId: id });    
    }

    generateNewMem = (texts) => {
        console.log(texts.firstField, texts.secondField );

        const {activeMemId} = this.state;
        const createdMem = {
            template_id: activeMemId, 
            username: "g_user_107257642549096835361", 
            password: "1234", 
            text0: texts.firstField, 
            text1: texts.secondField, 
        }
        const requestDate = qs.stringify(createdMem);

        axios.post(`https://api.imgflip.com/caption_image`, requestDate)
        .then(response => {
            const madeMem = response.data;
            console.log(madeMem);
            this.setState({ madeMem: madeMem.data});
        });
    }

    render() {
        console.log(this.state.madeMem);
        const { mems, madeMem } = this.state;

        return (
            <>
                <GettingForm onSubmit={this.requestForMemes} />
                {mems && (
                    <>
                        <MemsList 
                        mems={this.state.mems} 
                        quantity={this.state.quantity} 
                        activeMemId={this.state.activeMemId}
                        onClick={this.selectMem} 
                        saveTexts={this.generateNewMem}
                        />
                        <img src={madeMem.url}/>
                    </>
                )}
            </>
        )
    }
}
export default MemsApp;