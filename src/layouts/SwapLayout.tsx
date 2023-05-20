import Container from 'app/components/Container'
import DoubleGlowShadow from 'app/components/DoubleGlowShadow'
import React, { FC } from 'react'

import DefaultLayout from './Default'
// @ts-ignore: Unreachable code error
// eslint-disable-next-line simple-import-sort/imports
import { Arwes, ThemeProvider, Button, Heading, Paragraph, Frame, createTheme, SoundsProvider, createSounds, withSounds } from 'arwes';
export interface Layout {
  id: string
}

export const SwapLayoutCard: FC = ({ children }) => {
  return (
    <div className="flex flex-col gap-3 p-2 md:p-4 pt-4 rounded-[16px] ">
      <Frame animate={true}
        level={3}
        corners={4}
        layer='primary'>
        <div className="p-3">

          {children}
        </div>
      </Frame>
    </div>
  )
}

export const Layout: FC<Layout> = ({ children, id }) => {
  return (
    <DefaultLayout>
      <Container id={id} className="py-4 md:py-8 lg:py-[60px] px-2" maxWidth="md">
        <DoubleGlowShadow>{children}</DoubleGlowShadow>
      </Container>
    </DefaultLayout>
  )
}

type SwapLayout = (id: string) => FC
export const SwapLayout: SwapLayout = (id: string) => {
  return (props) => <Layout id={id} {...props} />
}
