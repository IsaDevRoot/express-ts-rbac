import Organization1Model from '@/resources/organization/1/organization1.model';
// import Organization1 from '@/resources/post/post.interface';

class Organization1Service {
    public static async index(query: {name?: string|undefined, sname?: string|undefined, status: string}): Promise<Array<{uuid: string, name: string, sname: string}>> {
        try {
            return await Organization1Model.get(query);
        } catch (e) {
            throw e;
        }
    }

    /** 
     * create a new post
     */ 
    public static async create(name: string, sname: string): Promise<void> {
        try {
            await Organization1Model.create({
                name: name,
                sname: sname
            });
        } catch (e) {
            throw e;
        }
    }

    public static async update(uuid: string, name: string, sname: string): Promise<void> {
        try {
            await Organization1Model.update(uuid, {
                name: name,
                sname: sname
            });
        } catch (e) {
            throw e;
        }
    }
    
    public static async delete(uuid: string): Promise<void> {
        try {
            await Organization1Model.delete(uuid);
        } catch (e) {
            throw e;
        }
    }
}

export default Organization1Service;