import Realm from 'realm';
import CategoryModel from './../model/CategoryModel';
import Utils from './../utils/Utils'

//repository.deleteAll();
UsedMoneyDetailSchema = {
    name: 'UsedMoneyDetail',
    primaryKey: 'id',
    properties: {
        id: 'string',
        title: 'string',
        subtitle: 'string',
        category_id: 'int',
        date:  'date',
        value: 'int',
    }
};

PlanSchema = {
    name: 'Plan',
    primaryKey: 'id',
    properties: {
        id: 'string',
        subtitle: 'string',
        date:  'date',
        target: 'int',
    }
};

let repository = new Realm({
    schema: [UsedMoneyDetailSchema, PlanSchema]
});

let DBService = {
    addNewUsedMoneyDetail: function (detail) {
        repository.write(() => {
            repository.create('UsedMoneyDetail', detail);
        })
    },
    getAllUsedMoneyDetailSpecifiedMonth: function (month, year) {
        return repository.objects('UsedMoneyDetail').filtered('date >= $0 && date < $1', (new Date(year, month, 1)), (Utils.getFirstDateNextMonth(month, year))).sorted('date', true);
    },
    getAllUsedMoneyDetailSpecifiedMonthSortByCategory: function (month, year) {
        return repository.objects('UsedMoneyDetail').filtered('date >= $0 && date < $1', (new Date(year, month, 1)), (Utils.getFirstDateNextMonth(month, year))).sorted('category_id');
    },
    getUsedMoneyDetailWithId: function(id)
    {
        return repository.objects('UsedMoneyDetail').filtered('id = $0', id)[0];
    },
    updateUsedMoneyDetailWithId: function(idDetail, detail)
    {
        repository.write(() => {
            repository.create('UsedMoneyDetail', {id: idDetail, title: detail.title, subtitle: detail.subtitle, date: detail.date, value: detail.value, category_id : detail.category_id}, true);
        })
    },
    deleteUsedMoneyDetail: function (id)
    {
        repository.write(() => {
            let detail = repository.objects('UsedMoneyDetail').filtered('id = $0', id);
          
            // Delete the book
            repository.delete(detail);
        });
    },
    addNewPlan: function (plan) {
        repository.write(() => {
            repository.create('Plan', plan);
        })
    },
    getAllPlans: function()
    {
        return repository.objects('Plan').sorted('date', true);
    },
    deletePlan: function (id)
    {
        repository.write(() => {
            let plan = repository.objects('Plan').filtered('id = $0', id);
          
            // Delete the book
            repository.delete(plan);
        });
    },

    getMoney: function()
    {
        data = repository.objects('UsedMoneyDetail');
        let total = 0;
        data.map((item) => {
            total += item.value;
        });
        return total;
    },

};

module.exports = DBService;
