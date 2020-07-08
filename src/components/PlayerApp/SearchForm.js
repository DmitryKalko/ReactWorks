import React from 'react';


class SearchFrom extends React.Component {
    state = {
        searchFieldValue: '',
    }

    submitForm = (e) => {
        e.preventDefault();

        const { searchFieldValue } = this.state;

        this.props.onSubmit(searchFieldValue);

        e.target.reset();
        
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchFieldValue: value });
    }

    render() {
        return (
            <form className="find-videos" onSubmit={this.submitForm}>

                <input type="text" name="textarea" onChange={this.handleChange} placeholder="Введите текст" className="add-task" autoComplete="off" />
                <button id="btn">Поиск</button>

            </form>
        )
    }
}

export default SearchFrom;