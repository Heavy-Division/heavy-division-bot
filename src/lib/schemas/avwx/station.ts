export type Station = {
	city: string;
	country: string;
	elevation_ft: number;
	elevation_m: number;
	gps: string;
	iata: string;
	icao: string;
	latitude: number;
	local: string;
	longitude: number;
	name: string;
	note: string;
	reporting: boolean;
	runways: Runway[];
	state: string;
	type: string;
	website: string;
	wiki: string;
};

export type Runway = {
	length_ft: number;
	width_ft: number;
	ident1: string;
	ident2: string;
};
