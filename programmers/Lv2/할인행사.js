function solution(want, number, discount) {
  var answer = 0;

  if (want.length === 1 && !discount.includes(want[0])) {
    return 0;
  }

  const numberByProduct = {};
  want.forEach((item, idx) => (numberByProduct[item] = number[idx]));

  let sumOfProduct = 0;
  number.forEach((num) => (sumOfProduct += num));

  while (discount.length >= sumOfProduct) {
    let count = 0;
    const a = { ...numberByProduct };

    for (let i = 0; i < 10; i++) {
      const discountValue = discount[i];

      if (!isNaN(a[discountValue]) && a[discountValue] > 0) {
        a[discountValue] -= 1;
        count++;
      }
    }

    if (count === sumOfProduct) {
      answer++;
    }

    discount.shift();
  }

  return answer;
}
