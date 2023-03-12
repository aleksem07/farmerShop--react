import React from 'react';
import styled from 'styled-components';
import Title, { TitleSize } from '../../ui/title/Title';

import './style.css';

const SectionAbout = styled.section`
  margin-bottom: 50px;
  max-width: 1280px;
  width: 100%;
  min-height: 600px;
  background-color: #d8ecfe;
`;

const AboutText = styled.p`
  color: #333333;
`;

const About = () => {
  return (
    <SectionAbout className='about'>
      <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
      <AboutText>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам.
        Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
      </AboutText>
    </SectionAbout>
  );
};

export default About;
