import { NextApiResponse, NextApiRequest } from 'next'

type SelectedFilesData = {
  name: string;
  calibrated_value: number;
  raw_value: number;
  within_limits: 'Yes' | 'No';
  utc: string;
  sat_utc: string;
  gs_utc: string;
}

import P_OBC_TELEM_MAG_X from '../../../mocks/P_OBC_TELEM_MAG_X.json';
import P_OBC_TELEM_MAG_Y from '../../../mocks/P_OBC_TELEM_MAG_Y.json';
import P_OBC_TELEM_MAG_Z from '../../../mocks/P_OBC_TELEM_MAG_Z.json';
import P_OBC_TELEM_GYRO_X from '../../../mocks/P_OBC_TELEM_GYRO_X.json';
import P_OBC_TELEM_GYRO_Y from '../../../mocks/P_OBC_TELEM_GYRO_Y.json';
import P_OBC_TELEM_GYRO_Z from '../../../mocks/P_OBC_TELEM_GYRO_Z.json';
import P_OM_TELEM_SW_STATE from '../../../mocks/P_OM_TELEM_SW_STATE.json';

import P_EP_TELEM_VBATT from '../../../mocks/P_EP_TELEM_VBATT.json';
import P_EP_TELEM_CURIN_0 from '../../../mocks/P_EP_TELEM_CURIN_0.json';
import P_EP_TELEM_CURIN_1 from '../../../mocks/P_EP_TELEM_CURIN_1.json';
import P_EP_TELEM_CURIN_2 from '../../../mocks/P_EP_TELEM_CURIN_2.json';
import P_EP_TELEM_CURSUN from '../../../mocks/P_EP_TELEM_CURSUN.json';
import P_EP_TELEM_CURSYS from '../../../mocks/P_EP_TELEM_CURSYS.json';
import P_EP_TELEM_VBOOST_0 from '../../../mocks/P_EP_TELEM_VBOOST_0.json';
import P_EP_TELEM_VBOOST_1 from '../../../mocks/P_EP_TELEM_VBOOST_1.json';
import P_EP_TELEM_VBOOST_2 from '../../../mocks/P_EP_TELEM_VBOOST_2.json';
import P_EP_TELEM_CUROUT_0 from '../../../mocks/P_EP_TELEM_CUROUT_0.json';
import P_EP_TELEM_CUROUT_3 from '../../../mocks/P_EP_TELEM_CUROUT_3.json';
import P_EP_TELEM_CUROUT_5 from '../../../mocks/P_EP_TELEM_CUROUT_5.json';

import P_TT_TELEM_TEMP_BRD from '../../../mocks/P_TT_TELEM_TEMP_BRD.json';
import P_OBC_TELEM_TEMP_MCU from '../../../mocks/P_OBC_TELEM_TEMP_MCU.json';
import P_EP_TELEM_TEMP_3 from '../../../mocks/P_EP_TELEM_TEMP_3.json';
import P_EP_TELEM_TEMP_4 from '../../../mocks/P_EP_TELEM_TEMP_4.json';
import P_EP_TELEM_TEMP_5 from '../../../mocks/P_EP_TELEM_TEMP_5.json';
import P_SP_TELEM_TEMP_PX from '../../../mocks/P_SP_TELEM_TEMP_PX.json';
import P_SP_TELEM_TEMP_NX from '../../../mocks/P_SP_TELEM_TEMP_NX.json';
import P_SP_TELEM_TEMP_PY from '../../../mocks/P_SP_TELEM_TEMP_PY.json';
import P_SP_TELEM_TEMP_NY from '../../../mocks/P_SP_TELEM_TEMP_NY.json';
import P_SP_TELEM_TEMP_PZ from '../../../mocks/P_SP_TELEM_TEMP_PZ.json';
import P_SP_TELEM_TEMP_NZ from '../../../mocks/P_SP_TELEM_TEMP_NZ.json';
import { isAfter, parseISO } from 'date-fns';

const jsonFiles = {
  'P_OBC_TELEM_MAG_X': P_OBC_TELEM_MAG_X,
  'P_OBC_TELEM_MAG_Y': P_OBC_TELEM_MAG_Y,
  'P_OBC_TELEM_MAG_Z': P_OBC_TELEM_MAG_Z,
  'P_OBC_TELEM_GYRO_X': P_OBC_TELEM_GYRO_X,
  'P_OBC_TELEM_GYRO_Y': P_OBC_TELEM_GYRO_Y,
  'P_OBC_TELEM_GYRO_Z': P_OBC_TELEM_GYRO_Z,
  'P_OM_TELEM_SW_STATE': P_OM_TELEM_SW_STATE,
  'P_EP_TELEM_VBATT': P_EP_TELEM_VBATT,
  'P_EP_TELEM_CURIN_0': P_EP_TELEM_CURIN_0,
  'P_EP_TELEM_CURIN_1': P_EP_TELEM_CURIN_1,
  'P_EP_TELEM_CURIN_2': P_EP_TELEM_CURIN_2,
  'P_EP_TELEM_CURSUN': P_EP_TELEM_CURSUN,
  'P_EP_TELEM_CURSYS': P_EP_TELEM_CURSYS,
  'P_EP_TELEM_VBOOST_0': P_EP_TELEM_VBOOST_0,
  'P_EP_TELEM_VBOOST_1': P_EP_TELEM_VBOOST_1,
  'P_EP_TELEM_VBOOST_2': P_EP_TELEM_VBOOST_2,
  'P_EP_TELEM_CUROUT_0': P_EP_TELEM_CUROUT_0,
  'P_EP_TELEM_CUROUT_3': P_EP_TELEM_CUROUT_3,
  'P_EP_TELEM_CUROUT_5': P_EP_TELEM_CUROUT_5,
  'P_TT_TELEM_TEMP_BRD': P_TT_TELEM_TEMP_BRD,
  'P_OBC_TELEM_TEMP_MCU': P_OBC_TELEM_TEMP_MCU,
  'P_EP_TELEM_TEMP_3': P_EP_TELEM_TEMP_3,
  'P_EP_TELEM_TEMP_4': P_EP_TELEM_TEMP_4,
  'P_EP_TELEM_TEMP_5': P_EP_TELEM_TEMP_5,
  'P_SP_TELEM_TEMP_PX': P_SP_TELEM_TEMP_PX,
  'P_SP_TELEM_TEMP_NX': P_SP_TELEM_TEMP_NX,
  'P_SP_TELEM_TEMP_PY': P_SP_TELEM_TEMP_PY,
  'P_SP_TELEM_TEMP_NY': P_SP_TELEM_TEMP_NY,
  'P_SP_TELEM_TEMP_PZ': P_SP_TELEM_TEMP_PZ,
  'P_SP_TELEM_TEMP_NZ': P_SP_TELEM_TEMP_NZ,
}

const APIUnits = {
  'P_OBC_TELEM_MAG_X': 'G',
  'P_OBC_TELEM_MAG_Y': 'G',
  'P_OBC_TELEM_MAG_Z': 'G',
  'P_OBC_TELEM_GYRO_X': 'deg\/s',
  'P_OBC_TELEM_GYRO_Y': 'deg\/s',
  'P_OBC_TELEM_GYRO_Z': 'deg\/s',
  'P_OM_TELEM_SW_STATE' : '',
  'P_EP_TELEM_VBATT': 'mV',
  'P_EP_TELEM_CURIN_0': 'mA',
  'P_EP_TELEM_CURIN_1': 'mA',
  'P_EP_TELEM_CURIN_2': 'mA',
  'P_EP_TELEM_CURSUN': 'mA',
  'P_EP_TELEM_CURSYS': 'mA',
  'P_EP_TELEM_VBOOST_0': 'mV',
  'P_EP_TELEM_VBOOST_1': 'mV',
  'P_EP_TELEM_VBOOST_2': 'mV',
  'P_EP_TELEM_CUROUT_0': 'mA',
  'P_EP_TELEM_CUROUT_3': 'mA',
  'P_EP_TELEM_CUROUT_5': 'mA',
  'P_TT_TELEM_TEMP_BRD': 'deg',
  'P_OBC_TELEM_TEMP_MCU': 'deg',
  'P_EP_TELEM_TEMP_3': 'deg',
  'P_EP_TELEM_TEMP_4': 'deg',
  'P_EP_TELEM_TEMP_5': 'deg',
  'P_SP_TELEM_TEMP_PX': 'deg',
  'P_SP_TELEM_TEMP_NX': 'deg',
  'P_SP_TELEM_TEMP_PY': 'deg',
  'P_SP_TELEM_TEMP_NY': 'deg',
  'P_SP_TELEM_TEMP_PZ': 'deg',
  'P_SP_TELEM_TEMP_NZ': 'deg'
}

// info
// api/get
// param_name=P_SP_TELEM_TEMP_NX
// sort=sat_corrected desnecessario aqui pois o arquivo já vem ordenado por esse filtro
// filter_time=sat_corrected desnecessario aqui pois sempre iremos ordenar por esse parametro
// start_time=2022-06-03T18%3A59%3A22.557Z
// stop_time=2022-06-09T18%3A59%3A22.557Z desnecessario aqui pois por enquanto sempre iremos utilizar o horario atual como stop time

export default function handler(
  request: NextApiRequest,
  res: NextApiResponse
) {
  const { param_name, start_time } = request.query;

  const selectedFile = jsonFiles[param_name as string] as SelectedFilesData[];

  if (!start_time) {
    const result = selectedFile.map(item => ({
      param_name: item.name,
      calibrated_value: item.calibrated_value,
      calibrated_units: APIUnits[item.name as string],
      raw_value: item.raw_value,
      timestamp_sat_utc_corrected: item.utc,
      timestamp_gs_utc: item.gs_utc
    }))
    return res.status(200).json(result);
  }

  const index = selectedFile.findIndex(item => isAfter(parseISO(item.utc), parseISO(start_time as string)))

  if (index > 0) {
    const result = selectedFile.slice(index).map(item => ({
      param_name: item.name,
      calibrated_value: item.calibrated_value,
      calibrated_units: APIUnits[item.name as string],
      raw_value: item.raw_value,
      timestamp_sat_utc_corrected: item.utc,
      timestamp_gs_utc: item.gs_utc
    }))
    return res.status(200).json(result);
  }

  return res.status(200).json([]);
}