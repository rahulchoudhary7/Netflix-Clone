import React from 'react';
import "./HomeScreen.css";
import Nav from './Nav';
import Banner from './Banner';
import requests from './Requests';
import Row from "./Row"


function HomeScreen() {
  console.log(requests.fetchTopRated);
  return(
    <div className="homeScreen">
        <Nav/>

        <Banner />

        <Row 
          title = "NETFLIX ORIGINALS"
          fetchUrl = {requests.fetchNetflixOriginals}
          // isLargeRow = {requests.}
        />
        <Row 
          title = "Trending Now"
          fetchUrl = {requests.fetchTrending}
        />
        <Row 
          title = "Top Rated"
          fetchUrl = {requests.fetchTopRated}
        />
        <Row 
          title = "Action Movies"
          fetchUrl = {requests.fetchActionMovies}
        />
        <Row 
          title = "Comedy Movies"
          fetchUrl = {requests.fetchComedyMovies}
        />
        <Row 
          title = "Horror Movie"
          fetchUrl = {requests.fetchHorrorMovies}
        />
        <Row 
          title = "Romance Movies"
          fetchUrl = {requests.fetchRomanticMovies}
        />
        <Row 
          title = "Documentaries"
          fetchUrl = {requests.fetchDocumentaries}
        />
        
    </div>
  );
}

export default HomeScreen;