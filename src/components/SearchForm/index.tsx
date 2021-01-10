import axios from 'axios';
import DatePicker from 'react-datepicker';
import { useContext } from 'react';
// import moment from 'moment';
import AppContext from '../../context/App';
import * as S from './styled';

import { resquestAllIncidents } from '../../actions';

export default function SearchForm() {
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const { search, setSearch } = useContext(AppContext);
  const { updateIncidents } = useContext(AppContext);

  const getAllIncidents = async () => {
    try {
      const { incidents } = await resquestAllIncidents({
        page: 1,
        // occurred_before: moment(search.dateFrom).unix(),
        // occurred_after: moment(search.dateTo).unix(),
        incident_type: 'theft',
        per_page: 10,
        query: search.input,
      });

      updateIncidents(incidents);
    } catch (error) {
      if (!axios.isCancel(error)) {
        // eslint-disable-next-line no-console
        console.log('Cancel loading...');
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getAllIncidents();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <input
        name="query"
        type="text"
        placeholder="Search case descriptions"
        value={search.input}
        onChange={(e) => setSearch({
          ...search,
          input: e.target.value,
        })}
      />
      <DatePicker
        name="occurred_before"
        placeholderText="from"
        dateFormat="dd/MM/yyyy"
        selected={search.dateFrom}
        onChange={(value: Date) => setSearch({
          ...search,
          dateFrom: value,
        })}
      />
      <DatePicker
        name="occurred_after"
        placeholderText="to"
        dateFormat="dd/MM/yyyy"
        selected={search.dateTo}
        onChange={(value: Date) => setSearch({
          ...search,
          dateTo: value,
        })}
      />
      <S.Button
        type="submit"
      >
        Find cases
      </S.Button>
    </S.Form>
  );
}
