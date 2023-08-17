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
  code: string
}

export interface ICoordinates {
  latitude: string,
  longitude: string,
}

export interface IHourly {
	hourly: {
		[key: string]: number[]
	}
}

export interface IHourlyHourly {
	hourly: {
		temperature_2m: number[],
		relativehumidity_2m: number[],
		pressure_msl: number[],
		cloudcover: number[],
		windspeed_10m: number[],
		rain: number[],
		snowfall: number[],
	}
}

export interface ButtonProps {
	children: React.ReactNode,
	clickHandler: React.MouseEventHandler<HTMLButtonElement>,
}

export interface InputProps {
	text: string,
	inputHandler: React.ChangeEventHandler<HTMLInputElement>,
}