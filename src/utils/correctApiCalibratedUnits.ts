export function correctApiCalibratedUnits(apiUnit: string) {
  switch (apiUnit) {
    case 'deg': {
      return '°C'
    }
    case 'G': {
      return 'mG'
    }
    default: {
      return apiUnit
    }
  }
}