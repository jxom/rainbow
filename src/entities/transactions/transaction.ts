import { BigNumberish } from '@ethersproject/bignumber';
import { ProtocolType } from '../protocolTypes';
import { ParsedAddressAsset } from '../tokens';
import { EthereumAddress } from '../wallet';
import { TransactionStatus } from './transactionStatus';
import { TransactionType } from './transactionType';
import { Network } from '@rainbow-me/helpers/networkTypes';

export interface RainbowTransaction {
  address: string;
  balance: {
    amount: string;
    display: string;
  } | null;
  dappName?: string; // for walletconnect
  data?: string; // for pending tx
  description: string | null;
  from: EthereumAddress | null;
  gasLimit?: BigNumberish;
  gasPrice?: BigNumberish;
  hash: string | null;
  minedAt: number | null;
  name: string | null;
  native: {
    amount: string;
    display: string;
  };
  network?: Network;
  nonce: number | null;
  pending: boolean;
  protocol?: ProtocolType | null;
  sourceAmount?: string; // for purchases
  status: TransactionStatus;
  symbol: string | null;
  timestamp?: number; // for purchases
  title: string;
  to: EthereumAddress | null;
  transferId?: string; // for purchases
  txTo?: EthereumAddress | null;
  type: TransactionType;
  value?: BigNumberish; // for pending tx
}

export interface NewTransaction {
  amount: string | null;
  asset: ParsedAddressAsset | null;
  dappName?: string; // for walletconnect
  data?: string;
  from: EthereumAddress | null;
  gasLimit?: BigNumberish;
  gasPrice?: BigNumberish;
  hash: string | null;
  network?: Network;
  nonce: number | null;
  protocol?: ProtocolType | null;
  sourceAmount?: string; // for purchases
  status?: TransactionStatus;
  timestamp?: number; // for purchases
  to: EthereumAddress | null;
  transferId?: string; // for purchases
  type?: TransactionType;
  value: BigNumberish;
  txTo: EthereumAddress | null;
}
