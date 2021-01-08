import { IntIncident } from '../../interfaces/incident';
import Loading from '../Loading';
import CardResult from '../CardResult';
import * as S from './styled';

export default function ResultList({ list }: any) {
  if (list.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <S.Form>
        <S.Input type="text" placeholder="Search case descriptions" />
        <S.Input type="date" placeholder="From" />
        <S.Input type="date" placeholder="To" />
        <S.Button type="submit">Find cases</S.Button>
      </S.Form>

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
