import { useState } from "react";
import "./App.css";
import GoogleMap from "./GoogleMap";
import VideoList from "./VideoList";
// import VideoList from "./videoList";
import youtube from "./Youtube";

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [maxResultsState, setMaxResultsState] = useState(10);
  const [locationState, setLocationState] = useState();

  const getVideos = async (location, maxResults) => {
    setLoading(true);
    const response = await youtube.get("/search", {
      params: {
        location: location.lat() + "," + location.lng(),
        maxResults: maxResults,
      },
    });
    setVideos(response.data.items);
    setLoading(false);
  };
  return (
    <div className="App">
      <GoogleMap
        placeName="Ankara"
        getVideos={(location) => {
          setLocationState(location);
          getVideos(location,maxResultsState);
        }}
      />
      {/* <VideoList videos={videos}/> */}
      <VideoList
        videos={videos}
        loading={loading}
        handleChange={() => {
          getVideos(locationState,maxResultsState + 10);
          setMaxResultsState(maxResultsState + 10);
        }}
      />
    </div>
  );
}

export default App;
