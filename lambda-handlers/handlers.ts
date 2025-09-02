import { CoolHandler } from './subscription-handler';
import { TriggerHandler } from './trigger-handler';
import { MongoCollection } from './models';


export const HANDLERS: TriggerHandler[] = [
    new CoolHandler(),
];

export const getHandler = (
    collection: MongoCollection,
    database: string
): TriggerHandler | undefined => {
    if (!collection) {
        console.warn(
            `Collection property is missing on getHandler: ${collection}`
        );
        return;
    }

    const handler = HANDLERS.find((h) => h.isForCollection(collection));

    if (!handler) {
        console.warn(
            `There is no handler registered for collection: ${collection}`
        );
        return;
    }

    handler.assignDatabase(database);

    return handler;
};

