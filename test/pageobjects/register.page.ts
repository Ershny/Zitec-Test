import TestData from '../testdata/testdata';

class RegistrationPage {
    public get registerFName () {
        return $('#customer_firstname');
    }

    public get registerLName () {
        return $('#customer_lastname');
    }

    public get registerPassword () {
        return $('#passwd');
    }

    public get registerAddress () {
        return $('#address1');
    }

    public get registerCity () {
        return $('#city');
    }

    public get zipCode () {
        return $('#postcode');
    }

    public get addressAlias () {
        return $('#alias');
    }

    public get mobilePhone () {
        return $('#phone_mobile');
    }

    public get submitRegistrationBtn () {
        return $('#submitAccount');
    }

    private async chooseGender () {
        const genderSelectValue = Math.floor(Math.random() * 2) + 1;
        const inputId = '#id_gender' + genderSelectValue;
        await $(inputId).click();
    }

    private async chooseRandomBirthday (){
        const selectDay = await $('#days');
        const selectMonth = await $('#months');
        const selectYear = await $('#years');
        const randomDay = Math.floor(Math.random() * 31);
        let randomMonth = 0;
        await selectDay.selectByIndex(randomDay);
        await browser.pause(1000);
        if (randomDay > 29 ){
            const monthsArray = [0,2,4,6,7,9,11];
            randomMonth = monthsArray[Math.floor(Math.random() * monthsArray.length)];
        } else {
            if (randomDay > 27 && randomDay <= 29){
                const monthsArray = [0,2,3,4,5,6,7,8,9,10,11];
                randomMonth = monthsArray[Math.floor(Math.random() * monthsArray.length)];
            } else {
                randomMonth = Math.floor(Math.random() * 12);
            }
        }
        await selectMonth.selectByIndex(randomMonth);
        await browser.pause(1000);
        const randomYear = Math.floor(Math.random()*30) + 18;
        await selectYear.selectByIndex(randomYear);
    }

    private async chooseRandomState (){
        const selectState = await $('#id_state');
        const stateOptionsCount = await selectState.$$('option').length;
        const randomState = Math.floor(Math.random()*(stateOptionsCount - 1)) + 1;
        await selectState.selectByIndex(randomState);
    }

    public async registerProcess (){
        await this.chooseGender();
        await browser.pause(1000);
        await this.registerFName.setValue(TestData.data.first_name);
        await browser.pause(1000);
        await this.registerLName.setValue(TestData.data.last_name);
        await browser.pause(1000);
        await this.registerPassword.setValue(TestData.data.password);
        await browser.pause(1000);
        await this.chooseRandomBirthday();
        await browser.pause(1000);
        await this.registerAddress.setValue(TestData.data.address);
        await browser.pause(1000);
        await this.registerCity.setValue(TestData.data.city);
        await browser.pause(1000);
        await this.chooseRandomState();
        await browser.pause(1000);
        await this.zipCode.setValue(TestData.data.zip_code);
        await browser.pause(1000);
        await this.mobilePhone.setValue(TestData.data.mobile_phone);
        await browser.pause(1000);
        await this.addressAlias.setValue(TestData.data.address_alias);
        await browser.pause(1000);
        await this.submitRegistrationBtn.click();
        await browser.pause(1000);
        await TestData.updateEmailIndexes();
    }
}

export default new RegistrationPage();