import { IntIncident } from '../../interfaces/incident';
import Loading from '../Loading';
import CardResult from '../CardResult';
import * as S from './styled';

export default function ResultList({ list }: any) {
  return (
    <>
      {list.length === 0 ? (
        <Loading />
      ) : (
        <>
          <S.TotalCount>
            <strong>Total: </strong>
            {list.length}
          </S.TotalCount>
          <S.Unlist>
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
          </S.Unlist>
        </>
      )}
    </>
  );
}
