class Investment{
	constructor(params){
		this.stock = params.stock;
		this.shares = params.shares;
		this.sharePrice = params.sharePrice;
		this.cost = this.shares * this.sharePrice
	}

	roi(){
		return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
	}

	isGood(){
		return this.roi() > 0;
	}
}