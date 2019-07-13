import {Controller, Get} from '@nestjs/common';
import {WeatherService} from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {
    }

    @Get()
    getWeather() {
        return this.weatherService.getWeather();
    }

    @Get('db')
    getWeatherFromDb() {
        return this.weatherService.findWeatherFromDb();
    }

    @Get('remote')
    getWeatherFromRemote() {
        return this.weatherService.getWeatherFromOpenApi();
    }
}
