import { MONGO_COLLECTIONS, MongoCollection, MongoTriggerEvent, OPERATION_TYPES } from './models';

type Collection = any;

export abstract class TriggerHandler {
    private database: string;

    protected constructor(protected collectionName: MongoCollection) {}

    public isForCollection(collection: MongoCollection): boolean {
        return this.collectionName === collection;
    }

    public assignDatabase(database: string): void {
        this.database = database;
    }

    async process(event: MongoTriggerEvent): Promise<any> {
        if (event.detail.operationType === OPERATION_TYPES.update) {
            return this.handleUpdate(event);
        }

        if (event.detail.operationType === OPERATION_TYPES.insert) {
            return this.handleInsert(event);
        }

        if (event.detail.operationType === OPERATION_TYPES.delete) {
            return this.handleDelete(event);
        }

        const collection = event.detail?.ns?.coll as MongoCollection;

        console.warn(
            `Operation type not supported: ${event.detail.operationType} for collection: ${collection}.`
        );
    }

    protected async getCollection(): Promise<Collection> {
        const db = await connectToDatabase(this.database);
        return db.collection(this.collectionName);
    }

    protected async getAggregatedCollection(): Promise<Collection> {
        const db = await connectToDatabase(this.database);
        return db.collection(MONGO_COLLECTIONS.aggregatedFeeds);
    }

    protected async handleUpdate(event: MongoTriggerEvent): Promise<any> {
        console.log(
            `handleUpdate method not implemented for collection: ${this.collectionName}.`
        );
    }

    protected async handleInsert(event: MongoTriggerEvent): Promise<any> {
        console.log(
            `handleInsert method not implemented for collection: ${this.collectionName}.`
        );
    }

    protected async handleDelete(event: MongoTriggerEvent): Promise<any> {
        console.log(
            `handleInsert method not implemented for collection: ${this.collectionName}.`
        );
    }
}
