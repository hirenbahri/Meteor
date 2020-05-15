import React from 'react';
import Card from './Card'

class Popular extends React.Component{



    render() {
    return (
        <div>
            <h4>some popular locations:</h4>
            <Card cityName="london" searchAPI={this.props.searchAPI}/>
            <Card cityName="paris" searchAPI={this.props.searchAPI}/>
            <Card cityName="delhi" searchAPI={this.props.searchAPI}/>
            <Card cityName="new york" searchAPI={this.props.searchAPI}/>
            <Card cityName="sydney" searchAPI={this.props.searchAPI}/>
        </div>
    )
    }
}

export default Popular;