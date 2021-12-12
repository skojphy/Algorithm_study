// 122. Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = prices => {
  let buyingPrice = prices[0];
  let total = 0;
  if (prices.length === 1) return 0;
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i - 1] > prices[i] && prices[i] <= prices[i + 1]) buyingPrice = prices[i];
    if (prices[i - 1] < prices[i] && prices[i] >= prices[i + 1]) {
      total += prices[i] - buyingPrice;
      buyingPrice = prices[i];
    }
    console.log(prices[i - 1], prices[i], buyingPrice, total);
  }
  if (prices[prices.length - 1] > prices[prices.length - 2])
    total += prices[prices.length - 1] - buyingPrice;
  return total;
};

// const prices = [7, 1, 5, 3, 6, 4];

const prices = [0, 5, 5, 6, 2, 1, 1, 3];

console.log(maxProfit(prices));
