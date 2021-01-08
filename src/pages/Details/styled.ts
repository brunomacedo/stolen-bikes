import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors, screen } from '../../styles/variables';

interface PropsWrapper {
  children?: ReactNode;
}

export const DetailContainer = styled.main`
  display: flex;
  padding: 1rem 0;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: ${screen.sm}) {
    display: block;
  }
`;

export const BackLink = styled(Link) <PropsWrapper>`
  color: ${colors.darkBiege};
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${colors.darkBiege};
  }
`;

export const Title = styled.h1`
  color: ${colors.darkBiege};
  font-weight: bold;
  font-size: 26px;
`;

export const WrapperText = styled.div`
  padding-left: 1rem;
  flex: 2;

  @media screen and (max-width: ${screen.sm}) {
    padding-left: 0;
    padding-top: 1rem;
  }
`;

export const WrapperDescription = styled.div`
    margin-top: 1.5rem;

    & h3 {
      font-size: 18px;
      color: ${colors.darkGrey};
    }
`;

export const Description = styled.p`
    line-height: 1.6;
    font-size: 16px;
    font-weight: 300;
    margin-top: 0.5rem;
`;

export const CardFigure = styled.figure`
  width: 100%;
  max-width: 25rem;
  min-height: 16rem;
  border: 3px solid ${colors.darkBiege};
  overflow: hidden;
  object-fit: fill;
  background-color: white;
  padding: 1rem;
  flex: 1;

  & img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${screen.sm}) {
    padding: 0.3rem;
  }
`;

export const GoogleMap = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ccc;
  margin-top: 1rem;
`;

export const Subtext = styled.p`
  font-size: 14px;
  color: ${colors.darkGrey};
  margin-top: 0.3rem;
  margin-bottom: 1rem;
`;
