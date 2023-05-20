import { ChainId } from '@sushiswap/core-sdk'
import { NETWORK_ICON } from 'app/config/networks'
import NetworkModel from 'app/modals/NetworkModal'
import { useActiveWeb3React } from 'app/services/web3'
import { useNetworkModalToggle } from 'app/state/application/hooks'
import Image from 'next/image'
import React from 'react'
import XRP from '../../../public/XRP.png'
// @ts-ignore: Unreachable code error
// eslint-disable-next-line simple-import-sort/imports
import { Arwes, ThemeProvider, Button, Heading, Paragraph, Frame, createTheme, SoundsProvider, createSounds, withSounds } from 'arwes';
function Web3Network(): JSX.Element | null {
  const { chainId } = useActiveWeb3React()

  const toggleNetworkModal = useNetworkModalToggle()

  if (!chainId) return null

  return (
    
    <div
      className="flex items-center text-sm font-bold rounded cursor-pointer pointer-events-auto select-none whitespace-nowrap"
      onClick={() => toggleNetworkModal()}
    >
          <Frame animate={true}
                  level={3}
                  corners={2}
                  className="w-100"
                  layer='primary'>
      <div className="grid items-center grid-flow-col  justify-center  h-[36px] w-[36px] text-sm rounded pointer-events-auto auto-cols-max text-secondary">
        {/*@ts-ignore TYPE NEEDS FIXING*/}

        {chainId === ChainId.XRPL ? (
          <img src={XRP.src} className="rounded-md" width="22px" height="22px" />
        ) : (
          <Image
            // @ts-ignore TYPE NEEDS FIXING
            src={NETWORK_ICON[chainId]}
            alt="Switch Network"
            className="rounded-md"
            width="22px"
            height="22px"
          />
        )}

        {/* <Image src={NETWORK_ICON[chainId]} alt="Switch Network" className="rounded-md" width="22px" height="22px" /> */}
      </div>
      </Frame>
      <NetworkModel />
    </div>
  )
}

export default Web3Network
