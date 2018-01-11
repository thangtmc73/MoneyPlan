import Utils from './../utils/Utils'
class UsedMoneyDetailModel {
    constructor(title, subtitle, category_id, date, value) {
        this.id = Utils.guid();;
        this.title = title;
        this.subtitle = subtitle;
        this.category_id = category_id;
        this.date =  date;
        this.value = value;
    }
}

module.exports = UsedMoneyDetailModel;