import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://youtube-data8.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {

  const { data } = await axios.get(BASE_URL + url, options);
  return data;
};
