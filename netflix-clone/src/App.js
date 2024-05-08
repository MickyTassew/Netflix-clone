import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import { requests } from './utils/requests';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className='app'>
      <Home />
      <Banner />
      <Row 
          title="NETFLIX ORIGINALS" 
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Footer />


    </div>
  );
}

export default App;
