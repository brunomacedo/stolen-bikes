import styled from 'styled-components';
import { ReactNode } from 'react';
import { colors, screen } from '../../styles/variables';

interface PropsWrapper {
  children?: ReactNode;
}

export const Form = styled.form<PropsWrapper>`
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.5rem 0 2rem;
  column-gap: 15px;

  @media screen and (max-width: ${screen.md}) {
    display: block;
  }
`;

export const Input = styled.input`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  padding: 0.5rem 1.5rem;
  color: ${colors.darkGrey};
  outline: none;
  border-radius: 20rem;
  border: 2px solid ${colors.grey};
  background-color: #fff;
  box-sizing: border-box;
  min-height: 41px;
  flex: 1;

  @media screen and (max-width: ${screen.md}) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  border: 0;
  border-radius: 20rem;
  background-color: ${colors.darkBiege};
  padding: 0 5rem;
  text-transform: uppercase;
  color: white;
  font-weight: 300;
  cursor: pointer;
  min-height: 41px;
`;
