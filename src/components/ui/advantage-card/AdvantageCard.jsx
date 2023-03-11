import React from 'react';
import Title, { TitleSize } from '../title/Title';
import './style.css';

const AdvantageCard = ({ icon, feature, title, description }) => {
  return (
    <article className='advantage-card'>
      <img src={icon} alt='' width={56} height={56} />
      <span>{feature}</span>
      <Title size={TitleSize.SMALL}>{title}</Title>
      <p className='advantage-card__text'>{description}</p>
    </article>
  );
};

export default AdvantageCard;
