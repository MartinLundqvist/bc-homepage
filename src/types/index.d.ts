export interface IProject {
  _id: string;
  image: string;
  projectUrl: string;
  projectTitle: string;
  projectSubTitle: string;
  projectDescription: string;
  projectTools: string[];
  projectLinks: IProjectLinks[];
}

export interface IProjectLinks {
  url: string;
  logo: JSX.Element;
}

// TODO: Get rid of the numbered ID and replace by string
export interface IWork {
  id: number;
  work: string;
  worklong: string;
  from: string;
  to: string;
  descriptions: string[];
}
