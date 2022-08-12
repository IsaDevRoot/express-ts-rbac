export default interface Model extends Object {
    id?: number,
    uuid?: string,
    created_at?: string | Date,
    updated_at?: string | Date,
    created_by?: number,
    updated_by?: number,
    status?: string,
}