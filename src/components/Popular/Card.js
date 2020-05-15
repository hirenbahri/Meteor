import React from 'react';
import OpenWeather from '../../api/OpenWeather';


const cardstyle = {
    border: "2px solid red",
    margin: "20px",
    padding: "10px",
    width: "260px"
}


class Card extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            temp: '',
            condition: ''
        }

        this.searchAPI = this.searchAPI.bind(this)
        this.handleClick = this.handleClick.bind(this);


    }

   
         searchAPI(query) {
            OpenWeather.search(query).then(results => {
              this.setState({
                name: results.name,
                temp: results.temp,
                condition: results.condition
              });
              console.log(results);
            });
          }

componentDidMount(){
    this.searchAPI(this.props.cityName)
}


handleClick(e) {
    this.props.searchAPI(this.state.name);
    e.preventDefault();
}

    render() {
    return (
        <div 
            style={cardstyle}
            onClick={this.handleClick}    
            >
            <h3>{this.state.name}</h3>
            <h3>{this.state.temp}</h3>
            <h3>{this.state.condition}</h3>
        </div>
    )
    }
}

export default Card;