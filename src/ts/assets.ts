export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
    {
      key: 'goku_blue',
      url: 'img/coins.jpg',
    },
    {
      key: 'goku_ui',
      url: 'img/ultraInstinct.jpg',
    },
    {
      key: 'vegita_blue',
      url: 'img/vegitaBlue.jpg',
    },
    {
      key: 'vegita_super_blue',
      url: 'img/vegitaSuperBlue.jpg',
    },
    {
      key: 'goku-ss',
      url: 'img/ssgoku.png',
    },
    {
      key: 'dino',
      url: 'img/dino.json',
    },
    {
      key: 'back',
      url: 'img/cardback.png',
    },
    {
      key: 'front',
      url: 'img/coin.jpg',
    },
    {
      key: 'desyrel',
      url: 'fonts/desyrel.xml',
    },
    {
      key: 'fountain',
      url: 'img/fountain.jpg',
    },
  ],
};
