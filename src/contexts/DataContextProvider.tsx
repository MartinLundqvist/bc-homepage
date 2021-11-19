import { createContext, useEffect, useState, useContext } from 'react';
import { IProject, IWork } from '../types';

// TODO: Remove these once proper API call implemented
import projects from '../assets/projectsDB';
import works from '../assets/workDB';

class DataAPI {
  private projects: IProject[];

  private works: IWork[] | null;

  constructor(projects: IProject[], works: IWork[] | null) {
    this.projects = projects;
    this.works = works;
  }

  public getProjects = () => this.projects;
  public getWorks = () => this.works;
}

interface IDataContext {
  dataAPI: DataAPI | null;
  isLoading: boolean;
  isError: boolean;
}

const DataContext = createContext<IDataContext>({} as IDataContext);

interface IDataContextProps {
  children: React.ReactNode;
}

const DataContextProvider = ({ children }: IDataContextProps): JSX.Element => {
  const [dataAPI, setDataAPI] = useState<DataAPI | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        setDataAPI(new DataAPI(projects, works));
      } catch (error) {
        setIsError(true);
        console.log(`An error ocurred: ${JSON.stringify(error)}`);
      } finally {
        setIsLoading(false);
      }
    };

    if (!dataAPI) loadData();
  }, []);

  return (
    <DataContext.Provider value={{ dataAPI, isError, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

export default DataContextProvider;
