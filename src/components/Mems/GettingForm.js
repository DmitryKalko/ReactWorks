import React from 'react';

class GettingForm extends React.Component{
    state= {
        quantityField: '',
    }
    submitForm = (e) => {
        e.preventDefault();
        const { quantityField } = this.state;
        this.props.onSubmit(quantityField);
        e.target.reset();    
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ quantityField: value });
    }
    
    render() {
        return(
            <form className="get-mems" onSubmit={this.submitForm}>
                <button id="btn">Получить</button>
                <input type="text" name="textarea" onChange={this.handleChange} placeholder="Сколько мемов?" className="add-task" autoComplete="off" />
                мемов
            </form>
        )
    }
}

export default GettingForm;