import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './WorkExperience.css';
import works, { IWork } from '../../../assets/workDB';

const WorkExperience = (): JSX.Element => {
  const [workId, setWorkId] = useState(0);

  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <div className='workexperiencecontainer'>
      {isDesktop ? (
        <WorkNavigator workId={workId} setWorkId={setWorkId} />
      ) : (
        <WorkNavigatorNarrow workId={workId} setWorkId={setWorkId} />
      )}
      <WorkDetail workId={workId} />
    </div>
  );
};

interface IWorkNavigatorProps {
  workId: number;
  setWorkId: React.Dispatch<React.SetStateAction<number>>;
}

const WorkNavigator = ({
  workId,
  setWorkId,
}: IWorkNavigatorProps): JSX.Element => {
  const [bottomPosition, setBottomPosition] = useState(0);

  useEffect(() => {
    const position = 48 * (works.length - workId);
    setBottomPosition(position);
  }, [workId]);

  return (
    <div className='worknavigatorcontainer'>
      {works.map((work) => (
        <button
          className={workId == work.id ? 'highlight' : ''}
          key={work.id}
          onClick={() => setWorkId(work.id)}
        >
          {work.work}
        </button>
      ))}
      <div
        className='worknavigatorhighlight'
        style={{ bottom: `${bottomPosition}px` }}
      ></div>
    </div>
  );
};

const WorkNavigatorNarrow = ({
  workId,
  setWorkId,
}: IWorkNavigatorProps): JSX.Element => {
  const [rightPosition, setRightPosition] = useState(0);

  useEffect(() => {
    const position = 120 * (works.length - workId);
    setRightPosition(position);
    console.log(`left position is set at ${position}`);
  }, [workId]);

  return (
    <div className='worknavigatorcontainer'>
      {works.map((work) => (
        <button
          className={workId == work.id ? 'highlight' : ''}
          key={work.id}
          onClick={() => setWorkId(work.id)}
        >
          {work.work}
        </button>
      ))}
      <div
        className='worknavigatornarrowhighlight'
        style={{ right: `${rightPosition}px` }}
      ></div>
    </div>
  );
};

interface IWorkDetailProps {
  workId: number;
}

const WorkDetail = ({ workId }: IWorkDetailProps): JSX.Element => {
  const [work, setWork] = useState<IWork>();

  useEffect(() => {
    setWork(works.find((work) => work.id == workId));
  }, [workId]);

  return (
    <div className='workdetailcontainer'>
      <h4>{work?.worklong}</h4>
      <h5>
        {work?.from} - {work?.to}
      </h5>
      <ul>
        {work?.descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
