// import {Knex} from 'knex';
import knex from '@/utils/configs/knexPg';
import {uuid as uuidv4} from 'uuidv4';
import Model from '@/utils/interfaces/model.interface';
// import Organization1 from '@/resources/organization/1/organization1.interface';

export default class Organization1 implements Model {
    id?: number;
    uuid?: string;
    name?: string;
    sname?: string;
    created_at?: any;
    updated_at?: any;
    created_by?: number;
    updated_by?: number;
    status?: string;
    
    // public find() {

    // }

    public async find(): Promise<Organization1|undefined>  {
        try {
            const select = [
                'org1.id',
                'org1.uuid',
                'org1.name',
                'org1.sname'
            ];
            let query = knex('m_organizations_1 as org1').select(select);
            if (this.id) {
                query.where('org1.id', this.id);
            }
            
            if (this.uuid) {
                query.where('org1.uuid', this.uuid);
            }
            
            if (this.name) {
                query.where('org1.name', this.name);
            }
            
            if (this.sname) {
                query.where('org1.sname', this.sname);
            }

            if (this.status) {
                query.where('org1.status', this.status);
            }

            const data: Organization1 | undefined = await query.first(); 
            
            if (data) {
                let org = new Organization1();
                org.id = data.id;
                org.uuid = data.uuid;
                org.name = data.name;
                org.sname = data.sname;
        
                return org;
            }

            return undefined;
        } catch (e) {
            throw e;
        }
    }

    public async search(): Promise<Array<Organization1>> {
        try {
            const select = [
                'org1.id',
                'org1.uuid',
                'org1.name',
                'org1.sname'
            ];
            let query = knex('m_organizations_1 as org1').select(select);
            if (this.name) {
                query.where('org1.name', 'ilike', `%${this.name}%`)
            }
            
            if (this.sname) {
                query.where('org1.sname', 'ilike', `%${this.sname}%`)
            }

            if (this.status) {
                query.where('org1.status', this.status);
            }

            const datas: Array<Organization1> = await query;
    
            return datas;
        } catch (e) {
            throw e;
        }
    }

    public async get(): Promise<Array<Organization1>> {
        try {
            const select = [
                'org1.id',
                'org1.uuid',
                'org1.name',
                'org1.sname'
            ];
            let query = knex('m_organizations_1 as org1').select(select);
            if (this.name) {
                query.where('org1.name', this.name);
            }
            
            if (this.sname) {
                query.where('org1.sname', this.sname);
            }

            if (this.status) {
                query.where('org1.status', this.status);
            }

            const datas: Array<Organization1> = await query;
    
            return datas;
        } catch (e) {
            throw e;
        }
    }

    public async create(): Promise<Organization1|void> {
        try {
             // let query = knex('m_organizations_1 as org1').insert(data);
            const formattedData = {
                uuid: this.uuid ?? uuidv4(),
                name: this.name,
                sname: this.sname,
                created_by: this.created_by ?? 0,
                updated_by: this.updated_by ?? 0,
                created_at: this.created_at ?? knex.raw('now()'),
                updated_at: this.updated_at ??  knex.raw('now()'),
                status: this.status ?? 'A'
            };
            await knex('m_organizations_1').insert(formattedData);   
        } catch (e) {
            throw e;
        }
    }
    
    public async update(uuid: string): Promise<void> {
        try {
             // let query = knex('m_organizations_1 as org1').insert(data);
            const formattedData = {
                name: this.name,
                sname: this.sname,
                updated_by: this.updated_by,
                updated_at: this.updated_at ??  knex.raw('now()'),
                status: this.status
            };
            await knex('m_organizations_1').update(formattedData).where({uuid: uuid});   
        } catch (e) {
            throw e;
        }
    }
    
    public static async delete(uuid: string): Promise<void> {
        try {
             // let query = knex('m_organizations_1 as org1').insert(data);
            const formattedData = {
                status: 'D',
                // updated_by: this.u,
                updated_at: knex.raw('now()')
            };
            await knex('m_organizations_1').update(formattedData).where({uuid: uuid});   
        } catch (e) {
            throw e;
        }
    }
}