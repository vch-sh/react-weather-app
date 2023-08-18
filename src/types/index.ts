export interface ILocations {
  id: string,
  name: string,
  admin1: string,
  country: string,
  country_code: string,
  latitude: string,
  longitude: string,
}

export interface ILocationOutputData {
  name: string,
  country: string,
  countryCode: string,
	region: string,
}

export interface ICoordinates {
  latitude: string,
  longitude: string,
}

export interface IHourly {
	hourly: {
		temperature_2m: number[],
		relativehumidity_2m: number[],
		pressure_msl: number[],
		cloudcover: number[],
		windspeed_10m: number[],
		rain: number[],
		snowfall: number[],
	},
	hourly_units: {
		temperature_2m: string,
		relativehumidity_2m: string,
		pressure_msl: string,
		cloudcover: string,
		windspeed_10m: string,
		rain: string,
		snowfall: string,
	}
}