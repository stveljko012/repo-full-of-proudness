import { MONGO_COLLECTIONS, MongoTriggerEvent } from './models';
import { TriggerHandler } from './trigger-handler';

export class CoolHandler extends TriggerHandler {
    constructor() {
        super(MONGO_COLLECTIONS.cool);
    }

    protected async handleInsert(event: MongoTriggerEvent): Promise<any> {
        const aggregatedCollection = await this.getAggregatedCollection();

    }

    protected async handleUpdate(event: MongoTriggerEvent): Promise<any> {
        const collection = await this.getCollection();
    }
}
