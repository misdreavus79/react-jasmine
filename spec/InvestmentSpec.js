describe("Investment", () => {
	var stock, investment;
	beforeEach(() => {
		stock = new Stock();
		investment = new Investment({
			stock: stock,
			shares: 100,
			sharePrice: 20
		});
	});

	//specs
	it("should be of a stock", () => {		
		expect(investment.stock).toBe(stock);
	});

	it("should have the invested shares' quantity", () => {
		expect(investment.shares).toEqual(100);
	});

	it("should have the share paid price", () => {
		expect(investment.sharePrice).toEqual(20);
	});

	it("should have a cost", () => {
		expect(investment.cost).toEqual(2000);
	});

	describe("when its stock share valorizes", () => {
		beforeEach(() => {
			stock.sharePrice = 40;
		});

		//specs
		it("should have a positive return of investment", () => {
			expect(investment.roi()).toEqual(1);
		});

		it("should be a good investment", () => {
			expect(investment).toBeAGoodInvestment();
		});
	});

	describe("when its stock share price devalues", () => {
		beforeEach(() => {
			stock.sharePrice = 0;
		});

		//specs
		it("should have a negative return of investment", () => {
			expect(investment.roi()).toEqual(-1);
		});

		it("should be a bad investment", () => {
			expect(investment).not.toBeAGoodInvestment();
		});
	});
});