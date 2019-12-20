import Utils from './../utils/Utils';

const UsedMoneyDetailSchema = {
  name: 'UsedMoneyDetail',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    subtitle: 'string',
    category_id: 'int',
    date: 'date',
    value: 'int',
  },
};

const PlanSchema = {
  name: 'Plan',
  primaryKey: 'id',
  properties: {
    id: 'string',
    subtitle: 'string',
    date: 'date',
    target: 'int',
  },
};

function addNewUsedMoneyDetail(detail) {}

function getAllUsedMoneyDetailSpecifiedMonth(month, year) {}

function getAllUsedMoneyDetailSpecifiedMonthSortByCategory(month, year) {}

function getUsedMoneyDetailWithId(id) {}

function updateUsedMoneyDetailWithId(idDetail, detail) {}

function deleteUsedMoneyDetail(id) {}

function addNewPlan(plan) {}

function getAllPlans() {}

function deletePlan(id) {}

function getMoney() {}

export default {
  addNewUsedMoneyDetail,
  getAllUsedMoneyDetailSpecifiedMonth,
  getAllUsedMoneyDetailSpecifiedMonthSortByCategory,
  getUsedMoneyDetailWithId,
  updateUsedMoneyDetailWithId,
  deleteUsedMoneyDetail,
  addNewPlan,
  getAllPlans,
  deletePlan,
  getMoney,
};
