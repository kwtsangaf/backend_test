import * as mongoose from 'mongoose';

export const WeatherSchema = new mongoose.Schema({
    coord: {
        lon: {
            type: 'Number',
        },
        lat: {
            type: 'Number',
        },
    },
    weather: {
        type: [
            'Mixed',
        ],
    },
    base: {
        type: 'String',
    },
    main: {
        temp: {
            type: 'Number',
        },
        pressure: {
            type: 'Number',
        },
        humidity: {
            type: 'Number',
        },
        temp_min: {
            type: 'Number',
        },
        temp_max: {
            type: 'Number',
        },
    },
    visibility: {
        type: 'Number',
    },
    wind: {
        speed: {
            type: 'Number',
        },
        deg: {
            type: 'Number',
        },
    },
    clouds: {
        all: {
            type: 'Number',
        },
    },
    dt: {
        type: 'Number',
    },
    sys: {
        type: {
            type: 'Number',
        },
        id: {
            type: 'Number',
        },
        message: {
            type: 'Number',
        },
        country: {
            type: 'String',
        },
        sunrise: {
            type: 'Number',
        },
        sunset: {
            type: 'Number',
        },
    },
    timezone: {
        type: 'Number',
    },
    id: {
        type: 'Number',
    },
    name: {
        type: 'String',
    },
    cod: {
        type: 'Number',
    },
});
