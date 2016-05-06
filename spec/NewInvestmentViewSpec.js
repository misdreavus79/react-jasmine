describe("NewInvestmentView", () => {
	var view;
	beforeEach(() => {
		loadFixtures('NewInvestmentView.html');
		appendLoadFixtures('InvestmentListView.html');
		listView = new InvestmentListView({
			id: 'investment-list'
		});
		view = new NewInvestmentView({
			id: 'new-investment',
			listView: listView
		});
	});
	describe("when its add buttonis clicked", () => {
		beforeEach(() => {
			//fill form inputs
			//simulate the clicking of the button
		});

		//specs
		it("should add the investment to the list", () => {
			expect(listView.count()).toEqual(1);
		});
	})
	//specs
	it("should allow the input of the stock symbol", () => {

	});
	it("should allow the input of the number of shares", () => {

	});
	it("should allow the input of the share price", () => {

	});
	it("should expose a property with its DOM element", () => {
		expect(view.$element).toExist();
	});
	it("should have an empty stock symbol", () => {
		expect(view.getSymbolInput()).toHaveValue('');
	});
});

/* Fixture Functions:

loadFixtures(fixture) = loads fixtures from /javascripts/fixtures directory
setFixtures(fixture string) = the same as using $('#element').html('<fixture html>'); aka html string
appendLoadFixtures(fixture [, fixture, fixture...]) = same as loadFixtures, but appends each one instead of overwriting. can take more than one parameter/fixture
appendSetFixtures(fixture string [, fixture string, fixture string...]) = same as setFixtures, but appends each one insteadd of overwriting. Can take more than one parameter/fixture
readFixtures(fixture [, fixture, fixture...]) = instead of appending the fixtures (like appendLoadFixtures), it returns them as a string
preloadFixtures(fixture [, fixture, fixture...]) = like appendLoadFixtures, but instead of loading them to the DOM it caches them so they can be loaded later
*/