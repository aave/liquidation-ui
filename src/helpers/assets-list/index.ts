import icons from './icons';

interface Asset {
  name: string;
  symbol: string;
  color: {
    normal: string;
    dark: string;
  };
  icon: {
    normal: string;
    dark: string;
  };
}

export const assetsList: Asset[] = [
  {
    name: 'Basic Attention Token',
    symbol: 'BAT',
    color: {
      normal: '#662d91',
      dark: '#724991',
    },
    icon: {
      normal: icons.bat,
      dark: icons.bat,
    },
  },
  {
    name: 'DAI',
    symbol: 'DAI',
    color: {
      normal: '#f7b14a',
      dark: '#f7c67c',
    },
    icon: {
      normal: icons.dai,
      dark: icons.dai,
    },
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    color: {
      normal: '#524e4b',
      dark: '#524e4b',
    },
    icon: {
      normal: icons.eth,
      dark: icons.eth_dark,
    },
  },
  {
    name: 'Kyber Network',
    symbol: 'KNC',
    color: {
      normal: '#28be50',
      dark: '#60bf79',
    },
    icon: {
      normal: icons.knc,
      dark: icons.knc,
    },
  },
  {
    name: 'ETHLend',
    symbol: 'LEND',
    color: {
      normal: '#b6509e',
      dark: '#b55ba0',
    },
    icon: {
      normal: icons.lend,
      dark: icons.lend_dark,
    },
  },
  {
    name: 'ChainLink',
    symbol: 'LINK',
    color: {
      normal: '#2c5fdc',
      dark: '#6e8ddb',
    },
    icon: {
      normal: icons.link,
      dark: icons.link_dark,
    },
  },
  {
    name: 'Decentraland',
    symbol: 'MANA',
    color: {
      normal: '#ff4355',
      dark: '#ff99a3',
    },
    icon: {
      normal: icons.mana,
      dark: icons.mana,
    },
  },
  {
    name: 'Maker',
    symbol: 'MKR',
    color: {
      normal: '#17e5bd',
      dark: '#73e6cf',
    },
    icon: {
      normal: icons.mkr,
      dark: icons.mkr,
    },
  },
  {
    name: 'Augur',
    symbol: 'REP',
    color: {
      normal: '#581c49',
      dark: '#592d4e',
    },
    icon: {
      normal: icons.rep,
      dark: icons.rep_dark,
    },
  },
  {
    name: 'Synthetix',
    symbol: 'SNX',
    color: {
      normal: '#1e1a31',
      dark: '#493f65',
    },
    icon: {
      normal: icons.snx,
      dark: icons.snx,
    },
  },
  {
    name: 'Synthetix USD',
    symbol: 'SUSD',
    color: {
      normal: '#8a8895',
      dark: '#8a8895',
    },
    icon: {
      normal: icons.susd,
      dark: icons.susd,
    },
  },
  {
    name: 'TrueUSD',
    symbol: 'TUSD',
    color: {
      normal: '#002868',
      dark: '#344869',
    },
    icon: {
      normal: icons.tusd,
      dark: icons.tusd,
    },
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    color: {
      normal: '#2775ca',
      dark: '#6595c9',
    },
    icon: {
      normal: icons.usdc,
      dark: icons.usdc,
    },
  },
  {
    name: 'USDT Coin',
    symbol: 'USDT',
    color: {
      normal: '#4db196',
      dark: '#6ab09d',
    },
    icon: {
      normal: icons.usdt,
      dark: icons.usdt,
    },
  },
  {
    name: 'WBTC Coin',
    symbol: 'WBTC',
    color: {
      normal: '#ff7600',
      dark: '#ffa04d',
    },
    icon: {
      normal: icons.wbtc,
      dark: icons.wbtc,
    },
  },
  {
    name: '0x Coin',
    symbol: 'ZRX',
    color: {
      normal: '#d1d0d0',
      dark: '#d1d0d0',
    },
    icon: {
      normal: icons.zrx,
      dark: icons.zrx,
    },
  },
];

export const getAssetInfo = (assetSymbol: string) =>
  assetsList.filter(asset => asset.symbol === assetSymbol.toUpperCase())[0];
