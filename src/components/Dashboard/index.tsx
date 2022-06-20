import { useCallback, useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiLoader } from "react-icons/fi";
import { CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, AreaChart, Area } from "recharts";
import { Select } from "../Select";
import { Chart, Container, Description, Error, Loading, Sections, Selectors, SmallScreen, Summary, Table, Title, Value } from "./styles";
import PrismicDOM from 'prismic-dom';

import { useTheme } from "styled-components";
import { useGetTelemetryViewerParameter } from "../../queries/telemetryViewer/useGetTelemetryViewerParameter";
import { ITelemetryViewerParameterQueryData } from "../../dtos/TelemetryViewerData";
import { correctApiCalibratedUnits } from "../../utils/correctApiCalibratedUnits";
import { subDays } from "date-fns";
import { useMediaQuery } from "beautiful-react-hooks";

interface Data {
  telemetry_viewer_title: string;
  telemetry_viewer_description: {
    type: string;
    text: string;
  }[];
}

interface Props {
  id: string;
  data: Data;
}

const selectSubsystemSensorsAndParametersValues = {
  'OBC Telemetry': {
    'X-axis OBC magnetometer measure': 'P_OBC_TELEM_MAG_X',
    'Y-axis OBC magnetometer measure': 'P_OBC_TELEM_MAG_Y',
    'Z-axis OBC magnetometer measure': 'P_OBC_TELEM_MAG_Z',
    'X-axis OBC gyroscope measure': 'P_OBC_TELEM_GYRO_X',
    'Y-axis OBC gyroscope measure': 'P_OBC_TELEM_GYRO_Y',
    'Z-axis OBC gyroscope measure': 'P_OBC_TELEM_GYRO_Z',
    'Operational mode': 'P_OM_TELEM_SW_STATE'
  },
  'EPS Telemetry': {
    'Battery voltage': 'P_EP_TELEM_VBATT',
    'Input current from solar panels +/-X faces': 'P_EP_TELEM_CURIN_0',
    'Input current from solar panels +/-Y faces': 'P_EP_TELEM_CURIN_1',
    'Input current from solar panels +/-Z faces': 'P_EP_TELEM_CURIN_2',
    'Input current from the solar panel to the battery': 'P_EP_TELEM_CURSUN',
    'Output current from the battery': 'P_EP_TELEM_CURSYS',
    'Input voltage from solar panels +/-X faces': 'P_EP_TELEM_VBOOST_0',
    'Input voltage from solar panels +/-Y faces': 'P_EP_TELEM_VBOOST_1',
    'Input voltage from solar panels +/-Z faces': 'P_EP_TELEM_VBOOST_2',
    'Output current to OBC': 'P_EP_TELEM_CUROUT_0',
    'Output current to TTC': 'P_EP_TELEM_CUROUT_3',
    'Output current to Payload': 'P_EP_TELEM_CUROUT_5'
  },
  'Temperature Sensors Telemetry': {
    'Internal TTC MCU temperature': 'P_TT_TELEM_TEMP_BRD',
    'Internal OBC MCU temperature': 'P_OBC_TELEM_TEMP_MCU',
    'Internal EPS PCB temperature': 'P_EP_TELEM_TEMP_3',
    'Internal EPS battery temperature - pair 1': 'P_EP_TELEM_TEMP_4',
    'Internal EPS battery temperature - pair 2': 'P_EP_TELEM_TEMP_5',
    'External solar panel temperature on face +X': 'P_SP_TELEM_TEMP_PX',
    'External solar panel temperature on face -X': 'P_SP_TELEM_TEMP_NX',
    'External solar panel temperature on face +Y': 'P_SP_TELEM_TEMP_PY',
    'External solar panel temperature on face -Y': 'P_SP_TELEM_TEMP_NY',
    'External solar panel temperature on face +Z': 'P_SP_TELEM_TEMP_PZ',
    'External solar panel temperature on face -Z': 'P_SP_TELEM_TEMP_NZ'
  }
}
const selectIntervalsValues = ["24 hours", "7 days", "30 days", "All data"];

const selectSubsystemOrSensorKeys = Object.keys(selectSubsystemSensorsAndParametersValues);

const initialSelectedSubsystemOrSensorValue = selectSubsystemOrSensorKeys[0];
const initialSelectedParameterValue = Object.keys(selectSubsystemSensorsAndParametersValues["OBC Telemetry"])[0];
const initialSelectedIntervalValue = selectIntervalsValues[0];
const initialQueryParameter = selectSubsystemSensorsAndParametersValues[initialSelectedSubsystemOrSensorValue][initialSelectedParameterValue]

export function Dashboard({ id, data }: Props) {
  const isSmall = useMediaQuery('(max-width: 560px)');

  const theme = useTheme();
  const { telemetry_viewer_title, telemetry_viewer_description } = data;
  
  const [selectedSubsystemOrSensor, setSelectedSubsystemOrSensor] = useState(initialSelectedSubsystemOrSensorValue);
  const [selectedParameter, setSelectedParameter] = useState(initialSelectedParameterValue);
  const [selectedInterval, setSelectedInterval] = useState(initialSelectedIntervalValue);
  
  const [tablePage, setTablePage] = useState(0);

  const selectedQueryParameter = useMemo(() => {
    return selectSubsystemSensorsAndParametersValues[selectedSubsystemOrSensor][selectedParameter];
  }, [selectedSubsystemOrSensor, selectedParameter])

  const apiIntervalValues = useMemo(() => {
    let stopTime = new Date();
    
    switch (selectedInterval) {
      case '24 hours': {
        const startTime = subDays(stopTime, 1);
        return {
          startTime,
          stopTime
        }
      }
      case '7 days': {
        const startTime = subDays(stopTime, 7);
        return {
          startTime,
          stopTime
        }
      }
      case '30 days': {
        const startTime = subDays(stopTime, 30);
        return {
          startTime,
          stopTime
        }
      }
      case 'All data': {
        return {
          startTime: null,
          stopTime: null
        }
      }
      default: {
        return {
          startTime: null,
          stopTime: null
        }
      }
    }
  }, [selectedInterval]);
  
  const telemetryViewerParameterQuery = useGetTelemetryViewerParameter(
    { 
      param_name: selectedQueryParameter ?? initialQueryParameter, 
      start_time: apiIntervalValues.startTime?.toISOString(), 
      stop_time: apiIntervalValues.stopTime?.toISOString()
    }
  );
  
  const telemetryViewerParameter = useMemo(() => {
    if (telemetryViewerParameterQuery?.data?.length > 0) {
      return telemetryViewerParameterQuery.data.map(item => ({
        ...item,
        calibrated_value: selectedParameter !== 'Operational mode' ? Number(item.calibrated_value) : item.calibrated_value,
        calibrated_units: correctApiCalibratedUnits(item.calibrated_units)
      }))
    }

    return ({} as ITelemetryViewerParameterQueryData[]);
  }, [telemetryViewerParameterQuery.data]);

  const reversedTelemetryViewerParameter = useMemo(() => {
    if (telemetryViewerParameter.length > 0) {
      return [...telemetryViewerParameter].reverse();
    }

    return [];
  }, [telemetryViewerParameter])

  const pagination = useCallback((index) => {
    return tablePage * 10 + index
  }, [tablePage]);

  const totalPages = useMemo(() => {
    return Math.ceil(telemetryViewerParameter.length / 10)
  }, [telemetryViewerParameter])

  const lastPageNumberOfRows = useMemo(() => {
    const restOfDivision = telemetryViewerParameter.length % 10
    return restOfDivision === 0 ? 10 : restOfDivision
  }, [telemetryViewerParameter])

  function handleNextPage() {
    const lastPage = Math.ceil(telemetryViewerParameter.length / 10)
    if (tablePage + 1 >= lastPage) {
      return;
    }

    setTablePage(prevState => prevState + 1);
  }

  function handlePreviousPage() {
    if (tablePage - 1 < 0) {
      return;
    }

    setTablePage(prevState => prevState - 1);
  }

  const selectParameterKeys = useMemo(() => {
    return Object.keys(selectSubsystemSensorsAndParametersValues[selectedSubsystemOrSensor]);
  }, [selectedSubsystemOrSensor])

  const selectedParameterMeasureUnit = useMemo(() => {
    if (telemetryViewerParameter.length > 0) {
      const unit = telemetryViewerParameter[0].calibrated_units;
      return correctApiCalibratedUnits(unit);
    }
    return '';
  }, [telemetryViewerParameter])

  useEffect(() => {
    setTablePage(0);
  }, [selectedSubsystemOrSensor, selectedParameter])
  
  useEffect(() => {
    setSelectedParameter(Object.keys(selectSubsystemSensorsAndParametersValues[selectedSubsystemOrSensor])[0])
  }, [selectedSubsystemOrSensor])

  if (telemetryViewerParameterQuery.isError) {
    return (
      <Container id={id}>
        <div>
          <h3>{telemetry_viewer_title}</h3>

          <Description
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(telemetry_viewer_description)
            }}
          />

          <Selectors>
            <Select 
              label="Subsystem/Sensor"
              items={selectSubsystemOrSensorKeys}
              value={selectedSubsystemOrSensor}
              setValue={setSelectedSubsystemOrSensor}
            />

            <Select
              label="Parameter"
              items={selectParameterKeys}
              value={selectedParameter}
              setValue={setSelectedParameter}
            />

            <Select
              label="Interval"
              items={selectIntervalsValues}
              value={selectedInterval}
              setValue={setSelectedInterval}
            />
          </Selectors>

          <Sections>
              <Error
                onClick={() => {
                  telemetryViewerParameterQuery.refetch()
                }}
              >
                Error when tried to fetch {selectedParameter} data. Click here to try again
              </Error>
          </Sections>

          <SmallScreen>Please open this page on a larger screen to be able to see the telemetry viewer data</SmallScreen>
        </div>
      </Container>
    )
  }

  if (telemetryViewerParameterQuery.isLoading) {
    return (
      <Container id={id}>
        <div>
          <h3>{telemetry_viewer_title}</h3>

          <Description
            dangerouslySetInnerHTML={{
              __html: PrismicDOM.RichText.asHtml(telemetry_viewer_description)
            }}
          />

          <Selectors>
          <Select 
              label="Subsystem/Sensor"
              items={selectSubsystemOrSensorKeys}
              value={selectedSubsystemOrSensor}
              setValue={setSelectedSubsystemOrSensor}
              disabled
            />

            <Select
              label="Parameter"
              items={selectParameterKeys}
              value={selectedParameter}
              setValue={setSelectedParameter}
              disabled
            />

            <Select
              label="Interval"
              items={selectIntervalsValues}
              value={selectedInterval}
              setValue={setSelectedInterval}
              disabled
            />
          </Selectors>

          <Sections>
              <Loading>
                Loading data <FiLoader />
              </Loading>
          </Sections>

          <SmallScreen>Please open this page on a larger screen to be able to see the telemetry viewer data</SmallScreen>
        </div>
      </Container>
    )
  }

  return (
    <Container id={id}>
      <div>
        <h3>{telemetry_viewer_title}</h3>

        <Description
          dangerouslySetInnerHTML={{
            __html: PrismicDOM.RichText.asHtml(telemetry_viewer_description)
          }}
        />

        <SmallScreen>⚠️ The telemetry viewer can be better seen on a larger screen.</SmallScreen>

        <Selectors>
        <Select 
              label="Subsystem/Sensor"
              items={selectSubsystemOrSensorKeys}
              value={selectedSubsystemOrSensor}
              setValue={setSelectedSubsystemOrSensor}
            />

            <Select
              label="Parameter"
              items={selectParameterKeys}
              value={selectedParameter}
              setValue={setSelectedParameter}
            />

            <Select
              label="Interval"
              items={selectIntervalsValues}
              value={selectedInterval}
              setValue={setSelectedInterval}
            />
        </Selectors>

        <Sections>
          {telemetryViewerParameter.length > 0 && (
            <Chart>
              <h4>Telemetry Chart</h4>

              <div>
                <span>{selectedSubsystemOrSensor}</span>
                <ResponsiveContainer width="100%" height={500}>
                    <AreaChart 
                      data={telemetryViewerParameter}
                      reverseStackOrder
                      margin={{ top: 15, left: 30, bottom: 15 }}
                    >
                      <defs>
                        <linearGradient id="calibrated_value" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={theme.colors.green} stopOpacity={0.8}/>
                          <stop offset="95%" stopColor={theme.colors.green} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="timestamp_sat_utc_corrected" 
                        interval="preserveStartEnd" 
                        minTickGap={75}
                      >
                        <Label value='Satellite Timestamp (UTC)' offset={0} position="bottom" />
                      </XAxis>
                      <YAxis domain={['auto', 'auto']}>
                      {!!selectedParameterMeasureUnit ? (
                        <Label value={`${selectedParameter} (${selectedParameterMeasureUnit})`} position="insideLeft" />
                      ) : (
                        <Label value={selectedParameter} position="insideLeft" />
                      )}
                      </YAxis>
                      <Tooltip 
                        labelStyle={{ color: theme.colors.blue }}
                        formatter={value => [`${value} ${selectedParameterMeasureUnit}`, selectedParameter]} 
                        labelFormatter={value => isSmall ? `${value}` : `Satellite Timestamp (UTC): ${value}`}
                      />
                      {
                        selectedParameter !== 'Operational mode' ? (
                          <Area dot type="monotone" dataKey="calibrated_value" stroke={theme.colors.green} fill="url(#calibrated_value)" fillOpacity={1} />
                        ) : (
                          <>
                            <Area dot type="monotone" dataKey="calibrated_value" stroke={theme.colors.green} fill="url(#calibrated_value)" fillOpacity={1} />
                            <Area dot type="monotone" dataKey="raw_value" stroke={theme.colors.green} tooltipType="none" fill="url(#calibrated_value)" fillOpacity={1} />
                          </>
                        ) 
                      }
                    </AreaChart>
                </ResponsiveContainer>
              </div>
            </Chart>
          )}

          {reversedTelemetryViewerParameter.length > 0 && (
            <Table>
              <h4>Telemetry Table</h4>

              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Call Sign</th>
                    {!!selectedParameterMeasureUnit 
                    ? (
                      <th>Value ({selectedParameterMeasureUnit})</th>
                    ) : (
                      <th>Value</th>
                    )}
                    <th>Satellite Timestamp (UTC)</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Array.from(Array(tablePage + 1 === totalPages ? lastPageNumberOfRows : 10).keys()).map((_, index) => (
                      <tr key={reversedTelemetryViewerParameter[pagination(index)].timestamp_sat_utc_corrected + reversedTelemetryViewerParameter[pagination(index)].timestamp_gs_utc}>
                        <td>{selectedParameter}</td>
                        <td>PT2ENE</td>
                        <td>{reversedTelemetryViewerParameter[pagination(index)].calibrated_value}</td>
                        <td>{reversedTelemetryViewerParameter[pagination(index)].timestamp_sat_utc_corrected}</td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>

              <footer>
                <button onClick={handlePreviousPage}><FiArrowLeft /></button>
                <span>Page {tablePage + 1} of {totalPages}</span>
                <button onClick={handleNextPage}><FiArrowRight /></button>
              </footer>
            </Table>
          )}
        </Sections>
      </div>
    </Container>
  )
}