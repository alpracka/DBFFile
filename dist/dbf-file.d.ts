declare var __awaiter: any;
declare const assert: any;
declare const iconv: any;
declare const path_1: any;
declare const field_descriptor_1: any;
declare const options_1: any;
declare const utils_1: any;
/** Represents a DBF file. */
declare class DBFFile {
    constructor();
    /** Opens an existing DBF file. */
    static open(path: any, options: any): any;
    /** Creates a new DBF file with no records. */
    static create(path: any, fields: any, options: any): any;
    /** Reads a subset of records from this DBF file. */
    readRecords(maxCount?: number): any;
    /** Appends the specified records to this DBF file. */
    appendRecords(records: any): any;
}
declare function openDBF(path: any, options: any): any;
declare function createDBF(path: any, fields: any, options: any): any;
declare function readRecordsFromDBF(dbf: any, maxCount: any): any;
declare function appendRecordsToDBF(dbf: any, records: any): any;
declare function validateFieldDescriptors(fields: any): void;
declare function validateRecord(fields: any, record: any): void;
declare function calculateRecordLengthInBytes(fields: any): number;
declare function getEncodingForField(field: any, encoding: any): any;
