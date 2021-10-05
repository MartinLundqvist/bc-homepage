export interface IWork {
  id: number;
  work: string;
  descriptions: string[];
}

const works: IWork[] = [
  {
    id: 0,
    work: 'First job',
    descriptions: [
      'Description description description description description description description description description description 1',
      'Description description description description description description description description description description 1',
      'Description description description description description description description description description description 1',
    ],
  },
  {
    id: 1,
    work: 'Second job',
    descriptions: [
      'Description description description description description description description description description description 2',
      'Description description description description description description description description description description 2',
      'Description description description description description description description description description description 2',
    ],
  },
  {
    id: 2,
    work: 'Third job',
    descriptions: [
      'Description description description description description description description description description description 3',
      'Description description description description description description description description description description 3',
      'Description description description description description description description description description description 3',
    ],
  },
  {
    id: 3,
    work: 'Fourth job',
    descriptions: [
      'Description description description description description description description description description description 4',
      'Description description description description description description description description description description 4',
      'Description description description description description description description description description description 4',
    ],
  },
];

export default works;
