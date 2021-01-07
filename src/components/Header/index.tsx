import { Link } from 'react-router-dom';
import logo from '../../assets/images/berliner_polizei.svg';
import * as S from './styled';

function Header() {
  return (
    <S.Header>
      <S.Container>
        <Link to="/">
          <S.Logo src={logo} alt="Police Department of Berlin" />
        </Link>
        <S.HeadingGroup>
          <S.Title>Police Department of Berlin</S.Title>
          <S.SubTitle>Stolen bykes</S.SubTitle>
        </S.HeadingGroup>
      </S.Container>
    </S.Header>
  );
}

export default Header;
