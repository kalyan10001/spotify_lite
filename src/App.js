import './App.css';
import {useState} from "react";

function App() {
  const [track, setTracks] = useState([]);
  const [taskk, setTasks] = useState("");

  const getTracks = async () => {
    try {
      const response = await fetch(`https://v1.nocodeapi.com/kalyan097/spotify/XSNwVlTWvENUueem/search?q=${taskk}&type=track`);
      const data = await response.json();
      console.log(data.tracks.items);
      setTracks(data.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  };

  return (
    <>
      <h1>spotify_lee</h1>
      <nav className="navbar navbar-expand-lg navbar-body-teritiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="navbar-expand-lg" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                onChange={(e) => { setTasks(e.target.value) }}
                className="form-control me-2 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <button onClick={getTracks} className='btn btn-outline-success'>Get Data</button>
        </div>
      </nav>
      <div className='container'>
        <div className='row'>
          {track.map((e) => (
            <div key={e.id} className='col-lg-3 col-md-6'>
              <div className="card" style={{ width: "18rem" }}>
                <img src={e.album.images[0].url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{e.artists[0].name}</h5>
                  <h6 className="card-text">
                    {e.album.name}<br />
                    {e.album.release_date}
                  </h6>
                  <audio src={e.preview_url} controls className='w-100'></audio>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
