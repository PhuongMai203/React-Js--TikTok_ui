const axios = require('axios');

const apiKey = 'YOUR_API_KEY';
const url = 'https://sandbox.api.video/videos';

const data = {
  title: 'My video title',
  description: 'A description of the video',
  tags: ['tag1', 'tag2'],
  public: true,
  panoramic: false,
  mp4Support: true
};

axios.post(url, data, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
