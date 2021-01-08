import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, screen } from '../../styles/variables';

interface PropsStatus {
  type?: string;
}

interface PropsWrapper {
  children?: ReactNode;
}

export const Card = styled.li`
  padding: 1.6rem 0.5rem;
  font-weight: 300;
  cursor: pointer;

  & + li {
    border-top: 1px solid ${colors.grey};
  }

  &:hover {
    background-color: ${colors.grey};
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

  @media screen and (max-width: ${screen.xs}) {
    border-radius: 0;
    border: 0;
    width: 100%;
    min-height: 300px;
    height: auto;
    margin: 0 0 0.5rem;
  }
`;

export const CardWrapper = styled.div<PropsWrapper>`
  display: flex;
  align-items: center;
  position: relative;

  & h3 {
    color: ${colors.darkBiege};
  }

  @media screen and (max-width: ${screen.xs}) {
    display: block;
  }
`;

export const CardTitleLink = styled(Link) <PropsWrapper>`
  color: ${colors.darkBiege};
  font-weight: bold;
  font-size: 18px;

  &:hover {
    color: ${colors.xanadu};
  }
`;

export const CardDateTime = styled.p`
  font-size: 13px;
  color: ${colors.darkGrey};
  margin-bottom: 0.3rem;
`;

export const CardStatus = styled.span<PropsStatus>`
  background-color: ${(props: any) => checkStatusColor(props?.type)};
  color: white;
  font-size: 12px;
  margin-top: 0.3rem;
  padding: 0.15rem 1rem;
  display: inline-block;
  border-radius: 1rem;
`;

export const CardText = styled.div`
  flex: 1;
  line-height: 1.4;
  padding-left: 1.5rem;

  @media screen and (max-width: ${screen.xs}) {
    padding-left: 0;
  }
`;

const checkStatusColor = (type: string) => {
  if (type === 'hazard') return colors.blue;
  if (type === 'theft') return colors.red;
  return colors.darkGrey;
};
