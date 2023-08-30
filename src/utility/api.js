import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "ffebc69367mshde4c190ad3f6d45p16db95jsn84c3b923dc48",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  console.log(url);
  const { data } = await axios.get(BASE_URL + url, options);
  return data;
};
