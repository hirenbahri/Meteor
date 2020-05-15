import React from 'react';

const inputstyle = {
    border: "1px solid black ",
    backgroundColor: "lightGrey",
    padding: "10px",
    margin: "10px",
    width: "260px"
  };

  const buttonstyle ={
      backgroundColor: "orange",
      padding: "10px",
  }



class SearchBar extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        userInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
};



handleChange(e) {
    this.setState({userInput: e.target.value})
};

handleSearch(e) {
    this.props.searchAPI(this.state.userInput);
    e.preventDefault();
};

render() {
    return (
        <div>
            <input
                style={inputstyle}
                onChange={this.handleChange}
                placeholder="Search by City"
            />
            <button style={buttonstyle}
                onClick={this.handleSearch}
            >
                Let's Go
            </button>
        </div>
    )
}
}

export default SearchBar;