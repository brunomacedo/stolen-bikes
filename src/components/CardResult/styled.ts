import styled from 'styled-components';
import { colors } from '../../styles/variables';

interface Props {
  type?: string;
}

export const Card = styled.li`
  padding: 1.6rem 0;
  font-weight: 300;

  & + li {
    border-top: 1px solid ${colors.grey};
  }
`;

export const CardFigure = styled.figure`
  width: 160px;
  height: 160px;
  border: 3px solid ${colors.darkBiege};
  overflow: hidden;
  object-fit: fill;
  border-radius: 50rem;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & h3 {
    color: ${colors.darkBiege};
  }
`;

export const CardDateTime = styled.p`
  font-size: 13px;
  color: ${colors.darkGrey};
  margin-bottom: 0.3rem;
`;

export const CardStatus = styled.span<Props>`
  background-color: ${(props: any) => checkStatusColor(props?.type)};
  color: white;
  font-size: 12px;
  margin-top: 0.3rem;
  padding: 0.15rem 1rem;
  display: inline-block;
  border-radius: 1rem;
`;

export const CardText = styled.div`
  padding-left: 1.5rem;
  flex: 1;
  line-height: 1.4;
`;

const checkStatusColor = (type: string) => {
  if (type === 'hazard') return colors.blue;
  if (type === 'theft') return colors.red;
  return colors.darkGrey;
};
