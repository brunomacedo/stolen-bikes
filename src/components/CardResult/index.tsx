import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment';
import { Link } from 'react-router-dom';
import bicycleImage from '../../assets/images/bicycle.svg';
import { IntIncident } from '../../interfaces/incident';
import * as S from './styled';

export default function CardResult(props: IntIncident) {
  const {
    id,
    title,
    description,
    address,
    occurred_at,
    updated_at,
    media,
    type,
  } = props;

  return (
    <S.Card key={`${id}`}>
      <S.CardWrapper>
        <Link to={`/case/${id}`}>
          <S.CardFigure>
            <LazyLoadImage
              alt={title}
              src={
                media?.image_url_thumb
                  ? media?.image_url_thumb
                  : bicycleImage
              }
            />
          </S.CardFigure>
        </Link>
        <S.CardText>
          {title && (
            <S.CardTitleLink to={`/case/${id}`}>
              {title.replace('- LINK', '')}
            </S.CardTitleLink>
          )}

          {(occurred_at || updated_at) && (
            <S.CardDateTime>
              { occurred_at && (
                <>
                  <strong>Occurred at: </strong>
                  {moment.unix(Number(occurred_at)).format('dddd, MMM d YYYY [at] hh:mmA')}
                  {' - '}
                </>
              )}

              { updated_at && (
                <>
                  <strong>Updated at: </strong>
                  {moment.unix(Number(updated_at)).format('dddd, MMM d YYYY [at] hh:mmA')}
                </>
              )}
            </S.CardDateTime>
          )}

          {description && <p>{description}</p>}
          {address && (
            <p>
              <strong>Address: </strong>
              {' '}
              {address}
            </p>
          )}
          {type && (
            <p><S.CardStatus type={type.toLowerCase()}>{type}</S.CardStatus></p>
          )}
        </S.CardText>
      </S.CardWrapper>
    </S.Card>
  );
}
