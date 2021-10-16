export interface IWork {
  id: number;
  work: string;
  worklong: string;
  from: string;
  to: string;
  descriptions: string[];
}

const works: IWork[] = [
  {
    id: 0,
    work: 'Arundo',
    worklong: 'Arundo Analytics',
    from: '2018',
    to: 'present',
    descriptions: [
      "Currently COO at Arundo Analytics, leading Arundo's global operations including sales, delivery, products, engineering and data science.",
      'Formerly, globally responsible for developing and maintaining Arundo’s relationships with strategic industrial partners. ',
    ],
  },
  {
    id: 1,
    work: 'McKinsey',
    worklong: 'Mckinsey & Company',
    from: '2001',
    to: '2017',
    descriptions: [
      "Partner (2011-2017): Leader of Public Sector in Digital McKinsey Europe. Convener of McKinsey's global Digital Government team.",
      "Associate Partner (2007-2010): Client leadership roles at a number of international Telecom and Banking clients in Europe and South-East Asia. Leader of McKinsey's Outsourcing & Offshoring service line in Europe.",
      'Engagement Manager (2004-2006): Project leadership roles on technology and operations projects primarily in the Telecommunications and Banking sectors.',
      'Jr/Associate (2001-2003): Work stream leadership roles on technology and operations strategy projects with primary focus on Telecommunications sector (service providers and equipment manufacturers) across a variety of European clients. ',
    ],
  },
  {
    id: 2,
    work: 'AT Kearney',
    worklong: 'AT Kearny',
    from: '2000',
    to: '2001',
    descriptions: [
      'Master Thesis investigating opportunities to use internet for direct procurement',
    ],
  },
  {
    id: 3,
    work: 'UBS',
    worklong: 'Union Bank of Switzerland',
    from: '1998',
    to: '1999',
    descriptions: [
      'Sabbatical year as software developer at Union Bank of Switzerland',
      'Financial Timeseries Technology R&D team (Calanda) - Database development',
    ],
  },
  {
    id: 4,
    work: 'ETH Zurich',
    worklong: 'Swiss Federal Institute of Technology',
    from: '1997',
    to: '1998',
    descriptions: [
      'Exchange student att Swiss Federal Institute of Technology',
      'M Sc studies in computer science and business management',
    ],
  },
  {
    id: 5,
    work: 'LiTH',
    worklong: 'Linköping Institute of Technology',
    from: '1995',
    to: '2000',
    descriptions: [
      'M Sc studies at Linköping Institute of Technology, Sweden',
      'Major in International Industrial Management & Engineering, minor in Corporate Finance',
    ],
  },
];

export default works;
