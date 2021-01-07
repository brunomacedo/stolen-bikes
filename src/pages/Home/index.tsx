import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';
import { resquestAllIncidents } from '../../actions';
import MasterPage from '../../components/MasterPage';
import bicycleImage from '../../assets/images/bicycle.svg';

interface PropsIncidents {
  id: string;
  title: string;
  description: string;
  address: string;
  url: string;
  source: string;
  media: PropsMedia;
  type: string;
}

interface PropsMedia {
  image_url: string;
  image_url_thumb: string;
}

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
      {allIncidents.length > 0 ? (
        <ul>
          {allIncidents.map((item: PropsIncidents) => (
            <li key={item.id}>
              {/* <img
                src={
                  item.media.image_url_thumb
                    ? item.media?.image_url_thumb
                    : bicycleImage
                }
                alt={item.title}
              /> */}

              <LazyLoadImage
                alt={item.title}
                src={
                  item.media.image_url_thumb
                    ? item.media?.image_url_thumb
                    : bicycleImage
                }
                height={100}
              />
              {item.title}
              {item.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </MasterPage>
  );
}
