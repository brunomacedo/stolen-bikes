import * as S from './styled';
import logo from '../../assets/images/berliner_polizei.svg';

function Logo() {
  return (
    <S.PictureWrapper>
      <S.Img src={logo} alt="Police Department of Berlin" />
    </S.PictureWrapper>
  );
}

export default Logo;
