import { NATIVE } from '@sushiswap/core-sdk'
import Container from 'app/components/Container'
import { NAV_CLASS } from 'app/components/Header/styles'
import useMenu from 'app/components/Header/useMenu'
import LanguageSwitch from 'app/components/LanguageSwitch'
import Web3Network from 'app/components/Web3Network'
import Web3Status from 'app/components/Web3Status'
import { classNames } from 'app/functions'
import useIsCoinbaseWallet from 'app/hooks/useIsCoinbaseWallet'
import { useActiveWeb3React } from 'app/services/web3'
import { useDexWarningOpen, useToggleDexWarning } from 'app/state/application/hooks'
import { useETHBalances } from 'app/state/wallet/hooks'
import Link from 'next/link'
import React, { FC, useState } from 'react'

import LogoImage from '../../../public/icons/icon-72x72.png'
import ExternalLink from '../ExternalLink'
import { NavigationItem } from './NavigationItem'
// @ts-ignore: Unreachable code error
// eslint-disable-next-line simple-import-sort/imports
import { Arwes, ThemeProvider, Button, Heading, Paragraph, Frame, createTheme, SoundsProvider, createSounds, withSounds } from 'arwes';
const HEADER_HEIGHT = 64

const Desktop: FC = () => {
  const menu = useMenu()
  const { account, chainId, library } = useActiveWeb3React()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  const isCoinbaseWallet = useIsCoinbaseWallet()
  const [showAlert, setShowAlert] = useState(true)

  const toggleWarning = useToggleDexWarning()
  const showUseDexWarning = useDexWarningOpen()

  return (
    <>
      <header className="fixed z-20 hidden w-full lg:block" style={{ height: HEADER_HEIGHT }}>
        <nav className={classNames(NAV_CLASS, showUseDexWarning && 'before:backdrop-blur-[20px]')}>
          <Container maxWidth="7xl" className="mx-auto">
            {/* {showUseDexWarning && (
              <div className="py-2 px-4 text-[1rem] text-high-emphesis bg-[#eb4326] relative">
                <div className="absolute right-1 top-1">
                  <div
                    className="flex items-center justify-center w-6 h-6 cursor-pointer hover:text-white"
                    onClick={toggleWarning}
                  >
                    <XIcon width={24} height={24} className="text-high-emphesis" />
                  </div>
                </div>
                <Typography variant="xs" weight={700} className="py-0 px-4 text-[1rem] text-high-emphesis bg-[#eb4326]">
                  {`You are using the NEXUS Swap Beta platform on the Songbird Canary Network. NEXUSSwap is
  a brand new DEX on the Songbird Network. Liquidity is decentralized and added by users. Please be aware of the associated risks with using DeFi
  platforms.`}
                </Typography>
              </div>
            )} */}

            <div className="flex items-center justify-between gap-4 px-6 py-2">
              <div className="flex gap-4">
                <div className="flex items-center mr-4">
                  <ExternalLink href="https://www.thenexusportal.io">
                    <img src={LogoImage.src} className={'w-[30px] h-[30px]'} alt="Logo" />
                    {/* <Image src="/logo.png" alt="NEXUSSwap logo" width="24px" height="24px" /> */}
                  </ExternalLink>
                </div>

                {menu.map((node) => {
                  return <NavigationItem node={node} key={node.key} />
                })}
              </div>
              <div className="flex items-center justify-end gap-2">
                {library && (library.provider.isMetaMask || isCoinbaseWallet) && (
                  <div className="hidden sm:inline-block">
                    <Web3Network />
                  </div>
                )}
                <Frame animate={true}
                  level={3}
                  corners={5}
                  className="w-100"
                  layer='primary'>
                <div className="flex items-center w-auto text-sm font-bold rounded shadow cursor-pointer pointer-events-auto select-none whitespace-nowrap">
                  {account && chainId && userEthBalance && (
                    <Link href="/portfolio" passHref={true}>
                      <a className="hidden px-3 text-high-emphesis text-bold md:block">
                        {/*@ts-ignore*/}
                        {userEthBalance?.toSignificant(4)} {NATIVE[chainId || 1].symbol}
                      </a>
                    </Link>
                  )}
                  <Web3Status />
                </div>
                </Frame>
                <div className="hidden lg:flex">
                  <LanguageSwitch />
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>
      <div style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }} />
    </>
  )
}

export default Desktop
