import { MultiSend } from '../../../typechain/src/web3-v1/v1.1.1/multi_send'
import MultiSendContract from './MultiSendContract'

class MultiSendWeb3Contract implements MultiSendContract {
  constructor(public contract: MultiSend) {}

  getAddress(): string {
    return this.contract.options.address
  }

  encode(methodName: string, params: any[]): string {
    return (this.contract as any).methods[methodName](...params).encodeABI()
  }
}

export default MultiSendWeb3Contract
