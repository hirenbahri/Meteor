import React from 'react';

const weatherstyle = {
    background: "lightBlue",
    width: "260px",
    padding: "10px",
    margin: "20px"
  };

class WeatherCard extends React.Component {
    render() {
        return (
            <div style={weatherstyle}>
                <h1>{this.props.results.temp}</h1>
                <h2>{this.props.results.condition}</h2>
                <h3>{this.props.results.name}</h3>
            </div>
        )
    }
}

export default WeatherCard;