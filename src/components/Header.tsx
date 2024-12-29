import type { FC } from 'react'
import { HeaderMenu } from './HeaderMenu'
// import { HamburgerMenu } from './HumburgerMenu'
// import { Navigation } from './Navigation'

export const Header: FC = () => {
  return (
    <header className="m-4 flex justify-between">
      <h1 className="text-xl font-bold leading-none sm:text-2xl lg:text-4xl">
        Degital Scanning Center
      </h1>
      <HeaderMenu />
    </header>
  )
}

export default Header