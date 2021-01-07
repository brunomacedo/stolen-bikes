import { ReactNode } from 'react';
import GlobalStyles from '../../styles/global';
import * as S from './styled';

interface Props {
  children: ReactNode;
}

function MasterPage({ children }: Props) {
  return (
    <S.MasterPageWrapper>
      <GlobalStyles />
      <S.MasterPageMain>
        {children}
      </S.MasterPageMain>
    </S.MasterPageWrapper>
  );
}

export default MasterPage;
