import { ReactNode, FC } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <div>{children}</div>
}

export default Layout
