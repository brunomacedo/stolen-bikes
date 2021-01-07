import { APIResquest } from '../utils';

export function resquestAllIncidents(params: object) {
  return APIResquest({
    uri: 'incidents',
    method: 'GET',
    params,
  });
}

export function resquestIncidentDetail(id: string) {
  return APIResquest({
    uri: `incidents/:${id}`,
    method: 'GET',
  });
}
