class OrderHistoryPage {
    public get OrderTableBody () {
        return $('#order-list').$('tbody');
    }

    public async orderHistoryContaingItems () {
        await expect(this.OrderTableBody).toHaveChildren(1);
    }
}

export default new OrderHistoryPage();