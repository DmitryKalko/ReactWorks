import React from 'react';

class TextForm extends React.Component{
    state= {
        firstField: '',
        secondField: '',
    }
    submitForm = (e) => {
        e.preventDefault();
        const { firstField, secondField } = this.state;
        const texts = { firstField, secondField };
        console.log(texts);
        this.props.saveTexts(texts);
        e.target.reset();    
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    render() {
        console.log(this.state);
        return(
            <form className="get-mems" onSubmit={this.submitForm}>
                <input type="text" name="firstField" onChange={this.handleChange}  className="add-task" autoComplete="off" />
                <input type="text" name="secondField" onChange={this.handleChange}  className="add-task" autoComplete="off" />
                <button>Сгенерировать</button>
            </form>
        )
    }
}

export default TextForm;