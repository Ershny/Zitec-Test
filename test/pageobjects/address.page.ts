import TestData from '../testdata/testdata';

class AddressPage {
    public get addressField (){
        return $('#address1');
    }

    public get cityField (){
        return $('#city');
    }

    public get stateField (){
        return $('#id_state');
    }

    public get zipCodeField (){
        return $('#postcode');
    }

    public get mobilePhoneField (){
        return $('#phone_mobile');
    }

    public get addressName (){
        return $('#alias');
    }

    public get submitAddressBtn (){
        return $('#submitAddress');
    }

    private async chooseRandomState (){
        const stateOptionsCount = await this.stateField.$$('option').length;
        const randomState = Math.floor(Math.random()*(stateOptionsCount - 1)) + 1;
        await this.stateField.selectByIndex(randomState);
    }

    public async addNewAddress (){
        await this.addressField.setValue(TestData.data.new_address.address);
        await browser.pause(1000);
        await this.cityField.setValue(TestData.data.new_address.city);
        await browser.pause(1000);
        await this.chooseRandomState();
        await browser.pause(1000);
        await this.zipCodeField.setValue(TestData.data.new_address.zip_code);
        await browser.pause(1000);
        await this.mobilePhoneField.setValue(TestData.data.new_address.mobile_phone);
        await browser.pause(1000);
        await this.addressName.setValue(TestData.data.new_address.address_alias);
        await browser.pause(1000);
        await this.submitAddressBtn.click(); 
    }

}

export default new AddressPage();