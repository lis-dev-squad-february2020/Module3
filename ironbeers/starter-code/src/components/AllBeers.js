import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component{
    state = {
        allBeers: [],
        query: ''
    }
    componentDidMount() {
        axios.get('https://ih-beer-api.herokuapp.com/beers')
          .then((response)=>{
            this.setState({allBeers: response.data})
          }) 
    }

    handleChange = (event) => {  
        this.setState({'query': event.target.value});
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`)
          .then((response)=>{
            this.setState({allBeers: response.data})
          })
    }

    render () {
        if (this.state.allBeers.length) {
            return (
                <div>
                    Search <input type='text' name='query' value={this.state.query} onChange={this.handleChange} />
                    {this.state.allBeers.map((eachBeer)=>{
                        return (
                            <div key={eachBeer._id}>
                                <h2>
                                    <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
                                </h2>
                                <h4>
                                    {eachBeer.tagline}
                                </h4>
                                <img style={{width: '100px'}} src={eachBeer.image_url} />
                                <p>Creator: {eachBeer.contributed_by}</p>
                            </div>
                        )})}
                </div>
            )
        } else {
            return <div>Loading...</div>
        }

    }
    
}

export default AllBeers;