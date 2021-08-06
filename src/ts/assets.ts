export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/img',
  images: [
    {
      key: 'dino',
      url: 'dino.json',
    },
    {
      key: 'back',
      url: 'cardback.png',
    },
    {
      key: 'front',
      url: 'smilies.jpg',
    },
    {key:'end',
    url:'gameover.jpg'

    },
  ],
};
