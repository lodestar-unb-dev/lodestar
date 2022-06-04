import { useCallback, useEffect, useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer, Label } from "recharts";
import { Select } from "../Select";
import { Card, Chart, Container, Sections, Selectors, Summary, Table, Title, Value } from "./styles";

import P_OBC_TELEM_MAG_X from '../../mocks/P_OBC_TELEM_MAG_X.json';
import P_OBC_TELEM_MAG_Y from '../../mocks/P_OBC_TELEM_MAG_Y.json';
import P_OBC_TELEM_MAG_Z from '../../mocks/P_OBC_TELEM_MAG_Z.json';
import P_OBC_TELEM_GYRO_X from '../../mocks/P_OBC_TELEM_GYRO_X.json';
import P_OBC_TELEM_GYRO_Y from '../../mocks/P_OBC_TELEM_GYRO_Y.json';
import P_OBC_TELEM_GYRO_Z from '../../mocks/P_OBC_TELEM_GYRO_Z.json';
import P_OM_TELEM_SW_STATE from '../../mocks/P_OM_TELEM_SW_STATE.json';

import P_EP_TELEM_VBATT from '../../mocks/P_EP_TELEM_VBATT.json';
import P_EP_TELEM_CURIN_0 from '../../mocks/P_EP_TELEM_CURIN_0.json';
import P_EP_TELEM_CURIN_1 from '../../mocks/P_EP_TELEM_CURIN_1.json';
import P_EP_TELEM_CURIN_2 from '../../mocks/P_EP_TELEM_CURIN_2.json';
import P_EP_TELEM_CURSUN from '../../mocks/P_EP_TELEM_CURSUN.json';
import P_EP_TELEM_CURSYS from '../../mocks/P_EP_TELEM_CURSYS.json';
import P_EP_TELEM_VBOOST_0 from '../../mocks/P_EP_TELEM_VBOOST_0.json';
import P_EP_TELEM_VBOOST_1 from '../../mocks/P_EP_TELEM_VBOOST_1.json';
import P_EP_TELEM_VBOOST_2 from '../../mocks/P_EP_TELEM_VBOOST_2.json';
import P_EP_TELEM_CUROUT_0 from '../../mocks/P_EP_TELEM_CUROUT_0.json';
import P_EP_TELEM_CUROUT_3 from '../../mocks/P_EP_TELEM_CUROUT_3.json';
import P_EP_TELEM_CUROUT_5 from '../../mocks/P_EP_TELEM_CUROUT_5.json';

import P_TT_TELEM_TEMP_BRD from '../../mocks/P_TT_TELEM_TEMP_BRD.json';
import P_OBC_TELEM_TEMP_MCU from '../../mocks/P_OBC_TELEM_TEMP_MCU.json';
import P_EP_TELEM_TEMP_3 from '../../mocks/P_EP_TELEM_TEMP_3.json';
import P_EP_TELEM_TEMP_4 from '../../mocks/P_EP_TELEM_TEMP_4.json';
import P_EP_TELEM_TEMP_5 from '../../mocks/P_EP_TELEM_TEMP_5.json';
import P_SP_TELEM_TEMP_PX from '../../mocks/P_SP_TELEM_TEMP_PX.json';
import P_SP_TELEM_TEMP_NX from '../../mocks/P_SP_TELEM_TEMP_NX.json';
import P_SP_TELEM_TEMP_PY from '../../mocks/P_SP_TELEM_TEMP_PY.json';
import P_SP_TELEM_TEMP_NY from '../../mocks/P_SP_TELEM_TEMP_NY.json';
import P_SP_TELEM_TEMP_PZ from '../../mocks/P_SP_TELEM_TEMP_PZ.json';
import P_SP_TELEM_TEMP_NZ from '../../mocks/P_SP_TELEM_TEMP_NZ.json';

import { useTheme } from "styled-components";

const MockedAPISelectValues = {
  'OBC Telemetry': {
    'P_OBC_TELEM_MAG_X': 'X-axis OBC magnetometer measure',
    'P_OBC_TELEM_MAG_Y': 'Y-axis OBC magnetometer measure',
    'P_OBC_TELEM_MAG_Z': 'Z-axis OBC magnetometer measure',
    'P_OBC_TELEM_GYRO_X': 'X-axis OBC gyroscope measure',
    'P_OBC_TELEM_GYRO_Y': 'Y-axis OBC gyroscope measure',
    'P_OBC_TELEM_GYRO_Z': 'Z-axis OBC gyroscope measure',
    'P_OM_TELEM_SW_STATE': 'Operational mode'
  },
  'EPS Telemetry': {
    'P_EP_TELEM_VBATT': 'Battery voltage',
    'P_EP_TELEM_CURIN_0': 'Input current from solar panels +/-X faces',
    'P_EP_TELEM_CURIN_1': 'Input current from solar panels +/-Y faces',
    'P_EP_TELEM_CURIN_2': 'Input current from solar panels +/-Z faces',
    'P_EP_TELEM_CURSUN': 'Input current from the solar panel to the battery',
    'P_EP_TELEM_CURSYS': 'Output current from the battery',
    'P_EP_TELEM_VBOOST_0': 'Input voltage from solar panels +/-X faces',
    'P_EP_TELEM_VBOOST_1': 'Input voltage from solar panels +/-Y faces',
    'P_EP_TELEM_VBOOST_2': 'Input voltage from solar panels +/-Z faces',
    'P_EP_TELEM_CUROUT_0': 'Output current to OBC',
    'P_EP_TELEM_CUROUT_3': 'Output current to TTC',
    'P_EP_TELEM_CUROUT_5': 'Output current to Payload'
  },
  'Temperature Telemetry': {
    'P_TT_TELEM_TEMP_BRD': 'Internal TTC MCU temperature',
    'P_OBC_TELEM_TEMP_MCU': 'Internal OBC MCU temperature',
    'P_EP_TELEM_TEMP_3': 'Internal EPS PCB temperature',
    'P_EP_TELEM_TEMP_4': 'Internal EPS battery temperature - pair 1',
    'P_EP_TELEM_TEMP_5': 'Internal EPS battery temperature - pair 2',
    'P_SP_TELEM_TEMP_PX': 'External solar panel temperature on face +X',
    'P_SP_TELEM_TEMP_NX': 'External solar panel temperature on face -X',
    'P_SP_TELEM_TEMP_PY': 'External solar panel temperature on face +Y',
    'P_SP_TELEM_TEMP_NY': 'External solar panel temperature on face -Y',
    'P_SP_TELEM_TEMP_PZ': 'External solar panel temperature on face +Z',
    'P_SP_TELEM_TEMP_NZ': 'External solar panel temperature on face -Z',
  }
}

const MockedAPIUnits = {
  'OBC Telemetry': {
    'X-axis OBC magnetometer measure': 'G',
    'Y-axis OBC magnetometer measure': 'G',
    'Z-axis OBC magnetometer measure': 'G',
    'X-axis OBC gyroscope measure': 'deg/s',
    'Y-axis OBC gyroscope measure': 'deg/s',
    'Z-axis OBC gyroscope measure': 'deg/s',
    'Operational mode': '',
  },
  'EPS Telemetry': {
    'Battery voltage': 'mV',
    'Input current from solar panels +/-X faces': 'mA',
    'Input current from solar panels +/-Y faces': 'mA',
    'Input current from solar panels +/-Z faces': 'mA',
    'Input current from the solar panel to the battery': 'mA',
    'Output current from the battery': 'mA',
    'Input voltage from solar panels +/-X faces': 'mV',
    'Input voltage from solar panels +/-Y faces': 'mV',
    'Input voltage from solar panels +/-Z faces': 'mV',
    'Output current to OBC': 'mA',
    'Output current to TTC': 'mA',
    'Output current to Payload': 'mA'
  },
  'Temperature Telemetry': {
    'Internal TTC MCU temperature': 'ºC',
    'Internal OBC MCU temperature': 'ºC',
    'Internal EPS PCB temperature': 'ºC',
    'Internal EPS battery temperature - pair 1': 'ºC',
    'Internal EPS battery temperature - pair 2': 'ºC',
    'External solar panel temperature on face +X': 'ºC',
    'External solar panel temperature on face -X': 'ºC',
    'External solar panel temperature on face +Y': 'ºC',
    'External solar panel temperature on face -Y': 'ºC',
    'External solar panel temperature on face +Z': 'ºC',
    'External solar panel temperature on face-X': 'ºC'
  }
}

const MockedAPIData = {
  'OBC Telemetry': {
    'X-axis OBC magnetometer measure': P_OBC_TELEM_MAG_X,
    'Y-axis OBC magnetometer measure': P_OBC_TELEM_MAG_Y,
    'Z-axis OBC magnetometer measure': P_OBC_TELEM_MAG_Z,
    'X-axis OBC gyroscope measure': P_OBC_TELEM_GYRO_X,
    'Y-axis OBC gyroscope measure': P_OBC_TELEM_GYRO_Y,
    'Z-axis OBC gyroscope measure': P_OBC_TELEM_GYRO_Z,
    'Operational mode': P_OM_TELEM_SW_STATE,
  },
  'EPS Telemetry': {
    'Battery voltage' : P_EP_TELEM_VBATT,
    'Input current from solar panels +/-X faces' : P_EP_TELEM_CURIN_0,
    'Input current from solar panels +/-Y faces' : P_EP_TELEM_CURIN_1,
    'Input current from solar panels +/-Z faces' : P_EP_TELEM_CURIN_2,
    'Input current from the solar panel to the battery' : P_EP_TELEM_CURSUN,
    'Output current from the battery' : P_EP_TELEM_CURSYS,
    'Input voltage from solar panels +/-X faces' : P_EP_TELEM_VBOOST_0,
    'Input voltage from solar panels +/-Y faces' : P_EP_TELEM_VBOOST_1,
    'Input voltage from solar panels +/-Z faces' : P_EP_TELEM_VBOOST_2,
    'Output current to OBC' : P_EP_TELEM_CUROUT_0,
    'Output current to TTC' : P_EP_TELEM_CUROUT_3,
    'Output current to Payload' : P_EP_TELEM_CUROUT_5
  },
  'Temperature Telemetry': {
    'Internal TTC MCU temperature': P_TT_TELEM_TEMP_BRD,
    'Internal OBC MCU temperature': P_OBC_TELEM_TEMP_MCU,
    'Internal EPS PCB temperature': P_EP_TELEM_TEMP_3,
    'Internal EPS battery temperature - pair 1': P_EP_TELEM_TEMP_4,
    'Internal EPS battery temperature - pair 2': P_EP_TELEM_TEMP_5,
    'External solar panel temperature on face +X': P_SP_TELEM_TEMP_PX,
    'External solar panel temperature on face -X': P_SP_TELEM_TEMP_NX,
    'External solar panel temperature on face +Y': P_SP_TELEM_TEMP_PY,
    'External solar panel temperature on face -Y': P_SP_TELEM_TEMP_NY,
    'External solar panel temperature on face +Z': P_SP_TELEM_TEMP_PZ,
    'External solar panel temperature on face -Z': P_SP_TELEM_TEMP_NZ
  }
}

const MockedAPIDataTable = {
  'OBC Telemetry': {
    'X-axis OBC magnetometer measure': [...P_OBC_TELEM_MAG_X].reverse(),
    'Y-axis OBC magnetometer measure': [...P_OBC_TELEM_MAG_Y].reverse(),
    'Z-axis OBC magnetometer measure': [...P_OBC_TELEM_MAG_Z].reverse(),
    'X-axis OBC gyroscope measure': [...P_OBC_TELEM_GYRO_X].reverse(),
    'Y-axis OBC gyroscope measure': [...P_OBC_TELEM_GYRO_Y].reverse(),
    'Z-axis OBC gyroscope measure': [...P_OBC_TELEM_GYRO_Z].reverse(),
    'Operational mode': [...P_OM_TELEM_SW_STATE].reverse(),
  },
  'EPS Telemetry': {
    'Battery voltage': [...P_EP_TELEM_VBATT].reverse(),
    'Input current from solar panels +/-X faces': [...P_EP_TELEM_CURIN_0].reverse(),
    'Input current from solar panels +/-Y faces': [...P_EP_TELEM_CURIN_1].reverse(),
    'Input current from solar panels +/-Z faces': [...P_EP_TELEM_CURIN_2].reverse(),
    'Input current from the solar panel to the battery': [...P_EP_TELEM_CURSUN].reverse(),
    'Output current from the battery': [...P_EP_TELEM_CURSYS].reverse(),
    'Input voltage from solar panels +/-X faces': [...P_EP_TELEM_VBOOST_0].reverse(),
    'Input voltage from solar panels +/-Y faces': [...P_EP_TELEM_VBOOST_1].reverse(),
    'Input voltage from solar panels +/-Z faces': [...P_EP_TELEM_VBOOST_2].reverse(),
    'Output current to OBC': [...P_EP_TELEM_CUROUT_0].reverse(),
    'Output current to TTC': [...P_EP_TELEM_CUROUT_3].reverse(),
    'Output current to Payload': [...P_EP_TELEM_CUROUT_5].reverse(),
  },
  'Temperature Telemetry': {
    'Internal TTC MCU temperature': [...P_TT_TELEM_TEMP_BRD].reverse(),
    'Internal OBC MCU temperature': [...P_OBC_TELEM_TEMP_MCU].reverse(),
    'Internal EPS PCB temperature': [...P_EP_TELEM_TEMP_3].reverse(),
    'Internal EPS battery temperature - pair 1': [...P_EP_TELEM_TEMP_4].reverse(),
    'Internal EPS battery temperature - pair 2': [...P_EP_TELEM_TEMP_5].reverse(),
    'External solar panel temperature on face +X': [...P_SP_TELEM_TEMP_PX].reverse(),
    'External solar panel temperature on face -X': [...P_SP_TELEM_TEMP_NX].reverse(),
    'External solar panel temperature on face +Y': [...P_SP_TELEM_TEMP_PY].reverse(),
    'External solar panel temperature on face -Y': [...P_SP_TELEM_TEMP_NY].reverse(),
    'External solar panel temperature on face +Z': [...P_SP_TELEM_TEMP_PZ].reverse(),
    'External solar panel temperature on face -Z': [...P_SP_TELEM_TEMP_NZ].reverse()
  }
}

const apiAvailableIntervals = ["1 Hour", "6 Hours", "12 Hours", "24 Hours", "7 days", "30 days", "90 days", "180 days", "360 days"]

export function Dashboard() {
  const theme = useTheme();

  const [selectedDataMeasure, setSelectedDataMeasure] = useState(Object.keys(MockedAPISelectValues)[0]);
  const [selectedDataComponent, setSelectedDataComponent] = useState(Object.values(MockedAPISelectValues[selectedDataMeasure])[0] as string);
  const [selectedDataInterval, setSelectedDataInterval] = useState('24 Hours');
  const [tablePage, setTablePage] = useState(0);

  const pagination = useCallback((index) => {
    return tablePage * 10 + index
  }, [tablePage]);

  const selectedDataToShow = useMemo(() => {
    console.log(MockedAPIData[selectedDataMeasure][selectedDataComponent]?.length)
    return MockedAPIData[selectedDataMeasure][selectedDataComponent] ?? []
  }, [selectedDataMeasure, selectedDataComponent]);

  console.log(selectedDataToShow.length);

  const selectedTableDataToShow = useMemo(() => {
    return MockedAPIDataTable[selectedDataMeasure][selectedDataComponent] ?? []
  }, [selectedDataMeasure, selectedDataComponent]);

  const selectedUnitOfDataToShow = useMemo(() => {
    return MockedAPIUnits[selectedDataMeasure][selectedDataComponent]
  }, [selectedDataMeasure, selectedDataComponent]);

  const totalPages = useMemo(() => {
    return Math.ceil(selectedDataToShow.length / 10)
  }, [selectedDataMeasure, selectedDataComponent, selectedDataToShow])

  const lastPageNumberOfRows = useMemo(() => {
    return selectedDataToShow.length % 10 === 0 ? 10 : selectedDataToShow.length % 10
  }, [selectedDataToShow])

  function handleNextPage() {
    if (tablePage + 1 >= Math.ceil(MockedAPIData[selectedDataMeasure][selectedDataComponent].length / 10)) {
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

  useEffect(() => {
    setTablePage(0);
  }, [selectedDataMeasure, selectedDataComponent])
  
  useEffect(() => {
    setSelectedDataComponent(Object.values(MockedAPISelectValues[selectedDataMeasure])[0] as string)
  }, [selectedDataMeasure])

  return (
    <Container>
      <h3>AlfaCrux Telemetry Viewer</h3>

      <Selectors>
        <Select 
          items={Object.keys(MockedAPISelectValues)}
          value={selectedDataMeasure}
          setValue={setSelectedDataMeasure}
        />

        <Select 
          items={Object.values(MockedAPISelectValues[selectedDataMeasure])}
          value={selectedDataComponent}
          setValue={setSelectedDataComponent}
        />

        {/* <Select 
          items={apiAvailableIntervals}
          value={selectedDataInterval}
          setValue={setSelectedDataInterval}
        /> */}
      </Selectors>

      <Sections>
        {selectedDataToShow.length > 0 && (
          <Chart>
            <h4>Chart</h4>

            <div>
              <ResponsiveContainer width="100%" height={500}>
                <LineChart 
                  data={selectedDataToShow}
                  margin={{ top: 15, right: 30, left: 20, bottom: 40 }}
                  >
                  <Label value="Chart" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="utc" 
                    interval="preserveStartEnd" 
                    minTickGap={75}
                  >
                    <Label value='Satellite Timestamp (UTC)' offset={0} position="bottom" />
                  </XAxis>
                  <YAxis domain={['auto', 'auto']}>
                  {!!selectedUnitOfDataToShow ? (
                    <Label value={`${selectedDataComponent} (${selectedUnitOfDataToShow})`} position="insideLeft" />
                  ) : (
                    <Label value={selectedDataComponent} position="insideLeft" />
                  )}
                  </YAxis>
                  <Tooltip 
                    formatter={value => [`${value} ${selectedUnitOfDataToShow}`, selectedDataComponent]} 
                    labelFormatter={value => `Satellite Timestamp (UTC): ${value}`}
                  />
                  {
                    selectedDataComponent !== 'Operational mode' ? (
                      <Line type="monotone" dataKey="calibrated_value" stroke={theme.colors.green} />
                    ) : (
                      <>
                        <Line type="monotone" dataKey="calibrated_value" stroke={theme.colors.green} />
                        <Line type="monotone" dataKey="raw_value" stroke={theme.colors.green} tooltipType="none" />
                      </>
                    ) 
                  }
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Chart>
        )}

        {selectedTableDataToShow.length > 0 && (
          <Table>
            <h4>Table</h4>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Call Sign</th>
                  {!!selectedUnitOfDataToShow 
                  ? (
                    <th>Value ({selectedUnitOfDataToShow})</th>
                  ) : (
                    <th>Value</th>
                  )}
                  <th>Satellite Timestamp (UTC)</th>
                </tr>
              </thead>
              <tbody>
                {
                  Array.from(Array(tablePage + 1 === totalPages ? lastPageNumberOfRows : 10).keys()).map((item, index) => (
                    <tr key={selectedTableDataToShow[pagination(index)].utc + selectedTableDataToShow[pagination(index)].gs_utc}>
                      <td>{selectedDataComponent}</td>
                      <td>PT2ENE</td>
                      <td>{selectedTableDataToShow[pagination(index)].calibrated_value}</td>
                      <td>{selectedTableDataToShow[pagination(index)].utc}</td>
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
    </Container>
  )
}