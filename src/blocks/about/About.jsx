import React from 'react';
import styled from 'styled-components';
import Wrapper from '/src/components/layout/wrapper/Wrapper';

import style from './style.css';
const AboutText = styled.p`
  color: #333333;
`;

const SectionAbout = styled.section`
  width: 1280px;
  width: 100%;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  background-color: #d8ecfe;
`;

const About = () => {
  return (
    <SectionAbout>
      <Wrapper>
        <div className='text__wrapper'>
          <h1>Магазин фермерских продуктов с доставкой</h1>
          <AboutText>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа
            клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
          </AboutText>
        </div>
        <div className='about__img'></div>
      </Wrapper>
    </SectionAbout>
  );
};

export default About;
