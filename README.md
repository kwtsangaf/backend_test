# Backend Technical Test

Build an API to get the weather information of HK:GET / weather

## Getting Started

### Build and Run with Docker
```
docker-compose build
docker-compose up
```

this project listens on port 3000 by default

#### Debug on Webstorm
https://github.com/nestjs/nest/issues/993

#### Detail
This project uses nestJS as the nodeJS framework. [More](./doc/framework.md)

## Project

### Workflow
![Project workflow](./doc/asset/img/project_workflow.png)

### GET /weather
#### Request
GET http://localhost:3000/weather

Bearer Token

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SneQiuAGUW9aTpxlNNbMkEoYNj7v4-Sw_5jl13-hosk

#### Sample Response
```
{
    "coord": {
        "lon": 114.16,
        "lat": 22.29
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 300.79,
        "pressure": 1006,
        "humidity": 79,
        "temp_min": 299.26,
        "temp_max": 302.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.6,
        "deg": 250
    },
    "clouds": {
        "all": 40
    },
    "dt": 1562783189,
    "sys": {
        "type": 1,
        "id": 9154,
        "message": 0.0086,
        "country": "HK",
        "sunrise": 1562795168,
        "sunset": 1562843459
    },
    "timezone": 28800,
    "id": 1819729,
    "name": "Hong Kong",
    "cod": 200
}
```

### Configuration
configure in _.env_

### Error Handling
this project use nestJS [default exception filters](https://docs.nestjs.com/exception-filters)


When an exception is unrecognized (is neither HttpException nor a class that inherits from HttpException), the client receives the following default JSON response:

```
{
  "statusCode": 500,
  "message": "Internal server error"
}

```

When an exception is an authentication error
```
{
    "statusCode": 401,
    "error": "Unauthorized"
}
```

### Style
#### Commit
Use [the AngularJS commit conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

## Authors

Ray Tsang

## License

Personal Work
