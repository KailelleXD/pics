import React from "react";

class SearchBar extends React.Component {
    state = { term: '' }

    // RENDER FUNCTIONS ////
    onFormSubmit = (event) => {
        event.preventDefault();

        console.log(this.state.term);
    }

    onChangeInput = (event) => {
        this.setState({
            term: event.target.value,
        })
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search:</label>
                        <input type="text" value={this.state.term} onChange={this.onChangeInput} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
