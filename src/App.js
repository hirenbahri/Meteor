import React from 'react';
import SearchBar from './components/SearchBar';
import Popular from './components/Popular/Popular';
import WeatherCard from './components/WeatherCard';
import OpenWeather from './api/OpenWeather';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }

    this.searchAPI = this.searchAPI.bind(this);
  }


  searchAPI(query) {
    OpenWeather.search(query).then(results => {
      this.setState({
        results: results
      });
      console.log(results);
    });
  }

render() {
  return (
  <div>
    <h1>This is Meteor.</h1>
    <SearchBar searchAPI={this.searchAPI}/>
    <WeatherCard results={this.state.results} />
    <Popular searchAPI={this.searchAPI}/>
  </div>
  )
}
};


export default App;
