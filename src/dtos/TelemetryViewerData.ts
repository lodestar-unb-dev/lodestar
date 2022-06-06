export type TelemetryViewerParameters = 
'P_OBC_TELEM_MAG_X' |
'P_OBC_TELEM_MAG_Y' |
'P_OBC_TELEM_MAG_Z' |
'P_OBC_TELEM_GYRO_X' |
'P_OBC_TELEM_GYRO_Y' |
'P_OBC_TELEM_GYRO_Z' |
'P_OM_TELEM_SW_STATE' |
'P_EP_TELEM_VBATT' |
'P_EP_TELEM_CURIN_0' |
'P_EP_TELEM_CURIN_1' |
'P_EP_TELEM_CURIN_2' |
'P_EP_TELEM_CURSUN' |
'P_EP_TELEM_CURSYS' |
'P_EP_TELEM_VBOOST_0' |
'P_EP_TELEM_VBOOST_1' |
'P_EP_TELEM_VBOOST_2' |
'P_EP_TELEM_CUROUT_0' |
'P_EP_TELEM_CUROUT_3' |
'P_EP_TELEM_CUROUT_5' |
'P_TT_TELEM_TEMP_BRD' |
'P_OBC_TELEM_TEMP_MCU' |
'P_EP_TELEM_TEMP_3' |
'P_EP_TELEM_TEMP_4' |
'P_EP_TELEM_TEMP_5' |
'P_SP_TELEM_TEMP_PX' |
'P_SP_TELEM_TEMP_NX' |
'P_SP_TELEM_TEMP_PY' |
'P_SP_TELEM_TEMP_NY' |
'P_SP_TELEM_TEMP_PZ' |
'P_SP_TELEM_TEMP_NZ'

export interface ITelemetryViewerData {
  id: number;
  struct_type: string;
  param_name: TelemetryViewerParameters;
  param_id: string;
  raw_value: string;
  calibrated_value: string;
  calibrated_units: string;
  prs_id: string;
  timestamp_gs_utc: string;
  timestamp_sat_utc: string;
  timestamp_sat_utc_corrected: string;
  within_limits: string;
  ref_tm_db_id: string;
}