import { useEffect, useState } from 'react';
import { resquestAllIncidents } from '../../actions';
import MasterPage from '../../components/MasterPage';

interface PropsIncidents {
  id: string;
  title: string;
  description: string;
  address: string;
  url: string;
  source: string;
  media: string;
  type: string;
}

export default function Home(props: object) {
  const [allIncidents, setIncidents] = useState([]);

  useEffect(() => {
    getAllIncidents();
  }, []);

  const getAllIncidents = async () => {
    const { incidents } = await resquestAllIncidents(props);
    setIncidents(incidents);
  };

  return (
    <MasterPage>
      {allIncidents.length > 0 ? (
        <ul>
          {allIncidents.map((item: PropsIncidents) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </MasterPage>
  );
}
