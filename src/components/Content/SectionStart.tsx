import React from 'react';
import Button from '../Button';
import './Content.css';

const SectionStart = (): JSX.Element => {
  return (
    <section id='home' className='start'>
      <h3>Hi, my name is</h3>
      <h1>Martin Lundqvist</h1>
      <h1 className='darker'>
        I built this site based on Brittany Chiang's design.
      </h1>
      <p>
        I am a hobby / amateur software developer trying to get better at web
        development. Reproducing awesome hompages built by the best developers
        out there is a great way to learn! Check out{' '}
        <a href=''> Brittany's site</a>!
      </p>
      <Button text='Click here to learn more' />
    </section>
  );
};

export default SectionStart;
