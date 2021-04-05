import { ReactNode, VFC } from 'react';
import { Header } from '../organisum/layout/header/Header'

type Props = {
  children: ReactNode;
};

export const HeaderFooter:VFC<Props> = ({children}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
