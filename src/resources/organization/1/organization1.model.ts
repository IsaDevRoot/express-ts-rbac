// import {Knex} from 'knex';
import knex from '@/utils/configs/knexPg';
import {uuid} from 'uuidv4';
// import Organization1 from '@/resources/organization/1/organization1.interface';

export default class Organization1Model {
    // private knex = connection;
    // private db: Knex;
    
    // constructor() {
    //     this.knex = ;
    // };

    public static async get(qParams: { name?: string|undefined, sname?: string|undefined, status: string}): Promise<Array<{uuid: string, name: string, sname: string}>> {
        // const orgs: Organization1[] = [];
        try {
            const select = [
                'org1.uuid',
                'org1.name',
                'org1.sname'
            ];
            let query = knex('m_organizations_1 as org1').select(select);
            if (qParams.name) {
                query.where('org1.name', 'ilike', `%${qParams.name}%`)
            }
            
            if (qParams.sname) {
                query.where('org1.sname', 'ilike', `%${qParams.sname}%`)
            }

            query.where('org1.status', qParams.status);
            const datas: Array<{uuid: string, name: string, sname: string}> = await query;
            // datas.forEach(() => {
            //     // const org1;
            //     // org1.uuid
            //     orgs.push(item);
            // });
    
            return datas;
        } catch (e) {
            throw e;
        }
    }

    public static async create(data: {name: string, sname: string}): Promise<{uuid: string, name: string, sname: string}|void> {
        try {
             // let query = knex('m_organizations_1 as org1').insert(data);
            const formattedData = {
                uuid: uuid(),
                ...data,
                created_by: 0,
                updated_by: 0,
                created_at: knex.raw('now()'),
                updated_at: knex.raw('now()'),
                status: 'A'
            };
            await knex('m_organizations_1').insert(formattedData);   
        } catch (e) {
            throw e;
        }
    }
    
    public static async update(uuid: string, data: {name: string, sname: string}): Promise<{uuid: string, name: string, sname: string}|void> {
        try {
             // let query = knex('m_organizations_1 as org1').insert(data);
            const formattedData = {
                ...data,
                updated_by: 0,
                updated_at: knex.raw('now()')
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
                updated_by: 0,
                updated_at: knex.raw('now()')
            };
            await knex('m_organizations_1').update(formattedData).where({uuid: uuid});   
        } catch (e) {
            throw e;
        }
    }
}