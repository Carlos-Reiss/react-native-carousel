import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width;

interface IIndicator {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: ${width}px;
  height: ${height}px;
  background-color: #333;
`;

export const Card = styled.Image`
  width: ${width}px;
  height: ${height}px;
  border-radius: 5px;
  resize-mode: contain;
`;

export const Carousel = styled.ScrollView`
  margin: 40px auto;

  width: ${width}px;
  height: ${height}px;
`;

export const Indicator = styled.View`
  flex: 1;
  flex-direction: row;

  margin: 0 auto;
`;

export const IndicatorText = styled.Text<IIndicator>`
  color: ${(props) => (props.active ? 'white' : '#888')};
  margin: 3px;
`;
