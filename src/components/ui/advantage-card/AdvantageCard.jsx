import React from 'react';
import Title, { TitleSize } from '../title/Title';
import './style.css';

const AdvantageCard = ({ icon, owner, title, description, isNegative }) => {
  return (
    <section className={`advantage${isNegative ? ' advantage_negative' : ''}`}>
      <header className='advantage__header'>
        <img className='advantage__img' src={icon} alt={title} width={56} height={56} />
        <div>
          <span className={`advantage__owner${isNegative ? ' advantage__owner_negative' : ''}`}>{owner}</span>
          <Title size={TitleSize.EXTRA_SMALL}>{title}</Title>
        </div>
      </header>
      <p className='advantage__text' dangerouslySetInnerHTML={{ __html: description }}></p>
    </section>
  );
};

export default AdvantageCard;
