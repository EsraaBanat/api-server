class Collection {
    constructor(model) {
        this.model = model;
    }
    async create(obj) {
        try {
            let newRecord = await this.model.create(obj);
            return newRecord;
        } catch (error) {
            console.error('Somthing is going wrong when creating a new record in model : ',this.model)
            console.log(error);
        }
    }
    
    async get(recordId) {
        try {
            let record = null;
            if (!recordId) {
                record = await this.model.findAll();
                return record;
            }
            else {
                record = await this.model.findOne({ where: { id: recordId } });
                return record;
            }
        } catch (error) {
            console.error('Somthing is going wrong when Reading records in model : ', this.model);
            console.log(error);
        }
    }
    
    async update(obj) {
        try {
            let updated = await record.update(obj);
            return updated;
        } catch (error) {
            console.error('Somthing is going wrong when Updating a record in model : ', this.model);
            console.log(error);
        }
    }
    
    async delete(recordId) {
        if (!recordId) {
            throw new Error('no id provided for model ', this.model)
        }
        try {
            let deleted = await this.model.destroy({ where: { id: recordId } });
            return deleted;
        } catch (error) {
            console.error('Somthing is going wrong when Deleting a record in model : ', this.model);
            console.log(error);
        }
    }
}

module.exports = Collection;
