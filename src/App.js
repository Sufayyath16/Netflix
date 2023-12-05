
import './App.css';
import Banner from './components/Banner';
import Navbar1 from './components/Navbar1';
import requests from './components/Request';
import Row from './components/Row';


function App() {
  return (
    <div className="App">

      <Navbar1/>
      <Banner
      fetchURL={requests.fetchNetflixOriginals}
      />

      <Row
      isLargeRow={true}
      title="NetflixOriginals"
      fetchURL={requests.fetchNetflixOriginals}
      />
      
      <Row
      
      title="Trending Now"
      fetchURL={requests.fetchTrending}/>

      <Row
      title="Netflix Originals"
      fetchURL={requests.fetchNetflixOriginals}/>

      <Row
      title="Top Rated"
      fetchURL={requests.fetchTopRated}/>

      <Row
      title="Action Movies"
      fetchURL={requests.fetchActionMovies}/>

     <Row
      title="Comedy Movies"
      fetchURL={requests.fetchComedyMovies}/>

     <Row
      title="Horror Movies"
      fetchURL={requests.fetchHorrorMovies}/>

     <Row
      title="Romantic Movies"
      fetchURL={requests.fetchRomanceMovies}/>

     <Row
      title="Documentaries"
      fetchURL={requests.fetchDocumentaries}/>

      
</div>
  );
}

export default App;
