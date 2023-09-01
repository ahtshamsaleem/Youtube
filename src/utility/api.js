import axios from "axios";

const BASE_URL = "https://youtube-data8.p.rapidapi.com";

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    "X-RapidAPI-Key": "3ff9e3a34amsh775f4d96681bc6ap1aed37jsn4f17bed8c9d7",
    "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  console.log(url);
  const { data } = await axios.get(BASE_URL + url, options);
  return data;
};
