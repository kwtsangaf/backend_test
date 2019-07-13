import {Controller, Get, UseGuards} from '@nestjs/common';
import {WeatherService} from './weather.service';
import {AuthGuard} from '@nestjs/passport';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {
    }

    @Get()
    @UseGuards(AuthGuard())
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
