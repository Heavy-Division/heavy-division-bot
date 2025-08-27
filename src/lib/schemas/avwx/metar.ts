export type MetarResponse = {
    meta:                    Meta;
    altimeter:               Altimeter;
    clouds:                  Cloud[];
    flight_rules:            string;
    other:                   any[];
    sanitized:               string;
    visibility:              Altimeter;
    wind_direction:          Altimeter;
    wind_gust:               Altimeter;
    wind_speed:              Altimeter;
    wx_codes:                Code[];
    raw:                     string;
    station:                 string;
    time:                    Time;
    remarks:                 string;
    dewpoint:                Altimeter;
    relative_humidity:       number;
    remarks_info:            RemarksInfo;
    runway_visibility:       any[];
    temperature:             Altimeter;
    wind_variable_direction: any[];
    density_altitude:        number;
    pressure_altitude:       number;
    units:                   Units;
}

export type Altimeter = {
    repr:   string;
    value:  number;
    spoken: string;
}

export type Cloud = {
    repr:      string;
    type:      string;
    altitude:  number;
    modifier:  null;
    direction: null;
}

export type Meta = {
    timestamp: string;
}

export type RemarksInfo = {
    maximum_temperature_6:  null;
    minimum_temperature_6:  null;
    pressure_tendency:      null;
    precip_36_hours:        null;
    precip_24_hours:        null;
    sunshine_minutes:       null;
    codes:                  Code[];
    dewpoint_decimal:       Altimeter;
    maximum_temperature_24: null;
    minimum_temperature_24: null;
    precip_hourly:          null;
    sea_level_pressure:     Altimeter;
    snow_depth:             null;
    temperature_decimal:    Altimeter;
}

export type Code = {
    repr:  string;
    value: string;
}

export type Time = {
    repr: string;
    dt:   string;
}

export type Units = {
    accumulation: string;
    altimeter:    string;
    altitude:     string;
    temperature:  string;
    visibility:   string;
    wind_speed:   string;
}
