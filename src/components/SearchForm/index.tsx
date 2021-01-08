import DatePicker from 'react-datepicker';
import { useState } from 'react';
import moment from 'moment';
import * as S from './styled';

export default function SearchForm() {
  const limitDays: any = moment().subtract(3, 'days');
  const [dateFrom, setDateFrom] = useState<Date>(new Date(limitDays));
  const [dateTo, setDateTo] = useState<Date>(new Date());

  return (
    <S.Form>
      <input type="text" placeholder="Search case descriptions" />
      <DatePicker
        name="dateFrom"
        placeholderText="from"
        dateFormat="dd/MM/yyyy"
        onChange={(value: Date) => setDateFrom(value)}
        selected={new Date(dateFrom)}
      />
      <DatePicker
        name="dateTo"
        placeholderText="from"
        dateFormat="dd/MM/yyyy"
        onChange={(value: Date) => setDateTo(value)}
        selected={dateTo}
      />
      <S.Button type="submit">Find cases</S.Button>
    </S.Form>
  );
}
