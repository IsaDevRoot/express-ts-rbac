import Organization1 from '@/resources/organization/1/organization1.model';
import HttpException from '@/utils/exceptions/http.exception';

class Organization1Service {
    public static async index(query: {name?: string|undefined, sname?: string|undefined, status: string}): Promise<Array<Organization1>> {
        try {
            let org = new Organization1();
            org.name = query.name;
            org.sname = query.sname;
            org.status = query.status;
            return await org.search();
        } catch (e) {
            throw e;
        }
    }
    
    public static async detail(uuid: string): Promise<Organization1|undefined> {
        try {
            let org = new Organization1();
            
            org.uuid = uuid;
            const data = await org.find();
            if (data) {
                return data;
            }

            throw new HttpException(404, '');
        } catch (e) {
            throw e;
        }
    }

    /** 
     * create a new post
     */ 
    public static async create(name: string, sname: string): Promise<void> {
        try {
            let org = new Organization1();
            org.name = name;
            org.sname = sname;
            await org.create();
        } catch (e) {
            throw e;
        }
    }

    public static async update(uuid: string, name: string, sname: string): Promise<Organization1|undefined> {
        try {
            let org: Organization1| undefined = new Organization1();
            org.uuid = uuid;
            org = await org.find();
            if (org) {
                org.name = name;
                org.sname = sname;
                await org.update(uuid);
                return org;
            }
            throw new HttpException(404, '');
        } catch (e) {
            throw e;
        }
    }
    
    public static async delete(uuid: string): Promise<Organization1 | undefined> {
        try {
            let org = new Organization1();
            org.uuid = uuid;
            const data = await org.find();

            console.log(data);
            
            if (data) {
                org.status = 'D';
                await org.update(uuid);
                return org;
            } else {
                throw new HttpException(404, '');
            }

            // await Organization1.delete(uuid);
        } catch (e) {
            throw e;
        }
    }
}

export default Organization1Service;