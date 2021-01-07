import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment';
import bicycleImage from '../../assets/images/bicycle.svg';
import { IntIncident } from '../../interfaces/incident';

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
    <li key={id}>
      <LazyLoadImage
        alt={title}
        height={120}
        src={
          media?.image_url_thumb
            ? media?.image_url_thumb
            : bicycleImage
        }
      />
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {address && <p>{address}</p>}
      {type && <p>{type}</p>}
      {occurred_at && <p>{moment.unix(Number(occurred_at)).format('llll')}</p>}
      {updated_at && <p>{moment.unix(Number(updated_at)).format('llll')}</p>}
    </li>
  );
}
