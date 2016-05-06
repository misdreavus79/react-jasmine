(($, Investment, Stock) => {
	function NewInvestmentView(params){
		this.$element = $(params.selector);
	}
	NewInvestmentView.prototype = {
		_: function (){
			return this.$element.find.apply(this.$element, arguments);
		},
		getSymbolInput: function(){
			return this._('.new-investment-stock-symbol');
		}
	}
	NewInvestmentView.prototype.setSymbol = function(value) {
		this.$('.new-investment-stock-symbol').val(value);
	};
	this.NewInvestmentView = NewInvestmentView;
})(jQuery, Investment, Stock);