import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { resquestIncidentDetail } from '../../actions';
import Loading from '../../components/Loading';
import MasterPage from '../../components/MasterPage';
import { IntIncident } from '../../interfaces/incident';
import bicycleImage from '../../assets/images/bicycle.svg';
import * as S from './styled';

const GOOGLE_KEY = 'AIzaSyDqBA8vpdp6l470wo2wXQROAuLY5ELRm64';

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
      {Object.keys(incidentDetail).length === 0 ? (
        <Loading />
      ) : (
        <>
          <S.BackLink to="/">&lsaquo;&lsaquo; Back</S.BackLink>
          <S.DetailContainer>
            <S.CardFigure>
              <LazyLoadImage
                alt={incidentDetail.title}
                src={
                incidentDetail.media?.image_url
                  ? incidentDetail.media?.image_url
                  : bicycleImage
              }
              />
            </S.CardFigure>
            <S.WrapperText>
              <S.Title>{incidentDetail.title}</S.Title>
              <S.Subtext>
                { incidentDetail.occurred_at && (
                  <>
                    <strong>Stolen </strong>
                    {moment.unix(Number(incidentDetail.occurred_at)).format('MMM Do YYYY, hh:mmA')}
                    {' at '}
                  </>
                )}

                {incidentDetail.address && incidentDetail.address}
              </S.Subtext>

              {incidentDetail.description && (
                <S.WrapperDescription>
                  <h3>Description of incident</h3>
                  <S.Description>{incidentDetail.description}</S.Description>
                </S.WrapperDescription>
              )}

              <S.GoogleMap>
                <iframe
                  title="Google Maps"
                  src={`https://www.google.com/maps/embed/v1/search?key=${GOOGLE_KEY}&q=${incidentDetail.address}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </S.GoogleMap>
            </S.WrapperText>
          </S.DetailContainer>
        </>
      )}
    </MasterPage>
  );
}
