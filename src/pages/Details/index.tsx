import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { resquestIncidentDetail } from '../../actions';
import MasterPage from '../../components/MasterPage';
import { IntIncident } from '../../interfaces/incident';

export default function Details() {
  const params: { id: string } = useParams();
  const { CancelToken } = axios;
  const source = CancelToken.source();

  const [incidentDetail, setIncident] = useState<IntIncident>({});

  const getIncidentDetail = async () => {
    try {
      const { incident } = await resquestIncidentDetail(params?.id);
      setIncident(incident);
    } catch (error) {
      if (!axios.isCancel(error)) {
        // eslint-disable-next-line no-console
        console.log('Cancel loading...');
      }
    }
  };

  useEffect(() => {
    getIncidentDetail();

    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  return (
    <MasterPage>
      <h1>{incidentDetail.title}</h1>
    </MasterPage>
  );
}
