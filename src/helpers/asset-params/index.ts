import { getAssetInfo } from '../assets-list';

export const getAssetColor = (assetSymbol: string, isDarkMode: boolean) => {
  const asset = getAssetInfo(assetSymbol);
  const assetColor = isDarkMode ? asset && asset.color.dark : asset && asset.color.normal;

  return assetColor || '#2ebac6';
};

const STABLE_ASSETS = ['DAI', 'USDC', 'TUSD', 'USDT', 'SUSD'];
export const isAssetStable = (assetSymbol: string) =>
  STABLE_ASSETS.includes(assetSymbol.toLocaleUpperCase());
