// Core
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports:    [ ConfigModule ],
            useFactory: () => ({
                uri:               'mongodb+srv://app_learn_en:app_learn_en@cluster0.5cfly.mongodb.net/?retryWrites=true&w=majority',
                connectionFactory: (connection) => {
                    // eslint-disable-next-line global-require
                    connection.plugin(require('mongoose-autopopulate'));

                    return connection;
                },
            }),
            inject: [ ConfigService ],
        }),
    ],
})
export class DatabaseModule {}
