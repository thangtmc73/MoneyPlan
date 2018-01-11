let Utils = {
    guid: function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    },
    numberDaysOfMonth(month, year)
    {
        return new Date(year, month, 0).getDate();
    },
    getFirstDateNextMonth(month, year)
    {
        if (month !== 12)
        {
            return new Date(year, month + 1, 1);
        }
        else {
            return new Date(2017, 12, 31);
        }
    },
    getWeekdayName(day)
    {
        switch(day) {
            case 0:
                return 'Chủ nhật';
                break;
            case 1:
                return 'Thứ hai';
                break;
            case 2:
                return 'Thứ ba';
                break;
            case 3:
                return 'Thứ tư';
                break;
            case 4:
                return 'Thứ năm';
                break;
            case 5:
                return 'Thứ sáu';
                break;
            default:
                return 'Thứ bảy';
                break;
        } 
    },
    totalValueInArray(array, key)
    {
        let total = 0;
        if (array.length > 0)
        {
            array.map(item => {
                total += item[key];
            });
        }

        return total;
    }
};
module.exports = Utils;
