import axios from "axios";

const key = "Insert Key";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 8,
    key: key,
  },
});
