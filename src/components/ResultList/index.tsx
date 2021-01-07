import { IntIncident } from '../../interfaces/incident';
import CardResult from '../CardResult';

export default function ResultList({ list }: any) {
  return (
    <>
      {list.length > 0 ? (
        <ul>
          {list.map((item: IntIncident) => (
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
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
