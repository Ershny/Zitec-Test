const fs = require('fs');

class TestData {

    public get data() {
        const rawdata = fs.readFileSync(__dirname + '/variables.json');
        return JSON.parse(rawdata);
    }

    public async updateEmailIndexes () {
        let data = this.data;
        data.email.last_index ++;
        data.email.next_index ++;
        fs.writeFileSync(__dirname + '/variables.json', JSON.stringify(data, null, 2));
    }

}

export default new TestData();