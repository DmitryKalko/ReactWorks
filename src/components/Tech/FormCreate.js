import React from 'react';

class FormCreate extends React.Component {
    state = {
        title: '',
        price: null,
        
    }

    submitForm = (e) => {
        e.preventDefault();

        const { title, price } = this.state;

        const oneTech = {  title, price };

        this.props.saveTech(oneTech);
        console.log(oneTech);
        e.target.reset();

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        console.log(this.state);

        return (
            <form onSubmit={this.submitForm}>
                Добавьте наименование товара
                <input type="text" name="title" onChange={this.handleChange} placeholder="Введите текст" autoComplete="off" /> <br />
                <br />
                Добавьте стоимость товара
                <input type="text" name="price" onChange={this.handleChange} placeholder="Введите текст" autoComplete="off" />
                <br />
                <br />
                <input type="submit" className="btn btn-primary" value="Добавить" />
            </form>
        )
    }
}

export default FormCreate;