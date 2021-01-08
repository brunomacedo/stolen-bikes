import { IntIncident } from '../../interfaces/incident';
import Loading from '../Loading';
import CardResult from '../CardResult';

export default function ResultList({ list }: any) {
  if (list.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <ul>
        {list.map((item: IntIncident) => (
          item && (
            <CardResult
              id={item.id}
              title={item.title}
              description={item.description}
              address={item.address}
              occurred_at={item.occurred_at}
              updated_at={item.updated_at}
              media={item.media}
              type={item.type}
            />
          )
        ))}
      </ul>
    </>
  );
}
