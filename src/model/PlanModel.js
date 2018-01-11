import Utils from './../utils/Utils'
class PlanModel {
    constructor(subtitle, date, target) {
        this.id = Utils.guid();;
        this.subtitle = subtitle;
        this.date =  date;
        this.target = target;
    }
}

module.exports = PlanModel;