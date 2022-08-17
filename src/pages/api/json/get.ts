import { NextApiResponse, NextApiRequest } from 'next'

import P_OBC_TELEM_MAG_X from '../../../mocks/p_obc_telem_mag_x.json';
import P_OBC_TELEM_MAG_Y from '../../../mocks/p_obc_telem_mag_y.json';
import P_OBC_TELEM_MAG_Z from '../../../mocks/p_obc_telem_mag_z.json';
import P_OBC_TELEM_GYRO_X from '../../../mocks/p_obc_telem_gyro_x.json';
import P_OBC_TELEM_GYRO_Y from '../../../mocks/p_obc_telem_gyro_y.json';
import P_OBC_TELEM_GYRO_Z from '../../../mocks/p_obc_telem_gyro_z.json';
import P_OM_TELEM_SW_STATE from '../../../mocks/p_om_telem_sw_state.json';

import P_EP_TELEM_VBATT from '../../../mocks/p_ep_telem_vbatt.json';
import P_EP_TELEM_CURIN_0 from '../../../mocks/p_ep_telem_curin_0.json';
import P_EP_TELEM_CURIN_1 from '../../../mocks/p_ep_telem_curin_1.json';
import P_EP_TELEM_CURIN_2 from '../../../mocks/p_ep_telem_curin_2.json';
import P_EP_TELEM_CURSUN from '../../../mocks/p_ep_telem_cursun.json';
import P_EP_TELEM_CURSYS from '../../../mocks/p_ep_telem_cursys.json';
import P_EP_TELEM_VBOOST_0 from '../../../mocks/p_ep_telem_vboost_0.json';
import P_EP_TELEM_VBOOST_1 from '../../../mocks/p_ep_telem_vboost_1.json';
import P_EP_TELEM_VBOOST_2 from '../../../mocks/p_ep_telem_vboost_2.json';
import P_EP_TELEM_CUROUT_0 from '../../../mocks/p_ep_telem_curout_0.json';
import P_EP_TELEM_CUROUT_3 from '../../../mocks/p_ep_telem_curout_3.json';
import P_EP_TELEM_CUROUT_5 from '../../../mocks/p_ep_telem_curout_5.json';

import P_TT_TELEM_TEMP_BRD from '../../../mocks/p_tt_telem_temp_brd.json';
import P_OBC_TELEM_TEMP_MCU from '../../../mocks/p_obc_telem_temp_mcu.json';
import P_EP_TELEM_TEMP_3 from '../../../mocks/p_ep_telem_temp_3.json';
import P_EP_TELEM_TEMP_4 from '../../../mocks/p_ep_telem_temp_4.json';
import P_EP_TELEM_TEMP_5 from '../../../mocks/p_ep_telem_temp_5.json';
import P_SP_TELEM_TEMP_PX from '../../../mocks/p_sp_telem_temp_px.json';
import P_SP_TELEM_TEMP_NX from '../../../mocks/p_sp_telem_temp_nx.json';
import P_SP_TELEM_TEMP_PY from '../../../mocks/p_sp_telem_temp_py.json';
import P_SP_TELEM_TEMP_NY from '../../../mocks/p_sp_telem_temp_ny.json';
import P_SP_TELEM_TEMP_PZ from '../../../mocks/p_sp_telem_temp_pz.json';
import P_SP_TELEM_TEMP_NZ from '../../../mocks/p_sp_telem_temp_nz.json';
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

  const selectedFile = jsonFiles[param_name as string];
  
  if (!start_time) {
    const result = selectedFile;
    return res.status(200).json(result);
  }

  const index = selectedFile.findIndex(item => isAfter(parseISO(item.timestamp_sat_utc_corrected), parseISO(start_time as string)))

  if (index > 0) {
    const result = selectedFile.slice(index);
    return res.status(200).json(result);
  }

  return res.status(200).json([]);
}