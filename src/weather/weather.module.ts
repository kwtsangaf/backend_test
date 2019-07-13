import {HttpModule, Logger, Module} from '@nestjs/common';
import {WeatherService} from './weather.service';
import {WeatherController} from './weather.controller';
import {ConfigModule} from '../config/config.module';
import {MongooseModule} from '@nestjs/mongoose';
import {WeatherSchema} from '../schema/weather.schema';

@Module({
    imports: [HttpModule, ConfigModule, MongooseModule.forFeature([{name: 'Weather', schema: WeatherSchema}])],
    controllers: [WeatherController],
    providers: [WeatherService, Logger],
})
export class WeatherModule {
}
