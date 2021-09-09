import axios from 'axios';

const KEY='ncjnwecuoAIzaSyC5GIefvaDeyXkQyggCwiU_xQvbUIZGrI67YM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
