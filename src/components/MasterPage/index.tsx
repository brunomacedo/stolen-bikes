import { ReactNode } from 'react';
import GlobalStyles from '../../styles/global';
import Header from '../Header';
import * as S from './styled';

interface Props {
  children: ReactNode;
}

function MasterPage({ children }: Props) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <S.Wrapper>
        <S.Container>
          {children}
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default MasterPage;
