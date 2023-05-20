/* eslint-disable @next/next/no-img-element */
import { ChainId, Currency, Token, WNATIVE } from '@sushiswap/core-sdk'
import useHttpLocations from 'app/hooks/useHttpLocations'
import { WrappedTokenInfo } from 'app/state/lists/wrappedTokenInfo'
import React, { FunctionComponent, useMemo } from 'react'
import NEXUS from '../../../public/NEXUS.png'
import WXRP from '../../../public/WXRP.png'
import XRP from '../../../public/XRP.png'
// import Image from '../../components/Image'
import Logo, { UNKNOWN_ICON } from '../Logo'




// import PRO_Logo3Gold from '../../../public/PRO_Logo3Gold.png'

const BLOCKCHAIN = {
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BSC]: 'binance',
  [ChainId.CELO]: 'celo',
  [ChainId.FANTOM]: 'fantom',
  [ChainId.AVALANCHE_TESTNET]: 'fuji',
  [ChainId.FUSE]: 'fuse',
  [ChainId.HARMONY]: 'harmony',
  [ChainId.HECO]: 'heco',
  [ChainId.MATIC]: 'matic',
  [ChainId.MOONRIVER]: 'moonriver',
  [ChainId.OKEX]: 'okex',
  [ChainId.PALM]: 'palm',
  [ChainId.TELOS]: 'telos',
  [ChainId.XDAI]: 'xdai',
  [ChainId.ARBITRUM]: 'arbitrum',
  [ChainId.AVALANCHE]: 'avalanche',
  [ChainId.XRPL]: 'songbird',
}

// @ts-ignore TYPE NEEDS FIXING
export const getCurrencyLogoUrls = (currency): string[] => {
  const urls: string[] = []

  if (currency.chainId in BLOCKCHAIN) {
    urls.push(
      // @ts-ignore TYPE NEEDS FIXING
      `https://raw.githubusercontent.com/sushiswap/logos/main/network/${BLOCKCHAIN[currency.chainId]}/${
        currency.address
      }.jpg`
    )
    urls.push(
      // @ts-ignore TYPE NEEDS FIXING
      `https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
        currency.address
      }/logo.png`
    )
    urls.push(
      // @ts-ignore TYPE NEEDS FIXING
      `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${
        currency.address
      }/logo.png`
    )

    if (currency.chainId === ChainId.XRPL) {
      // const hostname = window.location.hostname
      // const protocal = window.location.protocol
      // console.log('window.origin', window.origin)
      urls.push(
        // @ts-ignore TYPE NEEDS FIXING
        `https://dex.thenexusportal.io/${currency.symbol}.png`
      )

      // urls.push(
      //   // @ts-ignore TYPE NEEDS FIXING
      //   `${window.origin}/${currency.symbol}.png`
      // )
    }
  }
  return urls
}

const AvalancheLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/avax.jpg'
const BinanceCoinLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/bnb.jpg'
const EthereumLogo = 'https://raw.githubusercontent.com/sushiswap/sushiswap-interface/master/public/images/native-tokens/eth.png'
const FantomLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/ftm.jpg'
const HarmonyLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/one.jpg'
const HecoLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/heco.jpg'
const MaticLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/polygon.jpg'
const MoonbeamLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/eth.jpg'
const OKExLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/okt.jpg'
const xDaiLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/xdai.jpg'
const CeloLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/celo.jpg'
const PalmLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/palm.jpg'
const MovrLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/movr.jpg'
const FuseLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/fuse.jpg'
const TelosLogo = 'https://raw.githubusercontent.com/sushiswap/logos/main/token/telos.jpg'
const XRPLLogo = 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'

const LOGO: Record<ChainId, string> = {
  [ChainId.ETHEREUM]: EthereumLogo,
  [ChainId.KOVAN]: EthereumLogo,
  [ChainId.RINKEBY]: EthereumLogo,
  [ChainId.ROPSTEN]: EthereumLogo,
  [ChainId.GÖRLI]: EthereumLogo,
  [ChainId.FANTOM]: FantomLogo,
  [ChainId.FANTOM_TESTNET]: FantomLogo,
  [ChainId.MATIC]: MaticLogo,
  [ChainId.MATIC_TESTNET]: MaticLogo,
  [ChainId.XDAI]: xDaiLogo,
  [ChainId.BSC]: BinanceCoinLogo,
  [ChainId.BSC_TESTNET]: BinanceCoinLogo,
  [ChainId.MOONBEAM_TESTNET]: MoonbeamLogo,
  [ChainId.AVALANCHE]: AvalancheLogo,
  [ChainId.AVALANCHE_TESTNET]: AvalancheLogo,
  [ChainId.HECO]: HecoLogo,
  [ChainId.HECO_TESTNET]: HecoLogo,
  [ChainId.HARMONY]: HarmonyLogo,
  [ChainId.HARMONY_TESTNET]: HarmonyLogo,
  [ChainId.OKEX]: OKExLogo,
  [ChainId.OKEX_TESTNET]: OKExLogo,
  [ChainId.ARBITRUM]: EthereumLogo,
  [ChainId.ARBITRUM_TESTNET]: EthereumLogo,
  [ChainId.CELO]: CeloLogo,
  [ChainId.PALM]: PalmLogo,
  [ChainId.PALM_TESTNET]: PalmLogo,
  [ChainId.MOONRIVER]: MovrLogo,
  [ChainId.FUSE]: FuseLogo,
  [ChainId.TELOS]: TelosLogo,
  [ChainId.XRPL]: XRPLLogo,
  [ChainId.HARDHAT]: ""
}

export interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({ currency, size = '24px', className, style }) => {
  
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )

  const srcs: string[] = useMemo(() => {
    if (currency?.isNative || currency?.equals(WNATIVE[currency.chainId])) {
      // @ts-ignore TYPE NEEDS FIXING
      return [LOGO[currency.chainId], UNKNOWN_ICON]
    }

    if (currency?.isToken) {
      const defaultUrls = [...getCurrencyLogoUrls(currency)]
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, UNKNOWN_ICON]
      }
      return defaultUrls
    }

    return [UNKNOWN_ICON]
  }, [currency, uriLocations])



  if (currency?.equals(WNATIVE[currency.chainId]) && currency?.chainId === ChainId.XRPL) {
    return <img alt="img" src={WXRP.src} width={size} height={size} className={className} />
  }

  if (currency?.isNative && currency?.chainId === ChainId.XRPL) {
    return <img alt="img" src={XRP.src} width={size} height={size} className={className} />
  }

  if (currency?.chainId === ChainId.XRPL) {
    if (currency.symbol === 'NEXU') {
      return <img alt="img" src={NEXUS.src} width={size} height={size} className={className} />
    }
    if (currency.symbol === 'NEXUS') {
      return <img alt="img" src={NEXUS.src} width={size} height={size} className={className} />
    }

   
    if (currency.symbol === 'XRP') {
      return <img alt="img" src={XRP.src} width={size} height={size} className={className} />
    }
    if (currency.symbol === 'WXRP') {
      return <img alt="img" src={WXRP.src} width={size} height={size} className={className} />
    }

  }

  if (currency instanceof Token) {
    if (currency.chainId === ChainId.XRPL) {
      if (currency.symbol === 'NEXUS') {
        return <img alt="img" src={NEXUS.src} width={size} height={size} className={className} />
      }


      if (currency.symbol === 'XRP') {
        return <img alt="img" src={XRP.src} width={size} height={size} className={className} />
      }
      if (currency.symbol === 'WXRP') {
        return <img alt="img" src={WXRP.src} width={size} height={size} className={className} />
      }
   
    }
  }

  if (currency instanceof WrappedTokenInfo) {
    if (currency.tokenInfo.chainId === ChainId.XRPL) {

      if (currency.tokenInfo.symbol === 'NEXUS') {
        return <img alt="img" src={NEXUS.src} width={size} height={size} className={className} />
      }
      if (currency.tokenInfo.symbol === 'XRP') {
        return <img alt="img" src={XRP.src} width={size} height={size} className={className} />
      }
      if (currency.tokenInfo.symbol === 'WXRP') {
        return <img alt="img" src={WXRP.src} width={size} height={size} className={className} />
      }


      // return (
      //   <img alt="img" src={CAND.src} width={size} height={size} className={className} />
      // )
    }
  }

  console.log(currency, srcs);

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} style={style} />
}

export default CurrencyLogo
