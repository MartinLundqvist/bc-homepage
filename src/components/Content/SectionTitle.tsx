import React from 'react';
import './SectionTitle.css';

export interface ISectionTitleProps {
  index?: string;
  title?: string;
}

const SectionTitle = ({ index, title }: ISectionTitleProps): JSX.Element => {
  return (
    <div className='sectiontitlecontainer'>
      <span className='index'>{index}</span>
      <span className='title'>{title}</span>
      <div className='line'></div>
    </div>
  );
};

export default SectionTitle;
