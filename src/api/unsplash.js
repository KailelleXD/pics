import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5511b23460368e80e6126696b8e12cf77641216d8348b5c8171382fea482e752'
    }
})