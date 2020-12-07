import axios from "axios";

const key = "AIzaSyBiX8qzeOLCs4_9LJM5nA4nI0I8dBdyPek";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 8,
    key: key,
  },
});
