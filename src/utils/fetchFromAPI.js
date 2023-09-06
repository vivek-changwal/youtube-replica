import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {

  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '100'
  },
  headers: {
    'X-RapidAPI-Key': '42f5b295a7msh9edc6442dfabfcfp1ad113jsn6efe17a2605e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};


