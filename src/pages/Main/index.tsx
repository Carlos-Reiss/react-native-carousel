import React, {useState} from 'react';
import {Container, Card, Carousel, Indicator, IndicatorText} from './styles';

const Main: React.FC = () => {
  const [active, setActive] = useState(false);

  const images: string[] = [
    'https://images.pexels.com/photos/4555610/pexels-photo-4555610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3656518/pexels-photo-3656518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=940',
    'https://images.pexels.com/photos/2733337/pexels-photo-2733337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/192926/pexels-photo-192926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4586258/pexels-photo-4586258.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4319001/pexels-photo-4319001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/4555670/pexels-photo-4555670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/462030/pexels-photo-462030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ];

  return (
    <Container>
      <Carousel
        decelerationRate="normal"
        horizontal
        pagingEnabled
        onScroll={() => setActive(true)}
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <Card
            key={index}
            source={{
              uri: image,
            }}
          />
        ))}
      </Carousel>
      <Indicator>
        {images.map((image, index) => (
          <IndicatorText active={active} key={index}>
            ⬤
          </IndicatorText>
        ))}
      </Indicator>
    </Container>
  );
};

export default Main;
