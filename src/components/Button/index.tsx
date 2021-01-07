import { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  href?: string;
  target?: string;
  children?: ReactNode;
}

const defaultProps: Props = {
  href: '',
  target: '_self',
  children: 'Text...',
};

Button.defaultProps = defaultProps;

function Button({
  href,
  target,
  children,
}: Props) {
  return (
    <S.Button
      href={href}
      target={target}
    >
      {children}
    </S.Button>
  );
}

export default Button;
