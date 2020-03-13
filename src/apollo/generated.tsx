import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Bytes: any;
  BigInt: any;
  BigDecimal: any;
};

export type ApproveInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
};

export type AToken = {
  __typename?: 'AToken';
  id: Scalars['ID'];
  underlyingAssetAddress: Scalars['Bytes'];
  underlyingAssetDecimals: Scalars['Int'];
};

export type AToken_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  underlyingAssetAddress?: Maybe<Scalars['Bytes']>;
  underlyingAssetAddress_not?: Maybe<Scalars['Bytes']>;
  underlyingAssetAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  underlyingAssetAddress_contains?: Maybe<Scalars['Bytes']>;
  underlyingAssetAddress_not_contains?: Maybe<Scalars['Bytes']>;
  underlyingAssetDecimals?: Maybe<Scalars['Int']>;
  underlyingAssetDecimals_not?: Maybe<Scalars['Int']>;
  underlyingAssetDecimals_gt?: Maybe<Scalars['Int']>;
  underlyingAssetDecimals_lt?: Maybe<Scalars['Int']>;
  underlyingAssetDecimals_gte?: Maybe<Scalars['Int']>;
  underlyingAssetDecimals_lte?: Maybe<Scalars['Int']>;
  underlyingAssetDecimals_in?: Maybe<Array<Scalars['Int']>>;
  underlyingAssetDecimals_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum AToken_OrderBy {
  Id = 'id',
  UnderlyingAssetAddress = 'underlyingAssetAddress',
  UnderlyingAssetDecimals = 'underlyingAssetDecimals',
}

export type ATokenBalanceHistoryItem = {
  __typename?: 'ATokenBalanceHistoryItem';
  id: Scalars['ID'];
  userReserve: UserReserve;
  balance: Scalars['BigInt'];
  userBalanceIndex: Scalars['BigInt'];
  interestRedirectionAddress: Scalars['Bytes'];
  redirectedBalance: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type ATokenBalanceHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['BigInt']>;
  balance_not?: Maybe<Scalars['BigInt']>;
  balance_gt?: Maybe<Scalars['BigInt']>;
  balance_lt?: Maybe<Scalars['BigInt']>;
  balance_gte?: Maybe<Scalars['BigInt']>;
  balance_lte?: Maybe<Scalars['BigInt']>;
  balance_in?: Maybe<Array<Scalars['BigInt']>>;
  balance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  userBalanceIndex?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_not?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_gt?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_lt?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_gte?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_lte?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  userBalanceIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  interestRedirectionAddress?: Maybe<Scalars['Bytes']>;
  interestRedirectionAddress_not?: Maybe<Scalars['Bytes']>;
  interestRedirectionAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  interestRedirectionAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  interestRedirectionAddress_contains?: Maybe<Scalars['Bytes']>;
  interestRedirectionAddress_not_contains?: Maybe<Scalars['Bytes']>;
  redirectedBalance?: Maybe<Scalars['BigInt']>;
  redirectedBalance_not?: Maybe<Scalars['BigInt']>;
  redirectedBalance_gt?: Maybe<Scalars['BigInt']>;
  redirectedBalance_lt?: Maybe<Scalars['BigInt']>;
  redirectedBalance_gte?: Maybe<Scalars['BigInt']>;
  redirectedBalance_lte?: Maybe<Scalars['BigInt']>;
  redirectedBalance_in?: Maybe<Array<Scalars['BigInt']>>;
  redirectedBalance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum ATokenBalanceHistoryItem_OrderBy {
  Id = 'id',
  UserReserve = 'userReserve',
  Balance = 'balance',
  UserBalanceIndex = 'userBalanceIndex',
  InterestRedirectionAddress = 'interestRedirectionAddress',
  RedirectedBalance = 'redirectedBalance',
  Timestamp = 'timestamp',
}

export type Block_Height = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};

export type Borrow = {
  __typename?: 'Borrow';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  borrowRate: Scalars['BigInt'];
  borrowRateMode: BorrowRateMode;
  accruedBorrowInterest: Scalars['BigInt'];
  referrer?: Maybe<Referrer>;
  timestamp: Scalars['Int'];
};

export type Borrow_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRate?: Maybe<Scalars['BigInt']>;
  borrowRate_not?: Maybe<Scalars['BigInt']>;
  borrowRate_gt?: Maybe<Scalars['BigInt']>;
  borrowRate_lt?: Maybe<Scalars['BigInt']>;
  borrowRate_gte?: Maybe<Scalars['BigInt']>;
  borrowRate_lte?: Maybe<Scalars['BigInt']>;
  borrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateMode?: Maybe<BorrowRateMode>;
  borrowRateMode_not?: Maybe<BorrowRateMode>;
  accruedBorrowInterest?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_not?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_gt?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_lt?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_gte?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_lte?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_in?: Maybe<Array<Scalars['BigInt']>>;
  accruedBorrowInterest_not_in?: Maybe<Array<Scalars['BigInt']>>;
  referrer?: Maybe<Scalars['String']>;
  referrer_not?: Maybe<Scalars['String']>;
  referrer_gt?: Maybe<Scalars['String']>;
  referrer_lt?: Maybe<Scalars['String']>;
  referrer_gte?: Maybe<Scalars['String']>;
  referrer_lte?: Maybe<Scalars['String']>;
  referrer_in?: Maybe<Array<Scalars['String']>>;
  referrer_not_in?: Maybe<Array<Scalars['String']>>;
  referrer_contains?: Maybe<Scalars['String']>;
  referrer_not_contains?: Maybe<Scalars['String']>;
  referrer_starts_with?: Maybe<Scalars['String']>;
  referrer_not_starts_with?: Maybe<Scalars['String']>;
  referrer_ends_with?: Maybe<Scalars['String']>;
  referrer_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Borrow_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  Reserve = 'reserve',
  UserReserve = 'userReserve',
  Amount = 'amount',
  BorrowRate = 'borrowRate',
  BorrowRateMode = 'borrowRateMode',
  AccruedBorrowInterest = 'accruedBorrowInterest',
  Referrer = 'referrer',
  Timestamp = 'timestamp',
}

export type BorrowInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  amount: Scalars['String'];
  onBehalfOf?: Maybe<Scalars['String']>;
  interestRateMode: InterestRate;
  referralCode?: Maybe<Scalars['String']>;
};

export enum BorrowRateMode {
  None = 'None',
  Stable = 'Stable',
  Variable = 'Variable',
}

export type ChainlinkAggregator = {
  __typename?: 'ChainlinkAggregator';
  id: Scalars['ID'];
  oracleAsset: PriceOracleAsset;
};

export type ChainlinkAggregator_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  oracleAsset?: Maybe<Scalars['String']>;
  oracleAsset_not?: Maybe<Scalars['String']>;
  oracleAsset_gt?: Maybe<Scalars['String']>;
  oracleAsset_lt?: Maybe<Scalars['String']>;
  oracleAsset_gte?: Maybe<Scalars['String']>;
  oracleAsset_lte?: Maybe<Scalars['String']>;
  oracleAsset_in?: Maybe<Array<Scalars['String']>>;
  oracleAsset_not_in?: Maybe<Array<Scalars['String']>>;
  oracleAsset_contains?: Maybe<Scalars['String']>;
  oracleAsset_not_contains?: Maybe<Scalars['String']>;
  oracleAsset_starts_with?: Maybe<Scalars['String']>;
  oracleAsset_not_starts_with?: Maybe<Scalars['String']>;
  oracleAsset_ends_with?: Maybe<Scalars['String']>;
  oracleAsset_not_ends_with?: Maybe<Scalars['String']>;
};

export enum ChainlinkAggregator_OrderBy {
  Id = 'id',
  OracleAsset = 'oracleAsset',
}

export type Deposit = {
  __typename?: 'Deposit';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  referrer?: Maybe<Referrer>;
  timestamp: Scalars['Int'];
};

export type Deposit_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  referrer?: Maybe<Scalars['String']>;
  referrer_not?: Maybe<Scalars['String']>;
  referrer_gt?: Maybe<Scalars['String']>;
  referrer_lt?: Maybe<Scalars['String']>;
  referrer_gte?: Maybe<Scalars['String']>;
  referrer_lte?: Maybe<Scalars['String']>;
  referrer_in?: Maybe<Array<Scalars['String']>>;
  referrer_not_in?: Maybe<Array<Scalars['String']>>;
  referrer_contains?: Maybe<Scalars['String']>;
  referrer_not_contains?: Maybe<Scalars['String']>;
  referrer_starts_with?: Maybe<Scalars['String']>;
  referrer_not_starts_with?: Maybe<Scalars['String']>;
  referrer_ends_with?: Maybe<Scalars['String']>;
  referrer_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Deposit_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  Reserve = 'reserve',
  UserReserve = 'userReserve',
  Amount = 'amount',
  Referrer = 'referrer',
  Timestamp = 'timestamp',
}

export type EthereumTransactionModel = {
  __typename?: 'EthereumTransactionModel';
  from: Scalars['String'];
  to: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type EthereumTransactionModelExtended = {
  __typename?: 'EthereumTransactionModelExtended';
  txType: Scalars['String'];
  tx: EthereumTransactionModel;
};

export type FlashLoan = {
  __typename?: 'FlashLoan';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  reserve: Reserve;
  target: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  totalFee: Scalars['BigInt'];
  protocolFee: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type FlashLoan_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['Bytes']>;
  target_not?: Maybe<Scalars['Bytes']>;
  target_in?: Maybe<Array<Scalars['Bytes']>>;
  target_not_in?: Maybe<Array<Scalars['Bytes']>>;
  target_contains?: Maybe<Scalars['Bytes']>;
  target_not_contains?: Maybe<Scalars['Bytes']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalFee?: Maybe<Scalars['BigInt']>;
  totalFee_not?: Maybe<Scalars['BigInt']>;
  totalFee_gt?: Maybe<Scalars['BigInt']>;
  totalFee_lt?: Maybe<Scalars['BigInt']>;
  totalFee_gte?: Maybe<Scalars['BigInt']>;
  totalFee_lte?: Maybe<Scalars['BigInt']>;
  totalFee_in?: Maybe<Array<Scalars['BigInt']>>;
  totalFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  protocolFee?: Maybe<Scalars['BigInt']>;
  protocolFee_not?: Maybe<Scalars['BigInt']>;
  protocolFee_gt?: Maybe<Scalars['BigInt']>;
  protocolFee_lt?: Maybe<Scalars['BigInt']>;
  protocolFee_gte?: Maybe<Scalars['BigInt']>;
  protocolFee_lte?: Maybe<Scalars['BigInt']>;
  protocolFee_in?: Maybe<Array<Scalars['BigInt']>>;
  protocolFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum FlashLoan_OrderBy {
  Id = 'id',
  Pool = 'pool',
  Reserve = 'reserve',
  Target = 'target',
  Amount = 'amount',
  TotalFee = 'totalFee',
  ProtocolFee = 'protocolFee',
  Timestamp = 'timestamp',
}

export enum InterestRate {
  None = 'None',
  Stable = 'Stable',
  Variable = 'Variable',
}

export type LendingPoolAddressProvider = {
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPoolCore?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolManager?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  feeProvider?: Maybe<Scalars['Bytes']>;
};

export type LendingPoolAddressProvider_Filter = {
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPool_not?: Maybe<Scalars['Bytes']>;
  lendingPool_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPool_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPool_contains?: Maybe<Scalars['Bytes']>;
  lendingPool_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolCore?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_not?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolCore_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolCore_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_not?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolParametersProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolParametersProvider_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolManager?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_not?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolManager_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_not?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolLiquidationManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolLiquidationManager_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_not?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolDataProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolDataProvider_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_not_contains?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_not?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_contains?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_not_contains?: Maybe<Scalars['Bytes']>;
  feeProvider?: Maybe<Scalars['Bytes']>;
  feeProvider_not?: Maybe<Scalars['Bytes']>;
  feeProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  feeProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeProvider_contains?: Maybe<Scalars['Bytes']>;
  feeProvider_not_contains?: Maybe<Scalars['Bytes']>;
};

export enum LendingPoolAddressProvider_OrderBy {
  LendingPool = 'lendingPool',
  LendingPoolCore = 'lendingPoolCore',
  LendingPoolParametersProvider = 'lendingPoolParametersProvider',
  LendingPoolManager = 'lendingPoolManager',
  LendingPoolConfigurator = 'lendingPoolConfigurator',
  LendingPoolLiquidationManager = 'lendingPoolLiquidationManager',
  LendingPoolDataProvider = 'lendingPoolDataProvider',
  ProxyPriceProvider = 'proxyPriceProvider',
  LendingRateOracle = 'lendingRateOracle',
  FeeProvider = 'feeProvider',
}

export type LendingPoolConfiguration = LendingPoolAddressProvider & {
  __typename?: 'LendingPoolConfiguration';
  id: Scalars['ID'];
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPoolCore?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolManager?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  feeProvider?: Maybe<Scalars['Bytes']>;
  history: Array<LendingPoolConfigurationHistoryItem>;
  lastUpdateTimestamp: Scalars['Int'];
  reserves: Array<Reserve>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  flashLoanHistory: Array<FlashLoan>;
  liquidationCallHistory: Array<LiquidationCall>;
  originationFeeLiquidationHistory: Array<OriginationFeeLiquidation>;
};

export type LendingPoolConfigurationHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolConfigurationHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolConfigurationHistoryItem_Filter>;
};

export type LendingPoolConfigurationReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Reserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Reserve_Filter>;
};

export type LendingPoolConfigurationDepositHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
};

export type LendingPoolConfigurationRedeemUnderlyingHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemUnderlying_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemUnderlying_Filter>;
};

export type LendingPoolConfigurationBorrowHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
};

export type LendingPoolConfigurationSwapHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type LendingPoolConfigurationRebalanceStableBorrowRateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RebalanceStableBorrowRate_Filter>;
};

export type LendingPoolConfigurationRepayHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Repay_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Repay_Filter>;
};

export type LendingPoolConfigurationFlashLoanHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FlashLoan_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FlashLoan_Filter>;
};

export type LendingPoolConfigurationLiquidationCallHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidationCall_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidationCall_Filter>;
};

export type LendingPoolConfigurationOriginationFeeLiquidationHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OriginationFeeLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OriginationFeeLiquidation_Filter>;
};

export type LendingPoolConfiguration_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPool_not?: Maybe<Scalars['Bytes']>;
  lendingPool_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPool_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPool_contains?: Maybe<Scalars['Bytes']>;
  lendingPool_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolCore?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_not?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolCore_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolCore_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_not?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolParametersProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolParametersProvider_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolManager?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_not?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolManager_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_not?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolLiquidationManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolLiquidationManager_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_not?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolDataProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolDataProvider_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_not_contains?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_not?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_contains?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_not_contains?: Maybe<Scalars['Bytes']>;
  feeProvider?: Maybe<Scalars['Bytes']>;
  feeProvider_not?: Maybe<Scalars['Bytes']>;
  feeProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  feeProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeProvider_contains?: Maybe<Scalars['Bytes']>;
  feeProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lastUpdateTimestamp?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum LendingPoolConfiguration_OrderBy {
  Id = 'id',
  LendingPool = 'lendingPool',
  LendingPoolCore = 'lendingPoolCore',
  LendingPoolParametersProvider = 'lendingPoolParametersProvider',
  LendingPoolManager = 'lendingPoolManager',
  LendingPoolConfigurator = 'lendingPoolConfigurator',
  LendingPoolLiquidationManager = 'lendingPoolLiquidationManager',
  LendingPoolDataProvider = 'lendingPoolDataProvider',
  ProxyPriceProvider = 'proxyPriceProvider',
  LendingRateOracle = 'lendingRateOracle',
  FeeProvider = 'feeProvider',
  History = 'history',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  Reserves = 'reserves',
  DepositHistory = 'depositHistory',
  RedeemUnderlyingHistory = 'redeemUnderlyingHistory',
  BorrowHistory = 'borrowHistory',
  SwapHistory = 'swapHistory',
  RebalanceStableBorrowRateHistory = 'rebalanceStableBorrowRateHistory',
  RepayHistory = 'repayHistory',
  FlashLoanHistory = 'flashLoanHistory',
  LiquidationCallHistory = 'liquidationCallHistory',
  OriginationFeeLiquidationHistory = 'originationFeeLiquidationHistory',
}

export type LendingPoolConfigurationHistoryItem = LendingPoolAddressProvider & {
  __typename?: 'LendingPoolConfigurationHistoryItem';
  id: Scalars['ID'];
  provider: LendingPoolConfiguration;
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPoolCore?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolManager?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  feeProvider?: Maybe<Scalars['Bytes']>;
  timestamp: Scalars['Int'];
};

export type LendingPoolConfigurationHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  provider?: Maybe<Scalars['String']>;
  provider_not?: Maybe<Scalars['String']>;
  provider_gt?: Maybe<Scalars['String']>;
  provider_lt?: Maybe<Scalars['String']>;
  provider_gte?: Maybe<Scalars['String']>;
  provider_lte?: Maybe<Scalars['String']>;
  provider_in?: Maybe<Array<Scalars['String']>>;
  provider_not_in?: Maybe<Array<Scalars['String']>>;
  provider_contains?: Maybe<Scalars['String']>;
  provider_not_contains?: Maybe<Scalars['String']>;
  provider_starts_with?: Maybe<Scalars['String']>;
  provider_not_starts_with?: Maybe<Scalars['String']>;
  provider_ends_with?: Maybe<Scalars['String']>;
  provider_not_ends_with?: Maybe<Scalars['String']>;
  lendingPool?: Maybe<Scalars['Bytes']>;
  lendingPool_not?: Maybe<Scalars['Bytes']>;
  lendingPool_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPool_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPool_contains?: Maybe<Scalars['Bytes']>;
  lendingPool_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolCore?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_not?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolCore_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolCore_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolCore_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_not?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolParametersProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolParametersProvider_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolParametersProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolManager?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_not?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolManager_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolManager_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolConfigurator_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolConfigurator_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_not?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolLiquidationManager_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolLiquidationManager_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolLiquidationManager_not_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_not?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolDataProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingPoolDataProvider_contains?: Maybe<Scalars['Bytes']>;
  lendingPoolDataProvider_not_contains?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_not?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  proxyPriceProvider_contains?: Maybe<Scalars['Bytes']>;
  proxyPriceProvider_not_contains?: Maybe<Scalars['Bytes']>;
  lendingRateOracle?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_not?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_not_in?: Maybe<Array<Scalars['Bytes']>>;
  lendingRateOracle_contains?: Maybe<Scalars['Bytes']>;
  lendingRateOracle_not_contains?: Maybe<Scalars['Bytes']>;
  feeProvider?: Maybe<Scalars['Bytes']>;
  feeProvider_not?: Maybe<Scalars['Bytes']>;
  feeProvider_in?: Maybe<Array<Scalars['Bytes']>>;
  feeProvider_not_in?: Maybe<Array<Scalars['Bytes']>>;
  feeProvider_contains?: Maybe<Scalars['Bytes']>;
  feeProvider_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum LendingPoolConfigurationHistoryItem_OrderBy {
  Id = 'id',
  Provider = 'provider',
  LendingPool = 'lendingPool',
  LendingPoolCore = 'lendingPoolCore',
  LendingPoolParametersProvider = 'lendingPoolParametersProvider',
  LendingPoolManager = 'lendingPoolManager',
  LendingPoolConfigurator = 'lendingPoolConfigurator',
  LendingPoolLiquidationManager = 'lendingPoolLiquidationManager',
  LendingPoolDataProvider = 'lendingPoolDataProvider',
  ProxyPriceProvider = 'proxyPriceProvider',
  LendingRateOracle = 'lendingRateOracle',
  FeeProvider = 'feeProvider',
  Timestamp = 'timestamp',
}

export type LiquidationCall = {
  __typename?: 'LiquidationCall';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  collateralReserve: Reserve;
  collateralUserReserve: UserReserve;
  collateralAmount: Scalars['BigInt'];
  principalReserve: Reserve;
  principalUserReserve: UserReserve;
  principalAmount: Scalars['BigInt'];
  liquidator: Scalars['Bytes'];
  timestamp: Scalars['Int'];
};

export type LiquidationCall_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  collateralReserve?: Maybe<Scalars['String']>;
  collateralReserve_not?: Maybe<Scalars['String']>;
  collateralReserve_gt?: Maybe<Scalars['String']>;
  collateralReserve_lt?: Maybe<Scalars['String']>;
  collateralReserve_gte?: Maybe<Scalars['String']>;
  collateralReserve_lte?: Maybe<Scalars['String']>;
  collateralReserve_in?: Maybe<Array<Scalars['String']>>;
  collateralReserve_not_in?: Maybe<Array<Scalars['String']>>;
  collateralReserve_contains?: Maybe<Scalars['String']>;
  collateralReserve_not_contains?: Maybe<Scalars['String']>;
  collateralReserve_starts_with?: Maybe<Scalars['String']>;
  collateralReserve_not_starts_with?: Maybe<Scalars['String']>;
  collateralReserve_ends_with?: Maybe<Scalars['String']>;
  collateralReserve_not_ends_with?: Maybe<Scalars['String']>;
  collateralUserReserve?: Maybe<Scalars['String']>;
  collateralUserReserve_not?: Maybe<Scalars['String']>;
  collateralUserReserve_gt?: Maybe<Scalars['String']>;
  collateralUserReserve_lt?: Maybe<Scalars['String']>;
  collateralUserReserve_gte?: Maybe<Scalars['String']>;
  collateralUserReserve_lte?: Maybe<Scalars['String']>;
  collateralUserReserve_in?: Maybe<Array<Scalars['String']>>;
  collateralUserReserve_not_in?: Maybe<Array<Scalars['String']>>;
  collateralUserReserve_contains?: Maybe<Scalars['String']>;
  collateralUserReserve_not_contains?: Maybe<Scalars['String']>;
  collateralUserReserve_starts_with?: Maybe<Scalars['String']>;
  collateralUserReserve_not_starts_with?: Maybe<Scalars['String']>;
  collateralUserReserve_ends_with?: Maybe<Scalars['String']>;
  collateralUserReserve_not_ends_with?: Maybe<Scalars['String']>;
  collateralAmount?: Maybe<Scalars['BigInt']>;
  collateralAmount_not?: Maybe<Scalars['BigInt']>;
  collateralAmount_gt?: Maybe<Scalars['BigInt']>;
  collateralAmount_lt?: Maybe<Scalars['BigInt']>;
  collateralAmount_gte?: Maybe<Scalars['BigInt']>;
  collateralAmount_lte?: Maybe<Scalars['BigInt']>;
  collateralAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  collateralAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  principalReserve?: Maybe<Scalars['String']>;
  principalReserve_not?: Maybe<Scalars['String']>;
  principalReserve_gt?: Maybe<Scalars['String']>;
  principalReserve_lt?: Maybe<Scalars['String']>;
  principalReserve_gte?: Maybe<Scalars['String']>;
  principalReserve_lte?: Maybe<Scalars['String']>;
  principalReserve_in?: Maybe<Array<Scalars['String']>>;
  principalReserve_not_in?: Maybe<Array<Scalars['String']>>;
  principalReserve_contains?: Maybe<Scalars['String']>;
  principalReserve_not_contains?: Maybe<Scalars['String']>;
  principalReserve_starts_with?: Maybe<Scalars['String']>;
  principalReserve_not_starts_with?: Maybe<Scalars['String']>;
  principalReserve_ends_with?: Maybe<Scalars['String']>;
  principalReserve_not_ends_with?: Maybe<Scalars['String']>;
  principalUserReserve?: Maybe<Scalars['String']>;
  principalUserReserve_not?: Maybe<Scalars['String']>;
  principalUserReserve_gt?: Maybe<Scalars['String']>;
  principalUserReserve_lt?: Maybe<Scalars['String']>;
  principalUserReserve_gte?: Maybe<Scalars['String']>;
  principalUserReserve_lte?: Maybe<Scalars['String']>;
  principalUserReserve_in?: Maybe<Array<Scalars['String']>>;
  principalUserReserve_not_in?: Maybe<Array<Scalars['String']>>;
  principalUserReserve_contains?: Maybe<Scalars['String']>;
  principalUserReserve_not_contains?: Maybe<Scalars['String']>;
  principalUserReserve_starts_with?: Maybe<Scalars['String']>;
  principalUserReserve_not_starts_with?: Maybe<Scalars['String']>;
  principalUserReserve_ends_with?: Maybe<Scalars['String']>;
  principalUserReserve_not_ends_with?: Maybe<Scalars['String']>;
  principalAmount?: Maybe<Scalars['BigInt']>;
  principalAmount_not?: Maybe<Scalars['BigInt']>;
  principalAmount_gt?: Maybe<Scalars['BigInt']>;
  principalAmount_lt?: Maybe<Scalars['BigInt']>;
  principalAmount_gte?: Maybe<Scalars['BigInt']>;
  principalAmount_lte?: Maybe<Scalars['BigInt']>;
  principalAmount_in?: Maybe<Array<Scalars['BigInt']>>;
  principalAmount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidator?: Maybe<Scalars['Bytes']>;
  liquidator_not?: Maybe<Scalars['Bytes']>;
  liquidator_in?: Maybe<Array<Scalars['Bytes']>>;
  liquidator_not_in?: Maybe<Array<Scalars['Bytes']>>;
  liquidator_contains?: Maybe<Scalars['Bytes']>;
  liquidator_not_contains?: Maybe<Scalars['Bytes']>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum LiquidationCall_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  CollateralReserve = 'collateralReserve',
  CollateralUserReserve = 'collateralUserReserve',
  CollateralAmount = 'collateralAmount',
  PrincipalReserve = 'principalReserve',
  PrincipalUserReserve = 'principalUserReserve',
  PrincipalAmount = 'principalAmount',
  Liquidator = 'liquidator',
  Timestamp = 'timestamp',
}

export type LiquidationCallInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  collateralReserve: Scalars['String'];
  purchaseAmount: Scalars['String'];
  getAToken?: Maybe<Scalars['Boolean']>;
};

export type MintInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  borrow: Array<EthereumTransactionModelExtended>;
  liquidationCall: Array<EthereumTransactionModelExtended>;
  deposit: Array<EthereumTransactionModelExtended>;
  repay: Array<EthereumTransactionModelExtended>;
  swapBorrowRateMode: Array<EthereumTransactionModelExtended>;
  setUsageAsCollateral: Array<EthereumTransactionModelExtended>;
  redeem: Array<EthereumTransactionModelExtended>;
  mint: Array<EthereumTransactionModelExtended>;
};

export type MutationBorrowArgs = {
  data: BorrowInput;
};

export type MutationLiquidationCallArgs = {
  data: LiquidationCallInput;
};

export type MutationDepositArgs = {
  data: TransferFromInput;
};

export type MutationRepayArgs = {
  data: TransferFromInput;
};

export type MutationSwapBorrowRateModeArgs = {
  data: ApproveInput;
};

export type MutationSetUsageAsCollateralArgs = {
  data: SetUsageAsCollateralInput;
};

export type MutationRedeemArgs = {
  data: RedeemInput;
};

export type MutationMintArgs = {
  data: MintInput;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type OriginationFeeLiquidation = {
  __typename?: 'OriginationFeeLiquidation';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  collateralReserve: Reserve;
  collateralUserReserve: UserReserve;
  principalReserve: Reserve;
  principalUserReserve: UserReserve;
  feeLiquidated: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type OriginationFeeLiquidation_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  collateralReserve?: Maybe<Scalars['String']>;
  collateralReserve_not?: Maybe<Scalars['String']>;
  collateralReserve_gt?: Maybe<Scalars['String']>;
  collateralReserve_lt?: Maybe<Scalars['String']>;
  collateralReserve_gte?: Maybe<Scalars['String']>;
  collateralReserve_lte?: Maybe<Scalars['String']>;
  collateralReserve_in?: Maybe<Array<Scalars['String']>>;
  collateralReserve_not_in?: Maybe<Array<Scalars['String']>>;
  collateralReserve_contains?: Maybe<Scalars['String']>;
  collateralReserve_not_contains?: Maybe<Scalars['String']>;
  collateralReserve_starts_with?: Maybe<Scalars['String']>;
  collateralReserve_not_starts_with?: Maybe<Scalars['String']>;
  collateralReserve_ends_with?: Maybe<Scalars['String']>;
  collateralReserve_not_ends_with?: Maybe<Scalars['String']>;
  collateralUserReserve?: Maybe<Scalars['String']>;
  collateralUserReserve_not?: Maybe<Scalars['String']>;
  collateralUserReserve_gt?: Maybe<Scalars['String']>;
  collateralUserReserve_lt?: Maybe<Scalars['String']>;
  collateralUserReserve_gte?: Maybe<Scalars['String']>;
  collateralUserReserve_lte?: Maybe<Scalars['String']>;
  collateralUserReserve_in?: Maybe<Array<Scalars['String']>>;
  collateralUserReserve_not_in?: Maybe<Array<Scalars['String']>>;
  collateralUserReserve_contains?: Maybe<Scalars['String']>;
  collateralUserReserve_not_contains?: Maybe<Scalars['String']>;
  collateralUserReserve_starts_with?: Maybe<Scalars['String']>;
  collateralUserReserve_not_starts_with?: Maybe<Scalars['String']>;
  collateralUserReserve_ends_with?: Maybe<Scalars['String']>;
  collateralUserReserve_not_ends_with?: Maybe<Scalars['String']>;
  principalReserve?: Maybe<Scalars['String']>;
  principalReserve_not?: Maybe<Scalars['String']>;
  principalReserve_gt?: Maybe<Scalars['String']>;
  principalReserve_lt?: Maybe<Scalars['String']>;
  principalReserve_gte?: Maybe<Scalars['String']>;
  principalReserve_lte?: Maybe<Scalars['String']>;
  principalReserve_in?: Maybe<Array<Scalars['String']>>;
  principalReserve_not_in?: Maybe<Array<Scalars['String']>>;
  principalReserve_contains?: Maybe<Scalars['String']>;
  principalReserve_not_contains?: Maybe<Scalars['String']>;
  principalReserve_starts_with?: Maybe<Scalars['String']>;
  principalReserve_not_starts_with?: Maybe<Scalars['String']>;
  principalReserve_ends_with?: Maybe<Scalars['String']>;
  principalReserve_not_ends_with?: Maybe<Scalars['String']>;
  principalUserReserve?: Maybe<Scalars['String']>;
  principalUserReserve_not?: Maybe<Scalars['String']>;
  principalUserReserve_gt?: Maybe<Scalars['String']>;
  principalUserReserve_lt?: Maybe<Scalars['String']>;
  principalUserReserve_gte?: Maybe<Scalars['String']>;
  principalUserReserve_lte?: Maybe<Scalars['String']>;
  principalUserReserve_in?: Maybe<Array<Scalars['String']>>;
  principalUserReserve_not_in?: Maybe<Array<Scalars['String']>>;
  principalUserReserve_contains?: Maybe<Scalars['String']>;
  principalUserReserve_not_contains?: Maybe<Scalars['String']>;
  principalUserReserve_starts_with?: Maybe<Scalars['String']>;
  principalUserReserve_not_starts_with?: Maybe<Scalars['String']>;
  principalUserReserve_ends_with?: Maybe<Scalars['String']>;
  principalUserReserve_not_ends_with?: Maybe<Scalars['String']>;
  feeLiquidated?: Maybe<Scalars['BigInt']>;
  feeLiquidated_not?: Maybe<Scalars['BigInt']>;
  feeLiquidated_gt?: Maybe<Scalars['BigInt']>;
  feeLiquidated_lt?: Maybe<Scalars['BigInt']>;
  feeLiquidated_gte?: Maybe<Scalars['BigInt']>;
  feeLiquidated_lte?: Maybe<Scalars['BigInt']>;
  feeLiquidated_in?: Maybe<Array<Scalars['BigInt']>>;
  feeLiquidated_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum OriginationFeeLiquidation_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  CollateralReserve = 'collateralReserve',
  CollateralUserReserve = 'collateralUserReserve',
  PrincipalReserve = 'principalReserve',
  PrincipalUserReserve = 'principalUserReserve',
  FeeLiquidated = 'feeLiquidated',
  Timestamp = 'timestamp',
}

export type PriceHistoryItem = {
  __typename?: 'PriceHistoryItem';
  id: Scalars['ID'];
  asset: PriceOracleAsset;
  price: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type PriceHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  asset?: Maybe<Scalars['String']>;
  asset_not?: Maybe<Scalars['String']>;
  asset_gt?: Maybe<Scalars['String']>;
  asset_lt?: Maybe<Scalars['String']>;
  asset_gte?: Maybe<Scalars['String']>;
  asset_lte?: Maybe<Scalars['String']>;
  asset_in?: Maybe<Array<Scalars['String']>>;
  asset_not_in?: Maybe<Array<Scalars['String']>>;
  asset_contains?: Maybe<Scalars['String']>;
  asset_not_contains?: Maybe<Scalars['String']>;
  asset_starts_with?: Maybe<Scalars['String']>;
  asset_not_starts_with?: Maybe<Scalars['String']>;
  asset_ends_with?: Maybe<Scalars['String']>;
  asset_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigInt']>;
  price_not?: Maybe<Scalars['BigInt']>;
  price_gt?: Maybe<Scalars['BigInt']>;
  price_lt?: Maybe<Scalars['BigInt']>;
  price_gte?: Maybe<Scalars['BigInt']>;
  price_lte?: Maybe<Scalars['BigInt']>;
  price_in?: Maybe<Array<Scalars['BigInt']>>;
  price_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum PriceHistoryItem_OrderBy {
  Id = 'id',
  Asset = 'asset',
  Price = 'price',
  Timestamp = 'timestamp',
}

export type PriceOracle = {
  __typename?: 'PriceOracle';
  id: Scalars['ID'];
  usdPriceEth: Scalars['BigInt'];
  fallbackPriceOracle: Scalars['Bytes'];
  tokens: Array<PriceOracleAsset>;
  usdPriceEthHistory: Array<UsdEthPriceHistoryItem>;
  tokensWithFallback: Array<PriceOracleAsset>;
  lastUpdateTimestamp: Scalars['Int'];
};

export type PriceOracleTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceOracleAsset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceOracleAsset_Filter>;
};

export type PriceOracleUsdPriceEthHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UsdEthPriceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UsdEthPriceHistoryItem_Filter>;
};

export type PriceOracleTokensWithFallbackArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceOracleAsset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceOracleAsset_Filter>;
};

export type PriceOracle_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  usdPriceEth?: Maybe<Scalars['BigInt']>;
  usdPriceEth_not?: Maybe<Scalars['BigInt']>;
  usdPriceEth_gt?: Maybe<Scalars['BigInt']>;
  usdPriceEth_lt?: Maybe<Scalars['BigInt']>;
  usdPriceEth_gte?: Maybe<Scalars['BigInt']>;
  usdPriceEth_lte?: Maybe<Scalars['BigInt']>;
  usdPriceEth_in?: Maybe<Array<Scalars['BigInt']>>;
  usdPriceEth_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fallbackPriceOracle?: Maybe<Scalars['Bytes']>;
  fallbackPriceOracle_not?: Maybe<Scalars['Bytes']>;
  fallbackPriceOracle_in?: Maybe<Array<Scalars['Bytes']>>;
  fallbackPriceOracle_not_in?: Maybe<Array<Scalars['Bytes']>>;
  fallbackPriceOracle_contains?: Maybe<Scalars['Bytes']>;
  fallbackPriceOracle_not_contains?: Maybe<Scalars['Bytes']>;
  tokensWithFallback?: Maybe<Array<Scalars['String']>>;
  tokensWithFallback_not?: Maybe<Array<Scalars['String']>>;
  tokensWithFallback_contains?: Maybe<Array<Scalars['String']>>;
  tokensWithFallback_not_contains?: Maybe<Array<Scalars['String']>>;
  lastUpdateTimestamp?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum PriceOracle_OrderBy {
  Id = 'id',
  UsdPriceEth = 'usdPriceEth',
  FallbackPriceOracle = 'fallbackPriceOracle',
  Tokens = 'tokens',
  UsdPriceEthHistory = 'usdPriceEthHistory',
  TokensWithFallback = 'tokensWithFallback',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
}

export type PriceOracleAsset = {
  __typename?: 'PriceOracleAsset';
  id: Scalars['ID'];
  oracle: PriceOracle;
  priceInEth: Scalars['BigInt'];
  priceSource: Scalars['Bytes'];
  isFallbackRequired: Scalars['Boolean'];
  lastUpdateTimestamp: Scalars['Int'];
  priceHistory: Array<PriceHistoryItem>;
};

export type PriceOracleAssetPriceHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceHistoryItem_Filter>;
};

export type PriceOracleAsset_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  oracle?: Maybe<Scalars['String']>;
  oracle_not?: Maybe<Scalars['String']>;
  oracle_gt?: Maybe<Scalars['String']>;
  oracle_lt?: Maybe<Scalars['String']>;
  oracle_gte?: Maybe<Scalars['String']>;
  oracle_lte?: Maybe<Scalars['String']>;
  oracle_in?: Maybe<Array<Scalars['String']>>;
  oracle_not_in?: Maybe<Array<Scalars['String']>>;
  oracle_contains?: Maybe<Scalars['String']>;
  oracle_not_contains?: Maybe<Scalars['String']>;
  oracle_starts_with?: Maybe<Scalars['String']>;
  oracle_not_starts_with?: Maybe<Scalars['String']>;
  oracle_ends_with?: Maybe<Scalars['String']>;
  oracle_not_ends_with?: Maybe<Scalars['String']>;
  priceInEth?: Maybe<Scalars['BigInt']>;
  priceInEth_not?: Maybe<Scalars['BigInt']>;
  priceInEth_gt?: Maybe<Scalars['BigInt']>;
  priceInEth_lt?: Maybe<Scalars['BigInt']>;
  priceInEth_gte?: Maybe<Scalars['BigInt']>;
  priceInEth_lte?: Maybe<Scalars['BigInt']>;
  priceInEth_in?: Maybe<Array<Scalars['BigInt']>>;
  priceInEth_not_in?: Maybe<Array<Scalars['BigInt']>>;
  priceSource?: Maybe<Scalars['Bytes']>;
  priceSource_not?: Maybe<Scalars['Bytes']>;
  priceSource_in?: Maybe<Array<Scalars['Bytes']>>;
  priceSource_not_in?: Maybe<Array<Scalars['Bytes']>>;
  priceSource_contains?: Maybe<Scalars['Bytes']>;
  priceSource_not_contains?: Maybe<Scalars['Bytes']>;
  isFallbackRequired?: Maybe<Scalars['Boolean']>;
  isFallbackRequired_not?: Maybe<Scalars['Boolean']>;
  isFallbackRequired_in?: Maybe<Array<Scalars['Boolean']>>;
  isFallbackRequired_not_in?: Maybe<Array<Scalars['Boolean']>>;
  lastUpdateTimestamp?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum PriceOracleAsset_OrderBy {
  Id = 'id',
  Oracle = 'oracle',
  PriceInEth = 'priceInEth',
  PriceSource = 'priceSource',
  IsFallbackRequired = 'isFallbackRequired',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  PriceHistory = 'priceHistory',
}

export type Query = {
  __typename?: 'Query';
  atoken?: Maybe<AToken>;
  atokenBalanceHistoryItem?: Maybe<ATokenBalanceHistoryItem>;
  atokenBalanceHistoryItems: Array<ATokenBalanceHistoryItem>;
  atokens: Array<AToken>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  lendingPoolAddressProvider?: Maybe<LendingPoolAddressProvider>;
  lendingPoolAddressProviders: Array<LendingPoolAddressProvider>;
  lendingPoolConfiguration?: Maybe<LendingPoolConfiguration>;
  lendingPoolConfigurationHistoryItem?: Maybe<LendingPoolConfigurationHistoryItem>;
  lendingPoolConfigurationHistoryItems: Array<LendingPoolConfigurationHistoryItem>;
  lendingPoolConfigurations: Array<LendingPoolConfiguration>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  originationFeeLiquidation?: Maybe<OriginationFeeLiquidation>;
  originationFeeLiquidations: Array<OriginationFeeLiquidation>;
  ping: Scalars['String'];
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracles: Array<PriceOracle>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  reserve?: Maybe<Reserve>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  reserves: Array<Reserve>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  user?: Maybe<User>;
  userBorrowHistoryItem?: Maybe<UserBorrowHistoryItem>;
  userBorrowHistoryItems: Array<UserBorrowHistoryItem>;
  userReserve?: Maybe<UserReserve>;
  userReserves: Array<UserReserve>;
  users: Array<User>;
};

export type QueryAtokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryAtokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryAtokenBalanceHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ATokenBalanceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ATokenBalanceHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryAtokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AToken_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryBorrowArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryBorrowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryChainlinkAggregatorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryChainlinkAggregatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChainlinkAggregator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ChainlinkAggregator_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryDepositArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryFlashLoanArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryFlashLoansArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FlashLoan_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FlashLoan_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryLendingPoolAddressProviderArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryLendingPoolAddressProvidersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolAddressProvider_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolAddressProvider_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryLendingPoolConfigurationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryLendingPoolConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryLendingPoolConfigurationHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolConfigurationHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolConfigurationHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryLendingPoolConfigurationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolConfiguration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolConfiguration_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryLiquidationCallArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryLiquidationCallsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidationCall_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidationCall_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryOriginationFeeLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryOriginationFeeLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OriginationFeeLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OriginationFeeLiquidation_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryPriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryPriceHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryPriceOracleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryPriceOracleAssetArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryPriceOracleAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceOracleAsset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceOracleAsset_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryPriceOraclesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceOracle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceOracle_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryRebalanceStableBorrowRateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryRebalanceStableBorrowRatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RebalanceStableBorrowRate_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryRedeemUnderlyingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryRedeemUnderlyingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemUnderlying_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemUnderlying_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryReferrerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryReferrersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Referrer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Referrer_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryRepayArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryRepaysArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Repay_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Repay_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryReserveArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryReserveConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryReserveConfigurationHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveConfigurationHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveConfigurationHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryReserveParamsHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryReserveParamsHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveParamsHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveParamsHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Reserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Reserve_Filter>;
  block?: Maybe<Block_Height>;
};

export type QuerySwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QuerySwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryUsdEthPriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryUsdEthPriceHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UsdEthPriceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UsdEthPriceHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryUserBorrowHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryUserBorrowHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserBorrowHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserBorrowHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryUserReserveArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type QueryUserReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserReserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserReserve_Filter>;
  block?: Maybe<Block_Height>;
};

export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};

export type RebalanceStableBorrowRate = {
  __typename?: 'RebalanceStableBorrowRate';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  borrowRateFrom: Scalars['BigInt'];
  borrowRateTo: Scalars['BigInt'];
  accruedBorrowInterest: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type RebalanceStableBorrowRate_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  borrowRateFrom?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_not?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_gt?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_lt?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_gte?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_lte?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateFrom_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateTo?: Maybe<Scalars['BigInt']>;
  borrowRateTo_not?: Maybe<Scalars['BigInt']>;
  borrowRateTo_gt?: Maybe<Scalars['BigInt']>;
  borrowRateTo_lt?: Maybe<Scalars['BigInt']>;
  borrowRateTo_gte?: Maybe<Scalars['BigInt']>;
  borrowRateTo_lte?: Maybe<Scalars['BigInt']>;
  borrowRateTo_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateTo_not_in?: Maybe<Array<Scalars['BigInt']>>;
  accruedBorrowInterest?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_not?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_gt?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_lt?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_gte?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_lte?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_in?: Maybe<Array<Scalars['BigInt']>>;
  accruedBorrowInterest_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum RebalanceStableBorrowRate_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  Reserve = 'reserve',
  UserReserve = 'userReserve',
  BorrowRateFrom = 'borrowRateFrom',
  BorrowRateTo = 'borrowRateTo',
  AccruedBorrowInterest = 'accruedBorrowInterest',
  Timestamp = 'timestamp',
}

export type RedeemInput = {
  userAddress: Scalars['String'];
  aToken: Scalars['String'];
  amount: Scalars['String'];
};

export type RedeemUnderlying = {
  __typename?: 'RedeemUnderlying';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amount: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type RedeemUnderlying_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum RedeemUnderlying_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  Reserve = 'reserve',
  UserReserve = 'userReserve',
  Amount = 'amount',
  Timestamp = 'timestamp',
}

export type Referrer = {
  __typename?: 'Referrer';
  id: Scalars['ID'];
  deposits: Array<Deposit>;
  borrows: Array<Borrow>;
};

export type ReferrerDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
};

export type ReferrerBorrowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
};

export type Referrer_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum Referrer_OrderBy {
  Id = 'id',
  Deposits = 'deposits',
  Borrows = 'borrows',
}

export type Repay = {
  __typename?: 'Repay';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  amountAfterFee: Scalars['BigInt'];
  fee: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type Repay_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  amountAfterFee?: Maybe<Scalars['BigInt']>;
  amountAfterFee_not?: Maybe<Scalars['BigInt']>;
  amountAfterFee_gt?: Maybe<Scalars['BigInt']>;
  amountAfterFee_lt?: Maybe<Scalars['BigInt']>;
  amountAfterFee_gte?: Maybe<Scalars['BigInt']>;
  amountAfterFee_lte?: Maybe<Scalars['BigInt']>;
  amountAfterFee_in?: Maybe<Array<Scalars['BigInt']>>;
  amountAfterFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  fee?: Maybe<Scalars['BigInt']>;
  fee_not?: Maybe<Scalars['BigInt']>;
  fee_gt?: Maybe<Scalars['BigInt']>;
  fee_lt?: Maybe<Scalars['BigInt']>;
  fee_gte?: Maybe<Scalars['BigInt']>;
  fee_lte?: Maybe<Scalars['BigInt']>;
  fee_in?: Maybe<Array<Scalars['BigInt']>>;
  fee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Repay_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  Reserve = 'reserve',
  UserReserve = 'userReserve',
  AmountAfterFee = 'amountAfterFee',
  Fee = 'fee',
  Timestamp = 'timestamp',
}

export type Reserve = {
  __typename?: 'Reserve';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['Int'];
  usageAsCollateralEnabled: Scalars['Boolean'];
  borrowingEnabled: Scalars['Boolean'];
  stableBorrowRateEnabled: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  price: PriceOracleAsset;
  reserveInterestRateStrategy: Scalars['Bytes'];
  baseLTVasCollateral: Scalars['BigInt'];
  reserveLiquidationThreshold: Scalars['BigInt'];
  reserveLiquidationBonus: Scalars['BigInt'];
  utilizationRate: Scalars['BigDecimal'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityAsCollateral: Scalars['BigInt'];
  availableLiquidity: Scalars['BigInt'];
  totalBorrows: Scalars['BigInt'];
  totalBorrowsStable: Scalars['BigInt'];
  totalBorrowsVariable: Scalars['BigInt'];
  liquidityRate: Scalars['BigInt'];
  variableBorrowRate: Scalars['BigInt'];
  stableBorrowRate: Scalars['BigInt'];
  liquidityIndex: Scalars['BigInt'];
  variableBorrowIndex: Scalars['BigInt'];
  aToken: AToken;
  lastUpdateTimestamp: Scalars['Int'];
  userReserves: Array<UserReserve>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  flashLoanHistory: Array<FlashLoan>;
  liquidationCallHistory: Array<LiquidationCall>;
  originationFeeLiquidationHistory: Array<OriginationFeeLiquidation>;
  paramsHistory: Array<ReserveParamsHistoryItem>;
  configurationHistory: Array<ReserveConfigurationHistoryItem>;
  deposits: Array<Deposit>;
};

export type ReserveUserReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserReserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserReserve_Filter>;
};

export type ReserveDepositHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
};

export type ReserveRedeemUnderlyingHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemUnderlying_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemUnderlying_Filter>;
};

export type ReserveBorrowHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
};

export type ReserveSwapHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type ReserveRebalanceStableBorrowRateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RebalanceStableBorrowRate_Filter>;
};

export type ReserveRepayHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Repay_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Repay_Filter>;
};

export type ReserveFlashLoanHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FlashLoan_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FlashLoan_Filter>;
};

export type ReserveLiquidationCallHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidationCall_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidationCall_Filter>;
};

export type ReserveOriginationFeeLiquidationHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OriginationFeeLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OriginationFeeLiquidation_Filter>;
};

export type ReserveParamsHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveParamsHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveParamsHistoryItem_Filter>;
};

export type ReserveConfigurationHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveConfigurationHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveConfigurationHistoryItem_Filter>;
};

export type ReserveDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
};

export type Reserve_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  usageAsCollateralEnabled?: Maybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_not?: Maybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  usageAsCollateralEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  borrowingEnabled?: Maybe<Scalars['Boolean']>;
  borrowingEnabled_not?: Maybe<Scalars['Boolean']>;
  borrowingEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  borrowingEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled?: Maybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_not?: Maybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isActive_not?: Maybe<Scalars['Boolean']>;
  isActive_in?: Maybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: Maybe<Array<Scalars['Boolean']>>;
  price?: Maybe<Scalars['String']>;
  price_not?: Maybe<Scalars['String']>;
  price_gt?: Maybe<Scalars['String']>;
  price_lt?: Maybe<Scalars['String']>;
  price_gte?: Maybe<Scalars['String']>;
  price_lte?: Maybe<Scalars['String']>;
  price_in?: Maybe<Array<Scalars['String']>>;
  price_not_in?: Maybe<Array<Scalars['String']>>;
  price_contains?: Maybe<Scalars['String']>;
  price_not_contains?: Maybe<Scalars['String']>;
  price_starts_with?: Maybe<Scalars['String']>;
  price_not_starts_with?: Maybe<Scalars['String']>;
  price_ends_with?: Maybe<Scalars['String']>;
  price_not_ends_with?: Maybe<Scalars['String']>;
  reserveInterestRateStrategy?: Maybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not?: Maybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_not_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_contains?: Maybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not_contains?: Maybe<Scalars['Bytes']>;
  baseLTVasCollateral?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_not?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_gt?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_lt?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_gte?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_lte?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_in?: Maybe<Array<Scalars['BigInt']>>;
  baseLTVasCollateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_not?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold_not_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_not?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utilizationRate?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_not?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_gt?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_lt?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_gte?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_lte?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  utilizationRate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  totalLiquidity?: Maybe<Scalars['BigInt']>;
  totalLiquidity_not?: Maybe<Scalars['BigInt']>;
  totalLiquidity_gt?: Maybe<Scalars['BigInt']>;
  totalLiquidity_lt?: Maybe<Scalars['BigInt']>;
  totalLiquidity_gte?: Maybe<Scalars['BigInt']>;
  totalLiquidity_lte?: Maybe<Scalars['BigInt']>;
  totalLiquidity_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_not?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gt?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lt?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gte?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lte?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  availableLiquidity?: Maybe<Scalars['BigInt']>;
  availableLiquidity_not?: Maybe<Scalars['BigInt']>;
  availableLiquidity_gt?: Maybe<Scalars['BigInt']>;
  availableLiquidity_lt?: Maybe<Scalars['BigInt']>;
  availableLiquidity_gte?: Maybe<Scalars['BigInt']>;
  availableLiquidity_lte?: Maybe<Scalars['BigInt']>;
  availableLiquidity_in?: Maybe<Array<Scalars['BigInt']>>;
  availableLiquidity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrows?: Maybe<Scalars['BigInt']>;
  totalBorrows_not?: Maybe<Scalars['BigInt']>;
  totalBorrows_gt?: Maybe<Scalars['BigInt']>;
  totalBorrows_lt?: Maybe<Scalars['BigInt']>;
  totalBorrows_gte?: Maybe<Scalars['BigInt']>;
  totalBorrows_lte?: Maybe<Scalars['BigInt']>;
  totalBorrows_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrows_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsStable?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_not?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_gt?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_lt?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_gte?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_lte?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsStable_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsVariable?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_not?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_gt?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_lt?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_gte?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_lte?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsVariable_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityRate?: Maybe<Scalars['BigInt']>;
  liquidityRate_not?: Maybe<Scalars['BigInt']>;
  liquidityRate_gt?: Maybe<Scalars['BigInt']>;
  liquidityRate_lt?: Maybe<Scalars['BigInt']>;
  liquidityRate_gte?: Maybe<Scalars['BigInt']>;
  liquidityRate_lte?: Maybe<Scalars['BigInt']>;
  liquidityRate_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowRate?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_not?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_gt?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_lt?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_gte?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_lte?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stableBorrowRate?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_not?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_gt?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_lt?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_gte?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_lte?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  stableBorrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityIndex?: Maybe<Scalars['BigInt']>;
  liquidityIndex_not?: Maybe<Scalars['BigInt']>;
  liquidityIndex_gt?: Maybe<Scalars['BigInt']>;
  liquidityIndex_lt?: Maybe<Scalars['BigInt']>;
  liquidityIndex_gte?: Maybe<Scalars['BigInt']>;
  liquidityIndex_lte?: Maybe<Scalars['BigInt']>;
  liquidityIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_not?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_gt?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_lt?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_gte?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_lte?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  aToken?: Maybe<Scalars['String']>;
  aToken_not?: Maybe<Scalars['String']>;
  aToken_gt?: Maybe<Scalars['String']>;
  aToken_lt?: Maybe<Scalars['String']>;
  aToken_gte?: Maybe<Scalars['String']>;
  aToken_lte?: Maybe<Scalars['String']>;
  aToken_in?: Maybe<Array<Scalars['String']>>;
  aToken_not_in?: Maybe<Array<Scalars['String']>>;
  aToken_contains?: Maybe<Scalars['String']>;
  aToken_not_contains?: Maybe<Scalars['String']>;
  aToken_starts_with?: Maybe<Scalars['String']>;
  aToken_not_starts_with?: Maybe<Scalars['String']>;
  aToken_ends_with?: Maybe<Scalars['String']>;
  aToken_not_ends_with?: Maybe<Scalars['String']>;
  lastUpdateTimestamp?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Reserve_OrderBy {
  Id = 'id',
  Pool = 'pool',
  Symbol = 'symbol',
  Name = 'name',
  Decimals = 'decimals',
  UsageAsCollateralEnabled = 'usageAsCollateralEnabled',
  BorrowingEnabled = 'borrowingEnabled',
  StableBorrowRateEnabled = 'stableBorrowRateEnabled',
  IsActive = 'isActive',
  Price = 'price',
  ReserveInterestRateStrategy = 'reserveInterestRateStrategy',
  BaseLtVasCollateral = 'baseLTVasCollateral',
  ReserveLiquidationThreshold = 'reserveLiquidationThreshold',
  ReserveLiquidationBonus = 'reserveLiquidationBonus',
  UtilizationRate = 'utilizationRate',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityAsCollateral = 'totalLiquidityAsCollateral',
  AvailableLiquidity = 'availableLiquidity',
  TotalBorrows = 'totalBorrows',
  TotalBorrowsStable = 'totalBorrowsStable',
  TotalBorrowsVariable = 'totalBorrowsVariable',
  LiquidityRate = 'liquidityRate',
  VariableBorrowRate = 'variableBorrowRate',
  StableBorrowRate = 'stableBorrowRate',
  LiquidityIndex = 'liquidityIndex',
  VariableBorrowIndex = 'variableBorrowIndex',
  AToken = 'aToken',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  UserReserves = 'userReserves',
  DepositHistory = 'depositHistory',
  RedeemUnderlyingHistory = 'redeemUnderlyingHistory',
  BorrowHistory = 'borrowHistory',
  SwapHistory = 'swapHistory',
  RebalanceStableBorrowRateHistory = 'rebalanceStableBorrowRateHistory',
  RepayHistory = 'repayHistory',
  FlashLoanHistory = 'flashLoanHistory',
  LiquidationCallHistory = 'liquidationCallHistory',
  OriginationFeeLiquidationHistory = 'originationFeeLiquidationHistory',
  ParamsHistory = 'paramsHistory',
  ConfigurationHistory = 'configurationHistory',
  Deposits = 'deposits',
}

export type ReserveConfigurationHistoryItem = {
  __typename?: 'ReserveConfigurationHistoryItem';
  id: Scalars['ID'];
  reserve: Reserve;
  usageAsCollateralEnabled: Scalars['Boolean'];
  borrowingEnabled: Scalars['Boolean'];
  stableBorrowRateEnabled: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  reserveInterestRateStrategy: Scalars['Bytes'];
  baseLTVasCollateral: Scalars['BigInt'];
  reserveLiquidationThreshold: Scalars['BigInt'];
  reserveLiquidationBonus: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type ReserveConfigurationHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  usageAsCollateralEnabled?: Maybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_not?: Maybe<Scalars['Boolean']>;
  usageAsCollateralEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  usageAsCollateralEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  borrowingEnabled?: Maybe<Scalars['Boolean']>;
  borrowingEnabled_not?: Maybe<Scalars['Boolean']>;
  borrowingEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  borrowingEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled?: Maybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_not?: Maybe<Scalars['Boolean']>;
  stableBorrowRateEnabled_in?: Maybe<Array<Scalars['Boolean']>>;
  stableBorrowRateEnabled_not_in?: Maybe<Array<Scalars['Boolean']>>;
  isActive?: Maybe<Scalars['Boolean']>;
  isActive_not?: Maybe<Scalars['Boolean']>;
  isActive_in?: Maybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: Maybe<Array<Scalars['Boolean']>>;
  reserveInterestRateStrategy?: Maybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not?: Maybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_not_in?: Maybe<Array<Scalars['Bytes']>>;
  reserveInterestRateStrategy_contains?: Maybe<Scalars['Bytes']>;
  reserveInterestRateStrategy_not_contains?: Maybe<Scalars['Bytes']>;
  baseLTVasCollateral?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_not?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_gt?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_lt?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_gte?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_lte?: Maybe<Scalars['BigInt']>;
  baseLTVasCollateral_in?: Maybe<Array<Scalars['BigInt']>>;
  baseLTVasCollateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_not?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_gte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_lte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationThreshold_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationThreshold_not_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_not?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lt?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_gte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_lte?: Maybe<Scalars['BigInt']>;
  reserveLiquidationBonus_in?: Maybe<Array<Scalars['BigInt']>>;
  reserveLiquidationBonus_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum ReserveConfigurationHistoryItem_OrderBy {
  Id = 'id',
  Reserve = 'reserve',
  UsageAsCollateralEnabled = 'usageAsCollateralEnabled',
  BorrowingEnabled = 'borrowingEnabled',
  StableBorrowRateEnabled = 'stableBorrowRateEnabled',
  IsActive = 'isActive',
  ReserveInterestRateStrategy = 'reserveInterestRateStrategy',
  BaseLtVasCollateral = 'baseLTVasCollateral',
  ReserveLiquidationThreshold = 'reserveLiquidationThreshold',
  ReserveLiquidationBonus = 'reserveLiquidationBonus',
  Timestamp = 'timestamp',
}

export enum ReserveOperationType {
  Deposit = 'Deposit',
  Borrow = 'Borrow',
  RedeemUnderlying = 'RedeemUnderlying',
  Repay = 'Repay',
  LiquidationCall = 'LiquidationCall',
  Swap = 'Swap',
  FlashLoan = 'FlashLoan',
  ReserveUsedAsCollateralEnabled = 'ReserveUsedAsCollateralEnabled',
  ReserveUsedAsCollateralDisabled = 'ReserveUsedAsCollateralDisabled',
}

export type ReserveParamsHistoryItem = {
  __typename?: 'ReserveParamsHistoryItem';
  id: Scalars['ID'];
  reserve: Reserve;
  variableBorrowRate: Scalars['BigInt'];
  variableBorrowIndex: Scalars['BigInt'];
  utilizationRate: Scalars['BigDecimal'];
  stableBorrowRate: Scalars['BigInt'];
  liquidityIndex: Scalars['BigInt'];
  liquidityRate: Scalars['BigInt'];
  totalLiquidity: Scalars['BigInt'];
  totalLiquidityAsCollateral: Scalars['BigInt'];
  availableLiquidity: Scalars['BigInt'];
  totalBorrows: Scalars['BigInt'];
  totalBorrowsVariable: Scalars['BigInt'];
  totalBorrowsStable: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type ReserveParamsHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  variableBorrowRate?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_not?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_gt?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_lt?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_gte?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_lte?: Maybe<Scalars['BigInt']>;
  variableBorrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_not?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_gt?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_lt?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_gte?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_lte?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  utilizationRate?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_not?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_gt?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_lt?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_gte?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_lte?: Maybe<Scalars['BigDecimal']>;
  utilizationRate_in?: Maybe<Array<Scalars['BigDecimal']>>;
  utilizationRate_not_in?: Maybe<Array<Scalars['BigDecimal']>>;
  stableBorrowRate?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_not?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_gt?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_lt?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_gte?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_lte?: Maybe<Scalars['BigInt']>;
  stableBorrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  stableBorrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityIndex?: Maybe<Scalars['BigInt']>;
  liquidityIndex_not?: Maybe<Scalars['BigInt']>;
  liquidityIndex_gt?: Maybe<Scalars['BigInt']>;
  liquidityIndex_lt?: Maybe<Scalars['BigInt']>;
  liquidityIndex_gte?: Maybe<Scalars['BigInt']>;
  liquidityIndex_lte?: Maybe<Scalars['BigInt']>;
  liquidityIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityRate?: Maybe<Scalars['BigInt']>;
  liquidityRate_not?: Maybe<Scalars['BigInt']>;
  liquidityRate_gt?: Maybe<Scalars['BigInt']>;
  liquidityRate_lt?: Maybe<Scalars['BigInt']>;
  liquidityRate_gte?: Maybe<Scalars['BigInt']>;
  liquidityRate_lte?: Maybe<Scalars['BigInt']>;
  liquidityRate_in?: Maybe<Array<Scalars['BigInt']>>;
  liquidityRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidity?: Maybe<Scalars['BigInt']>;
  totalLiquidity_not?: Maybe<Scalars['BigInt']>;
  totalLiquidity_gt?: Maybe<Scalars['BigInt']>;
  totalLiquidity_lt?: Maybe<Scalars['BigInt']>;
  totalLiquidity_gte?: Maybe<Scalars['BigInt']>;
  totalLiquidity_lte?: Maybe<Scalars['BigInt']>;
  totalLiquidity_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_not?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gt?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lt?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_gte?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_lte?: Maybe<Scalars['BigInt']>;
  totalLiquidityAsCollateral_in?: Maybe<Array<Scalars['BigInt']>>;
  totalLiquidityAsCollateral_not_in?: Maybe<Array<Scalars['BigInt']>>;
  availableLiquidity?: Maybe<Scalars['BigInt']>;
  availableLiquidity_not?: Maybe<Scalars['BigInt']>;
  availableLiquidity_gt?: Maybe<Scalars['BigInt']>;
  availableLiquidity_lt?: Maybe<Scalars['BigInt']>;
  availableLiquidity_gte?: Maybe<Scalars['BigInt']>;
  availableLiquidity_lte?: Maybe<Scalars['BigInt']>;
  availableLiquidity_in?: Maybe<Array<Scalars['BigInt']>>;
  availableLiquidity_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrows?: Maybe<Scalars['BigInt']>;
  totalBorrows_not?: Maybe<Scalars['BigInt']>;
  totalBorrows_gt?: Maybe<Scalars['BigInt']>;
  totalBorrows_lt?: Maybe<Scalars['BigInt']>;
  totalBorrows_gte?: Maybe<Scalars['BigInt']>;
  totalBorrows_lte?: Maybe<Scalars['BigInt']>;
  totalBorrows_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrows_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsVariable?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_not?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_gt?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_lt?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_gte?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_lte?: Maybe<Scalars['BigInt']>;
  totalBorrowsVariable_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsVariable_not_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsStable?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_not?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_gt?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_lt?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_gte?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_lte?: Maybe<Scalars['BigInt']>;
  totalBorrowsStable_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrowsStable_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum ReserveParamsHistoryItem_OrderBy {
  Id = 'id',
  Reserve = 'reserve',
  VariableBorrowRate = 'variableBorrowRate',
  VariableBorrowIndex = 'variableBorrowIndex',
  UtilizationRate = 'utilizationRate',
  StableBorrowRate = 'stableBorrowRate',
  LiquidityIndex = 'liquidityIndex',
  LiquidityRate = 'liquidityRate',
  TotalLiquidity = 'totalLiquidity',
  TotalLiquidityAsCollateral = 'totalLiquidityAsCollateral',
  AvailableLiquidity = 'availableLiquidity',
  TotalBorrows = 'totalBorrows',
  TotalBorrowsVariable = 'totalBorrowsVariable',
  TotalBorrowsStable = 'totalBorrowsStable',
  Timestamp = 'timestamp',
}

export type SetUsageAsCollateralInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  usageAsCollateral: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  lendingPoolConfigurationHistoryItem?: Maybe<LendingPoolConfigurationHistoryItem>;
  lendingPoolConfigurationHistoryItems: Array<LendingPoolConfigurationHistoryItem>;
  lendingPoolConfiguration?: Maybe<LendingPoolConfiguration>;
  lendingPoolConfigurations: Array<LendingPoolConfiguration>;
  priceHistoryItem?: Maybe<PriceHistoryItem>;
  priceHistoryItems: Array<PriceHistoryItem>;
  usdEthPriceHistoryItem?: Maybe<UsdEthPriceHistoryItem>;
  usdEthPriceHistoryItems: Array<UsdEthPriceHistoryItem>;
  chainlinkAggregator?: Maybe<ChainlinkAggregator>;
  chainlinkAggregators: Array<ChainlinkAggregator>;
  priceOracleAsset?: Maybe<PriceOracleAsset>;
  priceOracleAssets: Array<PriceOracleAsset>;
  priceOracle?: Maybe<PriceOracle>;
  priceOracles: Array<PriceOracle>;
  atoken?: Maybe<AToken>;
  atokens: Array<AToken>;
  referrer?: Maybe<Referrer>;
  referrers: Array<Referrer>;
  deposit?: Maybe<Deposit>;
  deposits: Array<Deposit>;
  redeemUnderlying?: Maybe<RedeemUnderlying>;
  redeemUnderlyings: Array<RedeemUnderlying>;
  borrow?: Maybe<Borrow>;
  borrows: Array<Borrow>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  rebalanceStableBorrowRate?: Maybe<RebalanceStableBorrowRate>;
  rebalanceStableBorrowRates: Array<RebalanceStableBorrowRate>;
  repay?: Maybe<Repay>;
  repays: Array<Repay>;
  flashLoan?: Maybe<FlashLoan>;
  flashLoans: Array<FlashLoan>;
  liquidationCall?: Maybe<LiquidationCall>;
  liquidationCalls: Array<LiquidationCall>;
  originationFeeLiquidation?: Maybe<OriginationFeeLiquidation>;
  originationFeeLiquidations: Array<OriginationFeeLiquidation>;
  reserveConfigurationHistoryItem?: Maybe<ReserveConfigurationHistoryItem>;
  reserveConfigurationHistoryItems: Array<ReserveConfigurationHistoryItem>;
  reserveParamsHistoryItem?: Maybe<ReserveParamsHistoryItem>;
  reserveParamsHistoryItems: Array<ReserveParamsHistoryItem>;
  reserve?: Maybe<Reserve>;
  reserves: Array<Reserve>;
  atokenBalanceHistoryItem?: Maybe<ATokenBalanceHistoryItem>;
  atokenBalanceHistoryItems: Array<ATokenBalanceHistoryItem>;
  userBorrowHistoryItem?: Maybe<UserBorrowHistoryItem>;
  userBorrowHistoryItems: Array<UserBorrowHistoryItem>;
  userReserve?: Maybe<UserReserve>;
  userReserves: Array<UserReserve>;
  user?: Maybe<User>;
  users: Array<User>;
  lendingPoolAddressProvider?: Maybe<LendingPoolAddressProvider>;
  lendingPoolAddressProviders: Array<LendingPoolAddressProvider>;
};

export type SubscriptionLendingPoolConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionLendingPoolConfigurationHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolConfigurationHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolConfigurationHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionLendingPoolConfigurationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionLendingPoolConfigurationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolConfiguration_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolConfiguration_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionPriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionPriceHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionUsdEthPriceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionUsdEthPriceHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UsdEthPriceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UsdEthPriceHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionChainlinkAggregatorArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionChainlinkAggregatorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ChainlinkAggregator_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ChainlinkAggregator_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionPriceOracleAssetArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionPriceOracleAssetsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceOracleAsset_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceOracleAsset_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionPriceOracleArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionPriceOraclesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PriceOracle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PriceOracle_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionAtokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionAtokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<AToken_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<AToken_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionReferrerArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionReferrersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Referrer_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Referrer_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionDepositArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionDepositsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionRedeemUnderlyingArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionRedeemUnderlyingsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemUnderlying_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemUnderlying_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionBorrowArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionBorrowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionSwapArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionSwapsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionRebalanceStableBorrowRateArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionRebalanceStableBorrowRatesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RebalanceStableBorrowRate_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionRepayArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionRepaysArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Repay_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Repay_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionFlashLoanArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionFlashLoansArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<FlashLoan_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<FlashLoan_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionLiquidationCallArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionLiquidationCallsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidationCall_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidationCall_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionOriginationFeeLiquidationArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionOriginationFeeLiquidationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OriginationFeeLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OriginationFeeLiquidation_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionReserveConfigurationHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionReserveConfigurationHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveConfigurationHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveConfigurationHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionReserveParamsHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionReserveParamsHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ReserveParamsHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ReserveParamsHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionReserveArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Reserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Reserve_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionAtokenBalanceHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionAtokenBalanceHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ATokenBalanceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ATokenBalanceHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserBorrowHistoryItemArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserBorrowHistoryItemsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserBorrowHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserBorrowHistoryItem_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserReserveArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserReserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserReserve_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionUserArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<User_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<User_Filter>;
  block?: Maybe<Block_Height>;
};

export type SubscriptionLendingPoolAddressProviderArgs = {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
};

export type SubscriptionLendingPoolAddressProvidersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LendingPoolAddressProvider_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LendingPoolAddressProvider_Filter>;
  block?: Maybe<Block_Height>;
};

export type Swap = {
  __typename?: 'Swap';
  id: Scalars['ID'];
  pool: LendingPoolConfiguration;
  user: User;
  reserve: Reserve;
  userReserve: UserReserve;
  borrowRateFrom: Scalars['BigInt'];
  borrowRateModeFrom: BorrowRateMode;
  borrowRateTo: Scalars['BigInt'];
  borrowRateModeTo: BorrowRateMode;
  accruedBorrowInterest: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type Swap_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  pool?: Maybe<Scalars['String']>;
  pool_not?: Maybe<Scalars['String']>;
  pool_gt?: Maybe<Scalars['String']>;
  pool_lt?: Maybe<Scalars['String']>;
  pool_gte?: Maybe<Scalars['String']>;
  pool_lte?: Maybe<Scalars['String']>;
  pool_in?: Maybe<Array<Scalars['String']>>;
  pool_not_in?: Maybe<Array<Scalars['String']>>;
  pool_contains?: Maybe<Scalars['String']>;
  pool_not_contains?: Maybe<Scalars['String']>;
  pool_starts_with?: Maybe<Scalars['String']>;
  pool_not_starts_with?: Maybe<Scalars['String']>;
  pool_ends_with?: Maybe<Scalars['String']>;
  pool_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  borrowRateFrom?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_not?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_gt?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_lt?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_gte?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_lte?: Maybe<Scalars['BigInt']>;
  borrowRateFrom_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateFrom_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateModeFrom?: Maybe<BorrowRateMode>;
  borrowRateModeFrom_not?: Maybe<BorrowRateMode>;
  borrowRateTo?: Maybe<Scalars['BigInt']>;
  borrowRateTo_not?: Maybe<Scalars['BigInt']>;
  borrowRateTo_gt?: Maybe<Scalars['BigInt']>;
  borrowRateTo_lt?: Maybe<Scalars['BigInt']>;
  borrowRateTo_gte?: Maybe<Scalars['BigInt']>;
  borrowRateTo_lte?: Maybe<Scalars['BigInt']>;
  borrowRateTo_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateTo_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateModeTo?: Maybe<BorrowRateMode>;
  borrowRateModeTo_not?: Maybe<BorrowRateMode>;
  accruedBorrowInterest?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_not?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_gt?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_lt?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_gte?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_lte?: Maybe<Scalars['BigInt']>;
  accruedBorrowInterest_in?: Maybe<Array<Scalars['BigInt']>>;
  accruedBorrowInterest_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum Swap_OrderBy {
  Id = 'id',
  Pool = 'pool',
  User = 'user',
  Reserve = 'reserve',
  UserReserve = 'userReserve',
  BorrowRateFrom = 'borrowRateFrom',
  BorrowRateModeFrom = 'borrowRateModeFrom',
  BorrowRateTo = 'borrowRateTo',
  BorrowRateModeTo = 'borrowRateModeTo',
  AccruedBorrowInterest = 'accruedBorrowInterest',
  Timestamp = 'timestamp',
}

export type TransferFromInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  amount: Scalars['String'];
  onBehalfOf?: Maybe<Scalars['String']>;
  referralCode?: Maybe<Scalars['String']>;
};

export type UsdEthPriceHistoryItem = {
  __typename?: 'UsdEthPriceHistoryItem';
  id: Scalars['ID'];
  oracle: PriceOracle;
  price: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type UsdEthPriceHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  oracle?: Maybe<Scalars['String']>;
  oracle_not?: Maybe<Scalars['String']>;
  oracle_gt?: Maybe<Scalars['String']>;
  oracle_lt?: Maybe<Scalars['String']>;
  oracle_gte?: Maybe<Scalars['String']>;
  oracle_lte?: Maybe<Scalars['String']>;
  oracle_in?: Maybe<Array<Scalars['String']>>;
  oracle_not_in?: Maybe<Array<Scalars['String']>>;
  oracle_contains?: Maybe<Scalars['String']>;
  oracle_not_contains?: Maybe<Scalars['String']>;
  oracle_starts_with?: Maybe<Scalars['String']>;
  oracle_not_starts_with?: Maybe<Scalars['String']>;
  oracle_ends_with?: Maybe<Scalars['String']>;
  oracle_not_ends_with?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigInt']>;
  price_not?: Maybe<Scalars['BigInt']>;
  price_gt?: Maybe<Scalars['BigInt']>;
  price_lt?: Maybe<Scalars['BigInt']>;
  price_gte?: Maybe<Scalars['BigInt']>;
  price_lte?: Maybe<Scalars['BigInt']>;
  price_in?: Maybe<Array<Scalars['BigInt']>>;
  price_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum UsdEthPriceHistoryItem_OrderBy {
  Id = 'id',
  Oracle = 'oracle',
  Price = 'price',
  Timestamp = 'timestamp',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  reserves: Array<UserReserve>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  liquidationCallHistory: Array<LiquidationCall>;
  originationFeeLiquidationHistory: Array<OriginationFeeLiquidation>;
};

export type UserReservesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserReserve_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserReserve_Filter>;
};

export type UserDepositHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
};

export type UserRedeemUnderlyingHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemUnderlying_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemUnderlying_Filter>;
};

export type UserBorrowHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
};

export type UserSwapHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type UserRebalanceStableBorrowRateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RebalanceStableBorrowRate_Filter>;
};

export type UserRepayHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Repay_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Repay_Filter>;
};

export type UserLiquidationCallHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidationCall_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidationCall_Filter>;
};

export type UserOriginationFeeLiquidationHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OriginationFeeLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OriginationFeeLiquidation_Filter>;
};

export type User_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
};

export enum User_OrderBy {
  Id = 'id',
  Reserves = 'reserves',
  DepositHistory = 'depositHistory',
  RedeemUnderlyingHistory = 'redeemUnderlyingHistory',
  BorrowHistory = 'borrowHistory',
  SwapHistory = 'swapHistory',
  RebalanceStableBorrowRateHistory = 'rebalanceStableBorrowRateHistory',
  RepayHistory = 'repayHistory',
  LiquidationCallHistory = 'liquidationCallHistory',
  OriginationFeeLiquidationHistory = 'originationFeeLiquidationHistory',
}

export type UserBorrowHistoryItem = {
  __typename?: 'UserBorrowHistoryItem';
  id: Scalars['ID'];
  userReserve: UserReserve;
  totalBorrows: Scalars['BigInt'];
  borrowRate: Scalars['BigInt'];
  borrowRateMode: BorrowRateMode;
  originationFee: Scalars['BigInt'];
  timestamp: Scalars['Int'];
};

export type UserBorrowHistoryItem_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  userReserve?: Maybe<Scalars['String']>;
  userReserve_not?: Maybe<Scalars['String']>;
  userReserve_gt?: Maybe<Scalars['String']>;
  userReserve_lt?: Maybe<Scalars['String']>;
  userReserve_gte?: Maybe<Scalars['String']>;
  userReserve_lte?: Maybe<Scalars['String']>;
  userReserve_in?: Maybe<Array<Scalars['String']>>;
  userReserve_not_in?: Maybe<Array<Scalars['String']>>;
  userReserve_contains?: Maybe<Scalars['String']>;
  userReserve_not_contains?: Maybe<Scalars['String']>;
  userReserve_starts_with?: Maybe<Scalars['String']>;
  userReserve_not_starts_with?: Maybe<Scalars['String']>;
  userReserve_ends_with?: Maybe<Scalars['String']>;
  userReserve_not_ends_with?: Maybe<Scalars['String']>;
  totalBorrows?: Maybe<Scalars['BigInt']>;
  totalBorrows_not?: Maybe<Scalars['BigInt']>;
  totalBorrows_gt?: Maybe<Scalars['BigInt']>;
  totalBorrows_lt?: Maybe<Scalars['BigInt']>;
  totalBorrows_gte?: Maybe<Scalars['BigInt']>;
  totalBorrows_lte?: Maybe<Scalars['BigInt']>;
  totalBorrows_in?: Maybe<Array<Scalars['BigInt']>>;
  totalBorrows_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRate?: Maybe<Scalars['BigInt']>;
  borrowRate_not?: Maybe<Scalars['BigInt']>;
  borrowRate_gt?: Maybe<Scalars['BigInt']>;
  borrowRate_lt?: Maybe<Scalars['BigInt']>;
  borrowRate_gte?: Maybe<Scalars['BigInt']>;
  borrowRate_lte?: Maybe<Scalars['BigInt']>;
  borrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateMode?: Maybe<BorrowRateMode>;
  borrowRateMode_not?: Maybe<BorrowRateMode>;
  originationFee?: Maybe<Scalars['BigInt']>;
  originationFee_not?: Maybe<Scalars['BigInt']>;
  originationFee_gt?: Maybe<Scalars['BigInt']>;
  originationFee_lt?: Maybe<Scalars['BigInt']>;
  originationFee_gte?: Maybe<Scalars['BigInt']>;
  originationFee_lte?: Maybe<Scalars['BigInt']>;
  originationFee_in?: Maybe<Array<Scalars['BigInt']>>;
  originationFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['Int']>;
  timestamp_not?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['Int']>;
  timestamp_lt?: Maybe<Scalars['Int']>;
  timestamp_gte?: Maybe<Scalars['Int']>;
  timestamp_lte?: Maybe<Scalars['Int']>;
  timestamp_in?: Maybe<Array<Scalars['Int']>>;
  timestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum UserBorrowHistoryItem_OrderBy {
  Id = 'id',
  UserReserve = 'userReserve',
  TotalBorrows = 'totalBorrows',
  BorrowRate = 'borrowRate',
  BorrowRateMode = 'borrowRateMode',
  OriginationFee = 'originationFee',
  Timestamp = 'timestamp',
}

export type UserReserve = {
  __typename?: 'UserReserve';
  id: Scalars['ID'];
  reserve: Reserve;
  user: User;
  usageAsCollateralEnabledOnUser: Scalars['Boolean'];
  userBalanceIndex: Scalars['BigInt'];
  principalATokenBalance: Scalars['BigInt'];
  redirectedBalance: Scalars['BigInt'];
  interestRedirectionAddress: Scalars['Bytes'];
  interestRedirectionAllowance: Scalars['Bytes'];
  principalBorrows: Scalars['BigInt'];
  borrowRate: Scalars['BigInt'];
  borrowRateMode: BorrowRateMode;
  variableBorrowIndex: Scalars['BigInt'];
  originationFee: Scalars['BigInt'];
  lastUpdateTimestamp: Scalars['Int'];
  aTokenBalanceHistory: Array<ATokenBalanceHistoryItem>;
  borrowStateHistory: Array<UserBorrowHistoryItem>;
  depositHistory: Array<Deposit>;
  redeemUnderlyingHistory: Array<RedeemUnderlying>;
  borrowHistory: Array<Borrow>;
  swapHistory: Array<Swap>;
  rebalanceStableBorrowRateHistory: Array<RebalanceStableBorrowRate>;
  repayHistory: Array<Repay>;
  liquidationCallHistory: Array<LiquidationCall>;
  originationFeeLiquidationHistory: Array<OriginationFeeLiquidation>;
};

export type UserReserveATokenBalanceHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ATokenBalanceHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<ATokenBalanceHistoryItem_Filter>;
};

export type UserReserveBorrowStateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<UserBorrowHistoryItem_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<UserBorrowHistoryItem_Filter>;
};

export type UserReserveDepositHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Deposit_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Deposit_Filter>;
};

export type UserReserveRedeemUnderlyingHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RedeemUnderlying_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RedeemUnderlying_Filter>;
};

export type UserReserveBorrowHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Borrow_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Borrow_Filter>;
};

export type UserReserveSwapHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
};

export type UserReserveRebalanceStableBorrowRateHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RebalanceStableBorrowRate_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<RebalanceStableBorrowRate_Filter>;
};

export type UserReserveRepayHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Repay_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Repay_Filter>;
};

export type UserReserveLiquidationCallHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<LiquidationCall_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<LiquidationCall_Filter>;
};

export type UserReserveOriginationFeeLiquidationHistoryArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<OriginationFeeLiquidation_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<OriginationFeeLiquidation_Filter>;
};

export type UserReserve_Filter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  reserve?: Maybe<Scalars['String']>;
  reserve_not?: Maybe<Scalars['String']>;
  reserve_gt?: Maybe<Scalars['String']>;
  reserve_lt?: Maybe<Scalars['String']>;
  reserve_gte?: Maybe<Scalars['String']>;
  reserve_lte?: Maybe<Scalars['String']>;
  reserve_in?: Maybe<Array<Scalars['String']>>;
  reserve_not_in?: Maybe<Array<Scalars['String']>>;
  reserve_contains?: Maybe<Scalars['String']>;
  reserve_not_contains?: Maybe<Scalars['String']>;
  reserve_starts_with?: Maybe<Scalars['String']>;
  reserve_not_starts_with?: Maybe<Scalars['String']>;
  reserve_ends_with?: Maybe<Scalars['String']>;
  reserve_not_ends_with?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['String']>;
  user_not?: Maybe<Scalars['String']>;
  user_gt?: Maybe<Scalars['String']>;
  user_lt?: Maybe<Scalars['String']>;
  user_gte?: Maybe<Scalars['String']>;
  user_lte?: Maybe<Scalars['String']>;
  user_in?: Maybe<Array<Scalars['String']>>;
  user_not_in?: Maybe<Array<Scalars['String']>>;
  user_contains?: Maybe<Scalars['String']>;
  user_not_contains?: Maybe<Scalars['String']>;
  user_starts_with?: Maybe<Scalars['String']>;
  user_not_starts_with?: Maybe<Scalars['String']>;
  user_ends_with?: Maybe<Scalars['String']>;
  user_not_ends_with?: Maybe<Scalars['String']>;
  usageAsCollateralEnabledOnUser?: Maybe<Scalars['Boolean']>;
  usageAsCollateralEnabledOnUser_not?: Maybe<Scalars['Boolean']>;
  usageAsCollateralEnabledOnUser_in?: Maybe<Array<Scalars['Boolean']>>;
  usageAsCollateralEnabledOnUser_not_in?: Maybe<Array<Scalars['Boolean']>>;
  userBalanceIndex?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_not?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_gt?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_lt?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_gte?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_lte?: Maybe<Scalars['BigInt']>;
  userBalanceIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  userBalanceIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  principalATokenBalance?: Maybe<Scalars['BigInt']>;
  principalATokenBalance_not?: Maybe<Scalars['BigInt']>;
  principalATokenBalance_gt?: Maybe<Scalars['BigInt']>;
  principalATokenBalance_lt?: Maybe<Scalars['BigInt']>;
  principalATokenBalance_gte?: Maybe<Scalars['BigInt']>;
  principalATokenBalance_lte?: Maybe<Scalars['BigInt']>;
  principalATokenBalance_in?: Maybe<Array<Scalars['BigInt']>>;
  principalATokenBalance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  redirectedBalance?: Maybe<Scalars['BigInt']>;
  redirectedBalance_not?: Maybe<Scalars['BigInt']>;
  redirectedBalance_gt?: Maybe<Scalars['BigInt']>;
  redirectedBalance_lt?: Maybe<Scalars['BigInt']>;
  redirectedBalance_gte?: Maybe<Scalars['BigInt']>;
  redirectedBalance_lte?: Maybe<Scalars['BigInt']>;
  redirectedBalance_in?: Maybe<Array<Scalars['BigInt']>>;
  redirectedBalance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  interestRedirectionAddress?: Maybe<Scalars['Bytes']>;
  interestRedirectionAddress_not?: Maybe<Scalars['Bytes']>;
  interestRedirectionAddress_in?: Maybe<Array<Scalars['Bytes']>>;
  interestRedirectionAddress_not_in?: Maybe<Array<Scalars['Bytes']>>;
  interestRedirectionAddress_contains?: Maybe<Scalars['Bytes']>;
  interestRedirectionAddress_not_contains?: Maybe<Scalars['Bytes']>;
  interestRedirectionAllowance?: Maybe<Scalars['Bytes']>;
  interestRedirectionAllowance_not?: Maybe<Scalars['Bytes']>;
  interestRedirectionAllowance_in?: Maybe<Array<Scalars['Bytes']>>;
  interestRedirectionAllowance_not_in?: Maybe<Array<Scalars['Bytes']>>;
  interestRedirectionAllowance_contains?: Maybe<Scalars['Bytes']>;
  interestRedirectionAllowance_not_contains?: Maybe<Scalars['Bytes']>;
  principalBorrows?: Maybe<Scalars['BigInt']>;
  principalBorrows_not?: Maybe<Scalars['BigInt']>;
  principalBorrows_gt?: Maybe<Scalars['BigInt']>;
  principalBorrows_lt?: Maybe<Scalars['BigInt']>;
  principalBorrows_gte?: Maybe<Scalars['BigInt']>;
  principalBorrows_lte?: Maybe<Scalars['BigInt']>;
  principalBorrows_in?: Maybe<Array<Scalars['BigInt']>>;
  principalBorrows_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRate?: Maybe<Scalars['BigInt']>;
  borrowRate_not?: Maybe<Scalars['BigInt']>;
  borrowRate_gt?: Maybe<Scalars['BigInt']>;
  borrowRate_lt?: Maybe<Scalars['BigInt']>;
  borrowRate_gte?: Maybe<Scalars['BigInt']>;
  borrowRate_lte?: Maybe<Scalars['BigInt']>;
  borrowRate_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRate_not_in?: Maybe<Array<Scalars['BigInt']>>;
  borrowRateMode?: Maybe<BorrowRateMode>;
  borrowRateMode_not?: Maybe<BorrowRateMode>;
  variableBorrowIndex?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_not?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_gt?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_lt?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_gte?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_lte?: Maybe<Scalars['BigInt']>;
  variableBorrowIndex_in?: Maybe<Array<Scalars['BigInt']>>;
  variableBorrowIndex_not_in?: Maybe<Array<Scalars['BigInt']>>;
  originationFee?: Maybe<Scalars['BigInt']>;
  originationFee_not?: Maybe<Scalars['BigInt']>;
  originationFee_gt?: Maybe<Scalars['BigInt']>;
  originationFee_lt?: Maybe<Scalars['BigInt']>;
  originationFee_gte?: Maybe<Scalars['BigInt']>;
  originationFee_lte?: Maybe<Scalars['BigInt']>;
  originationFee_in?: Maybe<Array<Scalars['BigInt']>>;
  originationFee_not_in?: Maybe<Array<Scalars['BigInt']>>;
  lastUpdateTimestamp?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_not?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lt?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_gte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_lte?: Maybe<Scalars['Int']>;
  lastUpdateTimestamp_in?: Maybe<Array<Scalars['Int']>>;
  lastUpdateTimestamp_not_in?: Maybe<Array<Scalars['Int']>>;
};

export enum UserReserve_OrderBy {
  Id = 'id',
  Reserve = 'reserve',
  User = 'user',
  UsageAsCollateralEnabledOnUser = 'usageAsCollateralEnabledOnUser',
  UserBalanceIndex = 'userBalanceIndex',
  PrincipalATokenBalance = 'principalATokenBalance',
  RedirectedBalance = 'redirectedBalance',
  InterestRedirectionAddress = 'interestRedirectionAddress',
  InterestRedirectionAllowance = 'interestRedirectionAllowance',
  PrincipalBorrows = 'principalBorrows',
  BorrowRate = 'borrowRate',
  BorrowRateMode = 'borrowRateMode',
  VariableBorrowIndex = 'variableBorrowIndex',
  OriginationFee = 'originationFee',
  LastUpdateTimestamp = 'lastUpdateTimestamp',
  ATokenBalanceHistory = 'aTokenBalanceHistory',
  BorrowStateHistory = 'borrowStateHistory',
  DepositHistory = 'depositHistory',
  RedeemUnderlyingHistory = 'redeemUnderlyingHistory',
  BorrowHistory = 'borrowHistory',
  SwapHistory = 'swapHistory',
  RebalanceStableBorrowRateHistory = 'rebalanceStableBorrowRateHistory',
  RepayHistory = 'repayHistory',
  LiquidationCallHistory = 'liquidationCallHistory',
  OriginationFeeLiquidationHistory = 'originationFeeLiquidationHistory',
}

export type LiquidationCallMutationVariables = {
  data: LiquidationCallInput;
};

export type LiquidationCallMutation = { __typename?: 'Mutation' } & {
  liquidationCall: Array<
    { __typename?: 'EthereumTransactionModelExtended' } & Pick<
      EthereumTransactionModelExtended,
      'txType'
    > & {
        tx: { __typename?: 'EthereumTransactionModel' } & Pick<
          EthereumTransactionModel,
          'from' | 'to' | 'gas' | 'data' | 'value'
        >;
      }
  >;
};

export type LiquidatorsQueryVariables = {};

export type LiquidatorsQuery = { __typename?: 'Query' } & {
  reserves: Array<
    { __typename?: 'Reserve' } & Pick<
      Reserve,
      | 'id'
      | 'name'
      | 'symbol'
      | 'decimals'
      | 'isActive'
      | 'usageAsCollateralEnabled'
      | 'borrowingEnabled'
      | 'stableBorrowRateEnabled'
      | 'baseLTVasCollateral'
      | 'liquidityIndex'
      | 'reserveLiquidationThreshold'
      | 'variableBorrowIndex'
      | 'availableLiquidity'
      | 'stableBorrowRate'
      | 'liquidityRate'
      | 'totalBorrows'
      | 'totalBorrowsStable'
      | 'totalBorrowsVariable'
      | 'totalLiquidity'
      | 'utilizationRate'
      | 'variableBorrowRate'
      | 'lastUpdateTimestamp'
    > & {
        aToken: { __typename?: 'AToken' } & Pick<AToken, 'id'>;
        price: { __typename?: 'PriceOracleAsset' } & Pick<PriceOracleAsset, 'priceInEth'>;
      }
  >;
  userReserves: Array<
    { __typename?: 'UserReserve' } & Pick<UserReserve, 'principalBorrows'> & {
        reserve: { __typename?: 'Reserve' } & Pick<Reserve, 'id' | 'symbol'>;
        user: { __typename?: 'User' } & Pick<User, 'id'> & {
            reserves: Array<
              { __typename?: 'UserReserve' } & Pick<
                UserReserve,
                | 'principalATokenBalance'
                | 'userBalanceIndex'
                | 'redirectedBalance'
                | 'interestRedirectionAddress'
                | 'usageAsCollateralEnabledOnUser'
                | 'borrowRate'
                | 'borrowRateMode'
                | 'originationFee'
                | 'principalBorrows'
                | 'variableBorrowIndex'
                | 'lastUpdateTimestamp'
              > & {
                  reserve: { __typename?: 'Reserve' } & Pick<
                    Reserve,
                    'id' | 'name' | 'symbol' | 'decimals' | 'liquidityRate' | 'lastUpdateTimestamp'
                  > & { aToken: { __typename?: 'AToken' } & Pick<AToken, 'id'> };
                }
            >;
          };
      }
  >;
};

export const LiquidationCallDocument = gql`
  mutation LiquidationCall($data: LiquidationCallInput!) {
    liquidationCall(data: $data) {
      tx {
        from
        to
        gas
        data
        value
      }
      txType
    }
  }
`;

/**
 * __useLiquidationCallMutation__
 *
 * To run a mutation, you first call `useLiquidationCallMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLiquidationCallMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [liquidationCallMutation, { data, loading, error }] = useLiquidationCallMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLiquidationCallMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LiquidationCallMutation,
    LiquidationCallMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<LiquidationCallMutation, LiquidationCallMutationVariables>(
    LiquidationCallDocument,
    baseOptions
  );
}
export type LiquidationCallMutationHookResult = ReturnType<typeof useLiquidationCallMutation>;
export type LiquidationCallMutationResult = ApolloReactCommon.MutationResult<
  LiquidationCallMutation
>;
export type LiquidationCallMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LiquidationCallMutation,
  LiquidationCallMutationVariables
>;
export const LiquidatorsDocument = gql`
  query Liquidators {
    reserves {
      id
      name
      symbol
      decimals
      isActive
      usageAsCollateralEnabled
      borrowingEnabled
      stableBorrowRateEnabled
      baseLTVasCollateral
      liquidityIndex
      reserveLiquidationThreshold
      variableBorrowIndex
      aToken {
        id
      }
      availableLiquidity
      stableBorrowRate
      liquidityRate
      totalBorrows
      totalBorrowsStable
      totalBorrowsVariable
      totalLiquidity
      utilizationRate
      variableBorrowRate
      price {
        priceInEth
      }
      lastUpdateTimestamp
    }
    userReserves(where: { principalBorrows_gt: 0 }, first: 999) {
      principalBorrows
      reserve {
        id
        symbol
      }
      user {
        id
        reserves(where: { principalATokenBalance_gt: 0 }) {
          principalATokenBalance
          userBalanceIndex
          redirectedBalance
          interestRedirectionAddress
          reserve {
            id
            name
            symbol
            decimals
            liquidityRate
            lastUpdateTimestamp
            aToken {
              id
            }
          }
          usageAsCollateralEnabledOnUser
          borrowRate
          borrowRateMode
          originationFee
          principalBorrows
          variableBorrowIndex
          lastUpdateTimestamp
        }
      }
    }
  }
`;

/**
 * __useLiquidatorsQuery__
 *
 * To run a query within a React component, call `useLiquidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiquidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiquidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLiquidatorsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<LiquidatorsQuery, LiquidatorsQueryVariables>
) {
  return ApolloReactHooks.useQuery<LiquidatorsQuery, LiquidatorsQueryVariables>(
    LiquidatorsDocument,
    baseOptions
  );
}
export function useLiquidatorsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LiquidatorsQuery, LiquidatorsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<LiquidatorsQuery, LiquidatorsQueryVariables>(
    LiquidatorsDocument,
    baseOptions
  );
}
export type LiquidatorsQueryHookResult = ReturnType<typeof useLiquidatorsQuery>;
export type LiquidatorsLazyQueryHookResult = ReturnType<typeof useLiquidatorsLazyQuery>;
export type LiquidatorsQueryResult = ApolloReactCommon.QueryResult<
  LiquidatorsQuery,
  LiquidatorsQueryVariables
>;
