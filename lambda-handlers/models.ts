export const MONGO_COLLECTIONS = {
    cool: 'cools',
    fancy: 'fancies',
    aggregatedFeeds: 'aggregatedfeeds'
} as const;

export type MongoCollection =
    (typeof MONGO_COLLECTIONS)[keyof typeof MONGO_COLLECTIONS];


export const OPERATION_TYPES = {
    insert: 'insert',
    update: 'update',
    replace: 'replace',
    delete: 'delete'
} as const;

export type OperationType =
    (typeof OPERATION_TYPES)[keyof typeof OPERATION_TYPES];

export type MongoTriggerEvent = {
    version: string;
    id: string;
    'detail-type': string;
    source: string;
    account: string;
    time: string;
    region: string;
    resources: string[];
    detail: {
        _id: {
            _data: string;
        };
        operationType: OperationType;
        clusterTime: {
            T: number;
            I: number;
        };
        wallTime: string;
        ns: {
            db: string;
            coll: string;
        };
        documentKey: {
            _id: string;
        };
        // Additional fields for other operation types
        fullDocument: Record<string, any>; // For insert/update/replace
        updateDescription: {
            updatedFields: Record<string, any>;
            removedFields: string[];
        }; // For update
    };
};
