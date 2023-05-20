import { CurrencyAmount, JSBI, SUSHI, Token, ChainId } from '@sushiswap/core-sdk'
import { NEXUS } from 'app/config/tokens'
import { useSingleCallResult } from 'app/state/multicall/hooks'
import { useTransactionAdder } from 'app/state/transactions/hooks'
import { useCallback, useMemo } from 'react'

import { useOracleDistributorContract } from './useContract'

const useOracleDistributor = () => {
  const addTransaction = useTransactionAdder()
  const distributorContract = useOracleDistributorContract()

  const convert = useCallback(async () => {
    try {
      const tx = await distributorContract?.LPConvert()
      return addTransaction(tx, { summary: 'Convert LPs To NEXUS' })
    } catch (e) {
      return e
    }
  }, [addTransaction, distributorContract])

  return { convert }
}

export function useOracleDistributorEnableCheck() {
  const distributorContract = useOracleDistributorContract()

  const result = useSingleCallResult(distributorContract, 'LPEnalbe')?.result

  const value = result?.[0]

  return value
}

export function useOracleDistributorCovertAmount() {
  const contract = useOracleDistributorContract()

  const result = useSingleCallResult(contract, 'nexusDiffuserTotalAmount')?.result

  const value = result?.[0]

  const amount = value ? JSBI.BigInt(value.toString()) : undefined

  const result1 = useSingleCallResult(contract, 'nexusTreasuryTotalAmount')?.result

  const value1 = result1?.[0]

  const amount1 = value1 ? JSBI.BigInt(value1.toString()) : undefined

  const result2 = useSingleCallResult(contract, 'nexusBurnTotalAmount')?.result

  const value2 = result2?.[0]

  const amount2 = value2 ? JSBI.BigInt(value2.toString()) : undefined

  const result3 = useSingleCallResult(contract, 'nexusTotalAmount')?.result

  const value3 = result3?.[0]

  const amount3 = value3 ? JSBI.BigInt(value3.toString()) : undefined

  const result4 = useSingleCallResult(contract, 'nexusBurnerTotalAmount')?.result

  const value4 = result4?.[0]

  const amount4 = value4 ? JSBI.BigInt(value4.toString()) : undefined

  return useMemo(() => {
    if (amount && amount1 && amount2 && amount3 && amount4) {
      const foundry = CurrencyAmount.fromRawAmount(NEXUS, amount)
      const treasury = CurrencyAmount.fromRawAmount(NEXUS, amount1)
      const burned = CurrencyAmount.fromRawAmount(NEXUS, amount2)
      const total = CurrencyAmount.fromRawAmount(NEXUS, amount3)
      const prophet = CurrencyAmount.fromRawAmount(NEXUS, amount4)
      return [foundry, treasury, burned, prophet, total]
    }
    return [undefined, undefined, undefined, undefined, undefined]
  }, [amount, amount1, amount2, amount3, amount4])
}

export default useOracleDistributor
