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
};

export type ApproveInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
};

export type Atoken = {
  __typename?: 'Atoken';
  id: Scalars['String'];
};

export type BorrowInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  amount: Scalars['String'];
  onBehalfOf?: Maybe<Scalars['String']>;
  interestRateMode: InterestRate;
  referralCode?: Maybe<Scalars['String']>;
};

export enum ECurrencyType {
  StableCurrency = 'StableCurrency',
  Other = 'Other',
}

export type EthereumBlockModel = {
  __typename?: 'EthereumBlockModel';
  number: Scalars['Float'];
  timestamp: Scalars['Float'];
};

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

export enum InterestRate {
  None = 'None',
  Stable = 'Stable',
  Variable = 'Variable',
}

export type InterestRatesModel = {
  __typename?: 'InterestRatesModel';
  liquidityRate: Scalars['String'];
  variableBorrowRate: Scalars['String'];
  stableBorrowRate: Scalars['String'];
  timestamp: Scalars['Float'];
  blockNumber: Scalars['Float'];
};

export type InterestRatesUpdatesModel = {
  __typename?: 'InterestRatesUpdatesModel';
  reserve: Scalars['String'];
  symbol: Scalars['String'];
  updates: Array<InterestRatesModel>;
};

export type LiquidationCallInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  collateralReserve: Scalars['String'];
  liquidatedUser: Scalars['String'];
  purchaseAmount: Scalars['String'];
  getAToken?: Maybe<Scalars['Boolean']>;
};

export type LiquidationModel = {
  __typename?: 'LiquidationModel';
  principalBorrows: Scalars['String'];
  reserve: LiquidationReserveModel;
  user: UserLiquidationModel;
};

export type LiquidationReserveModel = {
  __typename?: 'LiquidationReserveModel';
  id: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['Float'];
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

export type Query = {
  __typename?: 'Query';
  ethUsdPrice: Scalars['String'];
  reserves: Array<ReserveModel>;
  interestRatesHistory: Array<InterestRatesUpdatesModel>;
  user: UserModel;
  currentEthereumBlock: EthereumBlockModel;
  balanceOf: UserBalanceModel;
  liquidation: Array<LiquidationModel>;
};

export type QueryUserArgs = {
  userAddress: Scalars['String'];
};

export type QueryBalanceOfArgs = {
  userAddress: Scalars['String'];
  token: Scalars['String'];
};

export type RedeemInput = {
  userAddress: Scalars['String'];
  aToken: Scalars['String'];
  amount: Scalars['String'];
};

export type ReserveModel = {
  __typename?: 'ReserveModel';
  symbol: Scalars['String'];
  name: Scalars['String'];
  uiColor: Scalars['String'];
  currencyType: ECurrencyType;
  decimals: Scalars['Float'];
  address: Scalars['String'];
  usageAsCollateralEnabled: Scalars['Boolean'];
  borrowingEnabled: Scalars['Boolean'];
  stableBorrowRateEnabled: Scalars['Boolean'];
  isActive: Scalars['Boolean'];
  priceInEth: Scalars['String'];
  baseLTVasCollateral: Scalars['String'];
  reserveLiquidationThreshold: Scalars['String'];
  utilizationRate: Scalars['String'];
  totalLiquidity: Scalars['String'];
  availableLiquidity: Scalars['String'];
  totalBorrows: Scalars['String'];
  totalBorrowsStable: Scalars['String'];
  totalBorrowsVariable: Scalars['String'];
  liquidityRate: Scalars['String'];
  variableBorrowRate: Scalars['String'];
  stableBorrowRate: Scalars['String'];
  liquidityIndex: Scalars['String'];
  variableBorrowIndex: Scalars['String'];
  aTokenAddress: Scalars['String'];
  aTokenInitialExchangeRate: Scalars['String'];
  lastUpdateTimestamp: Scalars['Float'];
};

export type SetUsageAsCollateralInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  usageAsCollateral: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  interestRatesHistoryUpdate: InterestRatesUpdatesModel;
  reservesUpdate: ReserveModel;
  userPositionUpdate: UserModel;
  incomingBlockUpdate: EthereumBlockModel;
};

export type SubscriptionUserPositionUpdateArgs = {
  userAddress: Scalars['String'];
};

export type TransferFromInput = {
  userAddress: Scalars['String'];
  reserve: Scalars['String'];
  amount: Scalars['String'];
  onBehalfOf?: Maybe<Scalars['String']>;
  referralCode?: Maybe<Scalars['String']>;
};

export type UserBalanceModel = {
  __typename?: 'UserBalanceModel';
  userAddress: Scalars['String'];
  token: Scalars['String'];
  balance: Scalars['String'];
};

export type UserLiquidationModel = {
  __typename?: 'UserLiquidationModel';
  id: Scalars['String'];
  reservesData: Array<UserLiquidationReservesModel>;
  totalLiquidityETH: Scalars['String'];
  totalLiquidityUSD: Scalars['String'];
  totalCollateralETH: Scalars['String'];
  totalCollateralUSD: Scalars['String'];
  totalFeesETH: Scalars['String'];
  totalFeesUSD: Scalars['String'];
  totalBorrowsETH: Scalars['String'];
  totalBorrowsUSD: Scalars['String'];
  totalBorrowsWithFeesETH: Scalars['String'];
  totalBorrowsWithFeesUSD: Scalars['String'];
  availableBorrowsETH: Scalars['String'];
  currentLoanToValue: Scalars['String'];
  currentLiquidationThreshold: Scalars['String'];
  maxAmountToWithdrawInEth: Scalars['String'];
  healthFactor: Scalars['String'];
};

export type UserLiquidationReserveModel = {
  __typename?: 'UserLiquidationReserveModel';
  id: Scalars['String'];
  symbol: Scalars['String'];
  decimals: Scalars['Float'];
  name: Scalars['String'];
  liquidityRate: Scalars['String'];
  usageAsCollateralEnabled: Scalars['Boolean'];
  lastUpdateTimestamp: Scalars['Float'];
  aToken: Atoken;
};

export type UserLiquidationReservesModel = {
  __typename?: 'UserLiquidationReservesModel';
  principalATokenBalance: Scalars['String'];
  userBalanceIndex: Scalars['String'];
  redirectedBalance: Scalars['String'];
  interestRedirectionAddress: Scalars['String'];
  usageAsCollateralEnabledOnUser: Scalars['Boolean'];
  reserve: UserLiquidationReserveModel;
  borrowRate: Scalars['String'];
  borrowRateMode: Scalars['String'];
  originationFee: Scalars['String'];
  principalBorrows: Scalars['String'];
  variableBorrowIndex: Scalars['String'];
  lastUpdateTimestamp: Scalars['Float'];
};

export type UserModel = {
  __typename?: 'UserModel';
  userAddress: Scalars['String'];
  reservesData: Array<UserReserveModel>;
};

export type UserReserveModel = {
  __typename?: 'UserReserveModel';
  address: Scalars['String'];
  symbol: Scalars['String'];
  uiColor: Scalars['String'];
  decimals: Scalars['Float'];
  name: Scalars['String'];
  usageAsCollateralEnabledOnUser: Scalars['Boolean'];
  currentATokenBalance: Scalars['String'];
  currentPrincipalDeposits: Scalars['String'];
  principalBorrows: Scalars['String'];
  originationFee: Scalars['String'];
  borrowRateMode: Scalars['String'];
  variableBorrowIndex: Scalars['String'];
  liquidityRate: Scalars['String'];
  borrowRate: Scalars['String'];
  aTokenAddress: Scalars['String'];
  lastUpdatedTimestamp: Scalars['Float'];
};

export type UserWithOneReserveModel = {
  __typename?: 'UserWithOneReserveModel';
  userAddress: Scalars['String'];
  reserveData: UserReserveModel;
};

export type EthTransactionFragment = { __typename?: 'EthereumTransactionModelExtended' } & Pick<
  EthereumTransactionModelExtended,
  'txType'
> & {
    tx: { __typename?: 'EthereumTransactionModel' } & Pick<
      EthereumTransactionModel,
      'from' | 'to' | 'gas' | 'data' | 'value'
    >;
  };

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
  liquidation: Array<
    { __typename?: 'LiquidationModel' } & Pick<LiquidationModel, 'principalBorrows'> & {
        reserve: { __typename?: 'LiquidationReserveModel' } & Pick<
          LiquidationReserveModel,
          'id' | 'symbol' | 'decimals'
        >;
        user: { __typename?: 'UserLiquidationModel' } & Pick<
          UserLiquidationModel,
          'id' | 'healthFactor' | 'totalBorrowsWithFeesETH' | 'totalCollateralETH'
        > & {
            reservesData: Array<
              { __typename?: 'UserLiquidationReservesModel' } & Pick<
                UserLiquidationReservesModel,
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
                  reserve: { __typename?: 'UserLiquidationReserveModel' } & Pick<
                    UserLiquidationReserveModel,
                    | 'id'
                    | 'name'
                    | 'symbol'
                    | 'decimals'
                    | 'liquidityRate'
                    | 'lastUpdateTimestamp'
                    | 'usageAsCollateralEnabled'
                  > & { aToken: { __typename?: 'Atoken' } & Pick<Atoken, 'id'> };
                }
            >;
          };
      }
  >;
};

export const EthTransactionFragmentDoc = gql`
  fragment EthTransaction on EthereumTransactionModelExtended {
    tx {
      from
      to
      gas
      data
      value
    }
    txType
  }
`;
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
    liquidation {
      principalBorrows
      reserve {
        id
        symbol
        decimals
      }
      user {
        id
        healthFactor
        totalBorrowsWithFeesETH
        totalCollateralETH
        reservesData {
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
            usageAsCollateralEnabled
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
