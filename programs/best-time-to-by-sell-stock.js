/**
 * Best Time to Buy and Sell Stock (121): Find max profit from one stock buy/sell (uses pointer logic).
 */

function getMaxProfit(stockPrice) {
    let maxProfit = 0;
    let minPrice = stockPrice[0];

    for (let i = 1; i < stockPrice.length; i++) {
        let sellPrice = stockPrice[i];
        if (sellPrice < minPrice) {
            minPrice = sellPrice;
        } else {
            maxProfit = Math.max(maxProfit, sellPrice - minPrice);
        }
        console.log(`Min price: ${minPrice}; Sell price: ${sellPrice}; Profit: ${maxProfit}`);
    }

    return maxProfit;
}

console.log("Max profit generated:", getMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(getMaxProfit([7, 6, 4, 3, 1]));
