import axios from "axios";
export const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD-2ij6Xvj1gbNMDEzoat8kgoa-cTIYhS0",
  },
});
