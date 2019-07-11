import {HttpModule, Module} from '@nestjs/common';
import {WeatherService} from './weather.service';
import {WeatherController} from './weather.controller';
import {ConfigModule} from '../config/config.module';

@Module({
    imports: [HttpModule, ConfigModule],
    controllers: [WeatherController],
    providers: [WeatherService],
})
export class WeatherModule {
}
