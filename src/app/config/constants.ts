import {environment} from '../../environments/environment';

const serverLink = environment.server_port === 80 ? environment.server_host : `${environment.server_host}:${environment.server_port}`;

export const CONSTANTS = {
  API_LINK: {
    YOUTUBE: {
      SEARCH: 'https://www.googleapis.com/youtube/v3/search'
    },
    AUTH: {
      LOGIN: `${serverLink}/user/login`,
      SIGN_UP: `${serverLink}/user`
    }
  },
  YOUTUBE_WATCH_LINK: 'https://www.youtube.com/embed/'
};
