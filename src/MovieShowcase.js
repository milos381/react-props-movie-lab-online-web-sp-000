import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    let IMDBRating;
    let genres = [];
    let poster;
    let title;
    
    return movieData.map(function (dataBit) {
     return <MovieCard key = {dataBit.title} title = {dataBit.title} IMDBRating = {dataBit.IMDBRating} poster = {dataBit.poster} genres = {dataBit.genres}/>
    })


  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        
      </div>
    )
  }
}
