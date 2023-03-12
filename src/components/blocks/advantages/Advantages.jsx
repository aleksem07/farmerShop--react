import React from 'react';
import Title, { TitleSize } from '../../ui/title/Title';
import Button from '../../ui/button/Button';

import './style.css';
import styled from 'styled-components';
import AdvantageCard from '../../ui/advantage-card/AdvantageCard';

const SectionAdvantages = styled.section`
  margin-bottom: 50px;
  padding-top: 50px;
  max-width: 1280px;
  width: 100%;

  position: relative;
  display: flex;
  padding-left: 90px;
  padding-right: 90px;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  flex-direction: column;
  align-items: center;
`;

const ButtonAdvantages = styled(Button)`
  margin: 0 auto 100px;
  display: block;
`;

const Advantages = ({ advList }) => {
  return advList && advList.length ? (
    <SectionAdvantages>
      <Title size={TitleSize.SMALL}>Почему фермерские продукты лучше?</Title>
      <ul className='advantages__list'>
        {advList.map(advItem => (
          <li className='advantages__item' key={advItem.id}>
            <AdvantageCard {...advItem} />
          </li>
        ))}
      </ul>
      <ButtonAdvantages>Купить</ButtonAdvantages>
    </SectionAdvantages>
  ) : null;
};

export default Advantages;
