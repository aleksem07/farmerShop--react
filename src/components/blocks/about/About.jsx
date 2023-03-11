import React from 'react';
import styled from 'styled-components';
import Title, { TitleSize } from '../../ui/title/Title';

import './style.css';
const AboutText = styled.p`
  color: #333333;
`;

const SectionAbout = styled.section`
  margin-bottom: 50px;
  max-width: 1280px;
  width: 100%;
  min-height: 600px;
  background-color: #d8ecfe;
`;

const GridWrapper = styled.div`
  padding-top: 56px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 6px;
  margin-inline: 7%;
`;

const About = () => {
  return (
    <SectionAbout>
      <GridWrapper>
        <div className='text__wrapper'>
          <Title size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
          <AboutText>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа
            клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
          </AboutText>
        </div>
        <div className='about__img'></div>
      </GridWrapper>
    </SectionAbout>
  );
};

export default About;
