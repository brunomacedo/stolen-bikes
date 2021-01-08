import moment from 'moment';
import {
  createContext, useState, ReactNode, FC,
} from 'react';

interface DefaultSearch {
  search: PropsSearch;
  setSearch: any;
  allIncidents: any;
  updateIncidents: any;
}

interface PropsSearch {
  input: string;
  dateFrom: Date;
  dateTo: Date;
}

interface Props {
  children: ReactNode;
}

const limitDays: any = moment().subtract(3, 'days');

const defaultValue: DefaultSearch = {
  setSearch: () => {},
  search: {
    input: '',
    dateFrom: new Date(limitDays),
    dateTo: new Date(),
  },
  allIncidents: [],
  updateIncidents: () => {},
};

const AppContext = createContext(defaultValue);

export const AppProvider: FC<Props> = ({ children }: Props) => {
  const [search, setSearch] = useState<PropsSearch>({
    input: '',
    dateFrom: new Date(limitDays),
    dateTo: new Date(),
  });
  const [allIncidents, setIncidents] = useState<any[]>([]);

  const updateIncidents = (value: any[]) => {
    setIncidents(value);
  };

  return (
    <AppContext.Provider value={{
      search,
      setSearch,
      allIncidents,
      updateIncidents,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppConsumer = AppContext.Consumer;

export default AppContext;
