import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from './config/config.module';
import {WeatherModule} from './weather/weather.module';
import {MongooseModule} from '@nestjs/mongoose';
import {AuthModule} from './auth/auth.module';

@Module({
    imports: [ConfigModule, WeatherModule, MongooseModule.forRoot('mongodb://localhost/27017'), AuthModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
