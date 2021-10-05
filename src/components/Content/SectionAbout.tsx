import React from 'react';
import SectionTitle from './SectionTitle';
import MartinImage from './MartinImage';
import './Content.css';
import './SectionAbout.css';

const SectionAbout = (): JSX.Element => {
  return (
    <section>
      <SectionTitle index='01.' title='About me' />
      <div className='sectionaboutcontainer'>
        <p className='wide'>
          Hello my name is Martin Lundqvist and I have nothing very clever to
          say here. In fact, since this is merely a learning exercise for me, I
          don't really need to do anything else than add a bunch of nonsensical
          text. :)
          <br />I should also insert some <a href=''>random links</a> since
          that's kind of <a href=''>cool</a> looking.
          <br />
          Just for the <a href=''>heck</a> of it, here's a couple of more space
          wasting couple of words. Again including the{' '}
          <a href=''>random link</a>.
        </p>
        <MartinImage />
      </div>
    </section>
  );
};

export default SectionAbout;
