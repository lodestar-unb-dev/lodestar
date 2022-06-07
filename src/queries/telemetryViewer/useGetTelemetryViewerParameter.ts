import { QueryFunctionContext, useQuery, UseQueryResult } from 'react-query';
import { AxiosError } from 'axios';

import { api } from '../../services/api';

import { ITelemetryViewerParameterQueryData, TelemetryViewerParameters } from '../../dtos/TelemetryViewerData';

export type QueryData = ITelemetryViewerParameterQueryData[];

type Params = TelemetryViewerParameters;

async function fetchTelemetryViewerParameter({ queryKey }: QueryFunctionContext) {
  const { data } = await api.get('/get', {
    params: {
      param_name: queryKey[1]
    }
  });

  return data;
}

export const QUERY_KEY = '@get_telemetry_viewer_parameter';

export function useGetTelemetryViewerParameter(
  telemetryViewerParamName: Params,
): UseQueryResult<QueryData, AxiosError<ITelemetryViewerParameterQueryData[]>> {
  return useQuery<QueryData, AxiosError<ITelemetryViewerParameterQueryData[]>>(
    [QUERY_KEY, telemetryViewerParamName],
    fetchTelemetryViewerParameter,
  );
}
