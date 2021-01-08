import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';
import { resquestAllIncidents } from '../../actions';
import MasterPage from '../../components/MasterPage';
import SearchForm from '../../components/SearchForm';
import ResultList from '../../components/ResultList';

export default function Home() {
  // const params: { search: string } = useLocation();
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const [allIncidents, setIncidents] = useState([]);

  // const urlParams = new URLSearchParams(params?.search);
  // const occurred_before: string = urlParams?.get('occurred_before');

  const getAllIncidents = async () => {
    try {
      const { incidents } = await resquestAllIncidents({
        page: 1,
        per_page: 10,
        incident_type: 'theft',
        occurred_before: '',
        occurred_after: '',
      });

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
