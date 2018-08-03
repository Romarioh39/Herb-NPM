import styled from 'react-emotion'

export const Container = styled('div')`
  position: absolute;
  top: 0;
  left 0;
  z-index: 5;
  background-color: rbg(1, 1, 1, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Content = styled('div')`
  position: relative;
  z-index: 10;
  background-color: white;
  width: 40em;
  height: 40em;
  border-radius: 20px;
`;

export const HeaderContainer = styled('div')`
  display: flex;
  align-content: space-between;
  position: top;
  text-size: 5em;
  font-family: ariel;
  align-item: center;
  padding-top: 1em;
  padding-botton: 5.1em;
  background-color: #ddd;
  opacity: 0.7;
  border-radius: 15px 15px 0px 0px;
  > div {
    display: flex;
    position: absolute;
    margin-left: 14.5em;
    font-family: Arial;
    font-size: 20px;
  }
`;

export const BodyContainer= styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: steelBlue;
  > div {
    display: flex;
    justify-content: center;
  }
`;

export const FooterContainer = styled('div')`
  display: flex;
  justify-content: center;
  position: bottom;
  text-size: 1em;
  font-family: ariel;
  align-item: center;
  background-color: #ddd;
  padding-top: 1em;
  padding-botton: 1em;
  border-radius: 0px 0px 15px 15px ;
`;

export const CloseContainer = styled('button')`
background-color: none;
width: auto;
height: auto;
margin: 1em;
text-align: center;
cursor: pointer;
margin-left: 1em;
border-radius: 6px;
`;
