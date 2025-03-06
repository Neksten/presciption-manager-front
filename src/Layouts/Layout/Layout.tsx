import { FC, PropsWithChildren } from 'react';
import { Header } from '../../components/Header';
import { Container } from '../../ui/Container';

interface ILayoutProps extends PropsWithChildren {
  containerClassName?: string;
}

const Layout: FC<ILayoutProps> = ({ containerClassName, children }) => {
  return (
    <>
      <Header />
      <main>
        <Container className={containerClassName}>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
