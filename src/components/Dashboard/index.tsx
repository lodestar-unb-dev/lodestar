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
import P_OBC_TELEM_TEMP_MCU from '../../mocks/P_OBC_TELEM_TEMP_MCU.json';
import P_OM_TELEM_SW_STATE from '../../mocks/P_OM_TELEM_SW_STATE.json';

const MockedAPISelectValues = {
  'OBC_BEACON': {
    'P_OBC_TELEM_MAG_X': 'X-axis OBC magnetometer measure',
    'P_OBC_TELEM_MAG_Y': 'Y-axis OBC magnetometer measure',
    'P_OBC_TELEM_MAG_Z': 'Z-axis OBC magnetometer measure',
    'P_OBC_TELEM_GYRO_X': 'X-axis OBC gyroscope measure',
    'P_OBC_TELEM_GYRO_Y': 'Y-axis OBC gyroscope measure',
    'P_OBC_TELEM_GYRO_Z': 'Z-axis OBC gyroscope measure',
    'P_OBC_TELEM_TEMP_MCU': 'MCU Temperature',
    'P_OM_TELEM_SW_STATE': 'Operational mode'
  }
}

const MockedAPIUnits = {
  'OBC_BEACON': {
    'P_OBC_TELEM_MAG_X': 'G',
    'P_OBC_TELEM_MAG_Y': 'G',
    'P_OBC_TELEM_MAG_Z': 'G',
    'P_OBC_TELEM_GYRO_X': 'deg/s',
    'P_OBC_TELEM_GYRO_Y': 'deg/s',
    'P_OBC_TELEM_GYRO_Z': 'deg/s',
    'P_OBC_TELEM_TEMP_MCU': '°C',
    'P_OM_TELEM_SW_STATE': ''
  }
}

const MockedAPIData = {
  'OBC_BEACON': {
    'P_OBC_TELEM_MAG_X': P_OBC_TELEM_MAG_X,
    'P_OBC_TELEM_MAG_Y': P_OBC_TELEM_MAG_Y,
    'P_OBC_TELEM_MAG_Z': P_OBC_TELEM_MAG_Z,
    'P_OBC_TELEM_GYRO_X': P_OBC_TELEM_GYRO_X,
    'P_OBC_TELEM_GYRO_Y': P_OBC_TELEM_GYRO_Y,
    'P_OBC_TELEM_GYRO_Z': P_OBC_TELEM_GYRO_Z,
    'P_OBC_TELEM_TEMP_MCU': P_OBC_TELEM_TEMP_MCU,
    'P_OM_TELEM_SW_STATE': P_OM_TELEM_SW_STATE,
  }
}

const MockedAPIDataTable = {
  'OBC_BEACON': {
    'P_OBC_TELEM_MAG_X': [...P_OBC_TELEM_MAG_X].reverse(),
    'P_OBC_TELEM_MAG_Y': [...P_OBC_TELEM_MAG_Y].reverse(),
    'P_OBC_TELEM_MAG_Z': [...P_OBC_TELEM_MAG_Z].reverse(),
    'P_OBC_TELEM_GYRO_X': [...P_OBC_TELEM_GYRO_X].reverse(),
    'P_OBC_TELEM_GYRO_Y': [...P_OBC_TELEM_GYRO_Y].reverse(),
    'P_OBC_TELEM_GYRO_Z': [...P_OBC_TELEM_GYRO_Z].reverse(),
    'P_OBC_TELEM_TEMP_MCU': [...P_OBC_TELEM_TEMP_MCU].reverse(),
    'P_OM_TELEM_SW_STATE': [...P_OM_TELEM_SW_STATE].reverse(),
  }
}

const apiAvailableData = [
  {
    key: 'batteryTension',
    name: 'Tensão de bateria',
    values: [
      {
        key: 'P_EP_TELEM_VBATT',
        name: 'Tensão de bateria',
      }
    ]
  },
  {
    key: 'solarPanelsTensionAndBattery',
    name: 'Tensão e corrente dos painéis solares',
    values: [
      {
        key: 'P_EP_TELEM_CURIN_0',
        name: 'Corrente de entrada dos painéis solares +/-X',
      }
    ]
  },
  {
    key: 'EPSOutputCurrent',
    name: 'Corrente de saída do EPS',
    values: [
      {
        key: 'P_EP_TELEM_CUROUT_0',
        name: 'Corrente de saída para OBC',
      }
    ]
  },
  {
    key: 'internalTemperatures',
    name: 'Temperaturas Internas',
    values: [
      {
        key: 'P_EP_TELEM_TEMP_0',
        name: 'EPS - Conversor Boost 0',
      },
      {
        key: 'P_EP_TELEM_TEMP_1',
        name: 'EPS - Conversor Boost 1',
      },
      {
        key: 'P_EP_TELEM_TEMP_2',
        name: 'EPS - Conversor Boost 2',
      },
      {
        key: 'P_EP_TELEM_TEMP_3',
        name: 'EPS - PCB',
      },
      {
        key: 'P_EP_TELEM_TEMP_4',
        name: 'EPS - Bateria - Par 1',
      },
      {
        key: 'P_EP_TELEM_TEMP_5',
        name: 'EPS - Bateria - Par 2',
      },
      {
        key: 'P_TT_TELEM_TEMP_BRD',
        name: 'TTC - próximo ao MCU',
      }
    ]
  },
  {
    key: 'externalTemperatures',
    name: 'Temperaturas externas',
    values: [
      {
        key: 'P_SP_TELEM_TEMP_NX',
        name: 'Painel solar - -X',
      }
    ]
  }
]

const apiBatteryTensionData = [
  {
    key: 'batteryTension',
    name: 'Tensão de bateria',
    data: [
      {
        key: 'P_EP_TELEM_VBATT',
        name: 'Tensão de bateria',
        currentPage: 1,
        totalPages: 390,
        cursor: 'backend-cursor',
        unitOfMeasurement: 'mV',
        data: [
          {
            calibrated_value: 7821,
            raw_value: 7821,
            within_limits: true,
            utc: '2022-04-01 17:38:55.215Z',
            sat_utc: '2000-01-01 00:00:01.541Z',
            gs_utc: '2022-04-06 22:28:03.911Z'
          },
        ]
      }
    ]
  }
]

const apiSolarPanelsTensionAndCurrentData = [
  {
    key: 'solarPanelsTensionAndBattery',
    name: 'Tensão e corrente dos painéis solares',
    data: [
      {
        key: 'P_EP_TELEM_CURIN_0',
        name: 'Corrente de entrada dos painéis solares +/-X',
        currentPage: 1,
        totalPages: 390,
        cursor: 'backend-cursor',
        unitOfMeasurement: 'mA',
        data: [
          {
            calibrated_value: 7821,
            raw_value: 7821,
            within_limits: true,
            utc: '2022-04-01 17:38:55.215Z',
            sat_utc: '2000-01-01 00:00:01.541Z',
            gs_utc: '2022-04-06 22:28:03.911Z'
          },
        ]
      }
    ]
  }
]

const apiEPSOutputCurrentData = [
  {
    key: 'EPSOutputCurrent',
    name: 'Corrente de saída do EPS',
    data: [
      {
        key: 'P_EP_TELEM_CUROUT_0',
        name: 'Corrente de saída para OBC',
        currentPage: 1,
        totalPages: 390,
        cursor: 'backend-cursor',
        unitOfMeasurement: 'mA',
        data: [
          {
            calibrated_value: 7821,
            raw_value: 7821,
            within_limits: true,
            utc: '2022-04-01 17:38:55.215Z',
            sat_utc: '2000-01-01 00:00:01.541Z',
            gs_utc: '2022-04-06 22:28:03.911Z'
          },
        ]
      }
    ]
  }
]

const apiInternalTemperaturesData = {
  key: 'internalTemperatures',
  name: 'Temperaturas Internas',
  data: [
    {
      key: 'P_EP_TELEM_TEMP_0',
      name: 'EPS - Conversor Boost 0',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 7821,
          raw_value: 7821,
          within_limits: true,
          utc: '2022-04-01 17:38:55.215Z',
          sat_utc: '2000-01-01 00:00:01.541Z',
          gs_utc: '2022-04-06 22:28:03.911Z'
        },
      ]
    },
    {
      key: 'P_EP_TELEM_TEMP_1',
      name: 'EPS - Conversor Boost 1',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 7821,
          raw_value: 7821,
          within_limits: true,
          utc: '2022-04-01 17:38:55.215Z',
          sat_utc: '2000-01-01 00:00:01.541Z',
          gs_utc: '2022-04-06 22:28:03.911Z'
        },
      ]
    },
    {
      key: 'P_EP_TELEM_TEMP_2',
      name: 'EPS - Conversor Boost 2',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 7821,
          raw_value: 7821,
          within_limits: true,
          utc: '2022-04-01 17:38:55.215Z',
          sat_utc: '2000-01-01 00:00:01.541Z',
          gs_utc: '2022-04-06 22:28:03.911Z'
        },
      ]
    },
    {
      key: 'P_EP_TELEM_TEMP_3',
      name: 'EPS - PCB',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 7821,
          raw_value: 7821,
          within_limits: true,
          utc: '2022-04-01 17:38:55.215Z',
          sat_utc: '2000-01-01 00:00:01.541Z',
          gs_utc: '2022-04-06 22:28:03.911Z'
        },
      ]
    },
    {
      key: 'P_EP_TELEM_TEMP_4',
      name: 'EPS - Bateria - Par 1',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 7821,
          raw_value: 7821,
          within_limits: true,
          utc: '2022-04-01 17:38:55.215Z',
          sat_utc: '2000-01-01 00:00:01.541Z',
          gs_utc: '2022-04-06 22:28:03.911Z'
        },
      ]
    },
    {
      key: 'P_EP_TELEM_TEMP_5',
      name: 'EPS - Bateria - Par 2',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 7821,
          raw_value: 7821,
          within_limits: true,
          utc: '2022-04-01 17:38:55.215Z',
          sat_utc: '2000-01-01 00:00:01.541Z',
          gs_utc: '2022-04-06 22:28:03.911Z'
        },
      ]
    },
    {
      key: 'P_TT_TELEM_TEMP_BRD',
      name: 'TTC - próximo ao MCU',
      currentPage: 1,
      totalPages: 390,
      cursor: 'backend-cursor',
      unitOfMeasurement: 'ºC',
      data: [
        {
          calibrated_value: 19.1,
          raw_value: 191,
          within_limits: true,
          utc: '2022-04-01 18:14:51.462Z',
          sat_utc: '2000-01-01 00:35:57.788Z',
          gs_utc: '2022-04-06 22:28:04.802Z'
        },
        {
          calibrated_value: 19.4,
          raw_value: 194,
          within_limits: true,
          utc: '2022-04-01 18:19:51.723Z',
          sat_utc: '2000-01-01 00:40:58.049Z',
          gs_utc: '2022-04-06 22:28:07.310Z'
        },
        {
          calibrated_value: 20.1,
          raw_value: 201,
          within_limits: true,
          utc: '2022-04-01 18:24:51.971Z',
          sat_utc: '2000-01-01 00:45:58.297Z',
          gs_utc: '2022-04-06 22:28:10.132Z'
        },
        {
          calibrated_value: 21,
          raw_value: 210,
          within_limits: true,
          utc: '2022-04-01 18:29:51.908Z',
          sat_utc: '2000-01-01 00:50:58.234Z',
          gs_utc: '2022-04-06 22:28:13.821Z'
        },
        {
          calibrated_value: 21.1,
          raw_value: 211,
          within_limits: true,
          utc: '2022-04-01 18:34:52.152Z',
          sat_utc: '2000-01-01 00:55:58.478Z',
          gs_utc: '2022-04-06 22:28:16.654Z'
        },
        {
          calibrated_value: 21,
          raw_value: 210,
          within_limits: true,
          utc: '2022-04-01 18:39:52.433Z',
          sat_utc: '2000-01-01 01:00:58.759Z',
          gs_utc: '2022-04-06 22:28:20.552Z'
        },
        {
          calibrated_value: 20.7,
          raw_value: 207,
          within_limits: true,
          utc: '2022-04-01 18:44:52.695Z',
          sat_utc: '2000-01-01 01:05:59.021Z',
          gs_utc: '2022-04-06 22:28:21.049Z'
        },
        {
          calibrated_value: 18.3,
          raw_value: 183,
          within_limits: true,
          utc: '2022-04-01 18:49:52.952Z',
          sat_utc: '2000-01-01 01:10:59.278Z',
          gs_utc: '2022-04-06 22:28:37.014Z'
        },
        {
          calibrated_value: 14.9,
          raw_value: 149,
          within_limits: true,
          utc: '2022-04-01 18:54:53.242Z',
          sat_utc: '2000-01-01 01:15:59.568Z',
          gs_utc: '2022-04-06 22:28:42.158Z'
        },
        {
          calibrated_value: 11.4,
          raw_value: 114,
          within_limits: true,
          utc: '2022-04-01 18:59:53.537Z',
          sat_utc: '2000-01-01 01:20:59.863Z',
          gs_utc: '2022-04-06 22:28:58.613Z'
        },
        {
          calibrated_value: 8.2,
          raw_value: 82,
          within_limits: true,
          utc: '2022-04-01 19:04:53.815Z',
          sat_utc: '2000-01-01 01:26:00.141Z',
          gs_utc: '2022-04-06 22:29:03.723Z'
        },
      ]
    }
  ]
}


const apiExternalTemperaturesData = [
  {
    key: 'externalTemperatures',
    name: 'Temperaturas externas',
    data: [
      {
        key: 'P_SP_TELEM_TEMP_NX',
        name: 'Painel solar - -X',
        currentPage: 1,
        totalPages: 390,
        cursor: 'backend-cursor',
        unitOfMeasurement: 'ºC',
        data: [
          {
            calibrated_value: 7821,
            raw_value: 7821,
            within_limits: true,
            utc: '2022-04-01 17:38:55.215Z',
            sat_utc: '2000-01-01 00:00:01.541Z',
            gs_utc: '2022-04-06 22:28:03.911Z'
          },
        ]
      }
    ]
  }
]

const apiAvailableIntervals = ["1 Hour", "6 Hours", "12 Hours", "24 Hours", "7 days", "30 days", "90 days", "180 days", "360 days"]

export function Dashboard() {
  const [selectedDataMeasure, setSelectedDataMeasure] = useState(Object.keys(MockedAPISelectValues)[0]);
  const [selectedDataComponent, setSelectedDataComponent] = useState(Object.keys(MockedAPISelectValues[selectedDataMeasure])[0]);
  const [selectedDataInterval, setSelectedDataInterval] = useState('24 Hours');
  const [tablePage, setTablePage] = useState(0);

  console.log(Object.entries(MockedAPISelectValues.OBC_BEACON))

  const pagination = useCallback((index) => {
    return tablePage * 10 + index
  }, [tablePage]);

  const selectedDataToShow = useMemo(() => {
    return MockedAPIData[selectedDataMeasure][selectedDataComponent]
  }, [selectedDataMeasure, selectedDataComponent]);

  const selectedTableDataToShow = useMemo(() => {
    return MockedAPIDataTable[selectedDataMeasure][selectedDataComponent]
  }, [selectedDataMeasure, selectedDataComponent]);

  const selectedUnitOfDataToShow = useMemo(() => {
    return MockedAPIUnits[selectedDataMeasure][selectedDataComponent]
  }, [selectedDataMeasure, selectedDataComponent]);

  const totalPages = useMemo(() => {
    return Math.ceil(selectedDataToShow.length / 10)
  }, [selectedDataMeasure, selectedDataComponent, selectedDataToShow])

  const lastPageNumberOfRows = useMemo(() => {
    return Math.ceil(selectedDataToShow.length % 10)
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
  
  return (
    <Container>
      <h3>Dashboard</h3>

      <Selectors>
        <Select 
          items={Object.keys(MockedAPISelectValues)}
          value={selectedDataMeasure}
          setValue={setSelectedDataMeasure}
        />

        <Select 
          items={Object.keys(MockedAPISelectValues[selectedDataMeasure])}
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
        <Chart>
          <h4>Chart</h4>

          <div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart 
                data={selectedDataToShow}
                >
                <Label value="Chart" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="utc" tick={false} />
                <YAxis />
                <Tooltip />
                {
                  selectedDataComponent !== 'P_OM_TELEM_SW_STATE' ? (
                    <Line type="monotone" dataKey="calibrated_value" stroke="#8884d8" />
                  ) : (
                    <>
                      <Line type="monotone" dataKey="calibrated_value" stroke="red" />
                      <Line type="monotone" dataKey="raw_value" stroke="#8884d8" />
                    </>
                  ) 
                }
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Chart>

        <Table>
          <h4>Table</h4>

          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Call Sign</th>
                <th>Calibrated Value ({selectedUnitOfDataToShow})</th>
                <th>Raw Value</th>
                <th>Within Limits</th>
                <th>Date (UTC)</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.from(Array(tablePage + 1 === totalPages ? lastPageNumberOfRows : 10).keys()).map((item, index) => (
                  <tr>
                  <td>{pagination(index) + 1}</td>
                  <td>PT2ENE</td>
                  <td>{selectedTableDataToShow[pagination(index)].calibrated_value}</td>
                  <td>{selectedTableDataToShow[pagination(index)].raw_value}</td>
                  <td>{selectedTableDataToShow[pagination(index)].within_limits ? 'Yes' : 'No'}</td>
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
      </Sections>
    </Container>
  )
}