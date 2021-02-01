import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    key: "AIzaSyCxI2T4HRhvFFHnHMAIv6rS9QCQ57Q59w8",
    order: "date",
    locationRadius: "50km"
  },
});
