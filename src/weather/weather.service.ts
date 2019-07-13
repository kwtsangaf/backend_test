import {HttpService, Injectable, Logger} from '@nestjs/common';
import {ConfigService} from '../config/config.service';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {WeatherDto} from './dto/weather.dto';

@Injectable()
export class WeatherService {
    constructor(private readonly httpService: HttpService,
                private readonly configService: ConfigService,
                private readonly logger: Logger,
                @InjectModel('Weather') private readonly weatherModel: Model<WeatherDto>) {
    }

    getWeather() {
        try {
            this.logger.log('get from remote api');
            return this.getWeatherFromOpenApi();
        } catch (e) {
            this.logger.log('get from db');
            return this.findWeatherFromDb();
        }
    }

    async getWeatherFromOpenApi() {
        const response = await this.httpService
            .get(`https://api.openweathermap.org/data/2.5/weather?id=${this.configService.get('CITY_ID')}&appid=${this.configService.get('APP_ID')}`)
            .toPromise();
        this.createWeatherToDb(response.data);
        return response.data;
    }

    findWeatherFromDb() {
        return this.weatherModel.findOne().exec();
    }

    /**
     * only allow the most updated document in the collection
     * @param weatherDto
     */
    async createWeatherToDb(weatherDto: WeatherDto) {
        await this.weatherModel.deleteMany().exec();
        const createdWeather = new this.weatherModel(weatherDto);
        return createdWeather.save();
    }

}
