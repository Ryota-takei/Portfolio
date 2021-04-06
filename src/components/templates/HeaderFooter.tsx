import { ReactNode, VFC } from 'react';
import { Footer } from '../organisum/layout/footer/Footer';
import { Header } from '../organisum/layout/header/Header'

type Props = {
  children: ReactNode;
};

export const HeaderFooter:VFC<Props> = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
