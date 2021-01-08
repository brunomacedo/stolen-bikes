import { useEffect, useContext } from 'react';
import axios from 'axios';
import { resquestAllIncidents } from '../../actions';
import AppContext from '../../context/App';
import MasterPage from '../../components/MasterPage';
import SearchForm from '../../components/SearchForm';
import ResultList from '../../components/ResultList';

export default function Home() {
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const { allIncidents, updateIncidents } = useContext(AppContext);

  const getAllIncidents = async () => {
    try {
      const { incidents } = await resquestAllIncidents({
        page: 1,
        per_page: 10,
        incident_type: 'theft',
        occurred_before: '',
        occurred_after: '',
      });

      updateIncidents(incidents);
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
