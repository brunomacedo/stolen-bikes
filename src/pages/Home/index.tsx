import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import { resquestAllIncidents } from '../../actions';
import AppContext from '../../context/App';
import MasterPage from '../../components/MasterPage';
import SearchForm from '../../components/SearchForm';
import ResultList from '../../components/ResultList';
import Loading from '../../components/Loading';

export default function Home() {
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const [currentPage, setCurrentPage] = useState(1);
  const { allIncidents, updateIncidents } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const getAllIncidents = async (page: number) => {
    try {
      const { incidents } = await resquestAllIncidents({
        page,
        per_page: 10,
        incident_type: 'theft',
        occurred_before: '',
        occurred_after: '',
      });

      updateIncidents(incidents);
      setIsLoading(false);
    } catch (error) {
      if (!axios.isCancel(error)) {
        // eslint-disable-next-line no-console
        console.log('Oops, something went wrong');
      }
    }
  };

  const onHandlePageChange = async (page: number) => {
    setCurrentPage(page);
    await getAllIncidents(page);
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  useEffect(() => {
    getAllIncidents(currentPage);

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, [isLoading]);

  return (
    <MasterPage>
      <SearchForm />
      {!isLoading ? (
        <>
          <ResultList list={allIncidents} />
          {allIncidents.length > 0 && (
          <Pagination
            firstPageText="<< First"
            prevPageText="< Prev"
            nextPageText="Next >"
            lastPageText="Last >>"
            innerClass="list-pagination"
            linkClass="list-pagination--link"
            activeLinkClass="list-pagination--active"
            activePage={currentPage}
            totalItemsCount={100}
            pageRangeDisplayed={3}
            onChange={(page: number) => onHandlePageChange(page)}
          />
          )}
        </>
      ) : (
        <Loading />
      )}

    </MasterPage>
  );
}
