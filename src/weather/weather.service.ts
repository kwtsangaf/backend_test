import {HttpService, Injectable} from '@nestjs/common';
import {ConfigService} from '../config/config.service';

@Injectable()
export class WeatherService {
    constructor(private readonly httpService: HttpService,
                private readonly configService: ConfigService) {
    }

    async getWeather() {
        const response = await this.httpService
            .get(`https://api.openweathermap.org/data/2.5/weather?id=${this.configService.get('CITY_ID')}&appid=${this.configService.get('APP_ID')}`)
            .toPromise();
        return response.data;
    }
}
