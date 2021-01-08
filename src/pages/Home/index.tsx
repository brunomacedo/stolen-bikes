import { useEffect, useState } from 'react';
import axios from 'axios';
import { resquestAllIncidents } from '../../actions';
import MasterPage from '../../components/MasterPage';
import SearchForm from '../../components/SearchForm';
import ResultList from '../../components/ResultList';

export default function Home(props: object) {
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const [allIncidents, setIncidents] = useState([]);

  const getAllIncidents = async () => {
    try {
      const { incidents } = await resquestAllIncidents(props);
      setIncidents(incidents);
    } catch (error) {
      if (!axios.isCancel(error)) {
        // eslint-disable-next-line no-console
        console.log('Cancel loading...');
      }
    }
  };

  useEffect(() => {
    getAllIncidents();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  return (
    <MasterPage>
      <SearchForm />
      <ResultList list={allIncidents} />
    </MasterPage>
  );
}
