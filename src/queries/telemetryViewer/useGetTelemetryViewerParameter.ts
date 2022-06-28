import { QueryFunctionContext, useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { api } from '../../services/api';

import { ITelemetryViewerParameterQueryData, TelemetryViewerParameters } from '../../dtos/TelemetryViewerData';

export type QueryData = ITelemetryViewerParameterQueryData[];

type Params = {
  param_name: TelemetryViewerParameters;
  start_time: string;
  stop_time: string;
};

async function fetchTelemetryViewerParameter({ queryKey }: QueryFunctionContext) {
  const params = !!queryKey[2] && !!queryKey[3] ? {
    param_name: queryKey[1],
    sort: 'sat_corrected',
    start_time: queryKey[2],
    stop_time: queryKey[3],
    filter_time: 'sat_corrected'
  } : {
    param_name: queryKey[1],
    sort: 'sat_corrected',
  }

  const { data } = await api.get('/get', {
    params: {...params}
  });
  
  return data;
}

export const QUERY_KEY = '@get_telemetry_viewer_parameter';

export function useGetTelemetryViewerParameter(
  telemetryViewerParamName: Params,
): UseQueryResult<QueryData, AxiosError<ITelemetryViewerParameterQueryData[]>> {
  return useQuery<QueryData, AxiosError<ITelemetryViewerParameterQueryData[]>>(
    [QUERY_KEY, ...Object.values(telemetryViewerParamName)],
    fetchTelemetryViewerParameter,
  );
}
