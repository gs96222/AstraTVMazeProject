import axios from 'axios';

axios.defaults.baseURL = 'https://api.tvmaze.com';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default fetcher;
