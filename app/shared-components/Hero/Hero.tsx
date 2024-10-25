import React from 'react';
import classNames from 'classnames';
import style from './Hero.module.css';

export type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div
      className={classNames(
        style.heroContainer,
        'bg-gray-100',
        'p-8',
        'text-center'
      )}
    >
      <h1
        className={classNames('text-4xl', 'font-bold', 'mb-4', style.heroTitle)}
      >
        {title}
      </h1>
      <p className={classNames('text-lg', 'text-gray-700')}>{subtitle}</p>
    </div>
  );
};

export default Hero;
