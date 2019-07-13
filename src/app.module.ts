import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from './config/config.module';
import {WeatherModule} from './weather/weather.module';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from './auth/auth.module';

let hostname = 'localhost:27017';
if (process.env.NODE_ENV === 'docker') {
    hostname = 'mongo';
}

@Module({
    imports: [ConfigModule, WeatherModule, MongooseModule.forRoot(`mongodb://${hostname}`), AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
