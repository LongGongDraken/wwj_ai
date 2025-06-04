/**
 *
 * @param {String} num1
 * @param {String} num2
 * @returns {String}
 *
 */
function addLargeNumbers(num1, num2) {
  let res = ""; // 存储结果
  let carry = 0; // 存储进位
  let i = num1.length - 1; // 指针
  let j = num2.length - 1; // 指针
  while (i >= 0 || j >= 0 || carry) {
    const digit1 = i>=0 ? parseInt(num1[i]) : 0;
    const digit2 = j>=0? parseInt(num2[j]) : 0;
    const sum = digit1 + digit2 + carry; // 计算当前位的和
    result = sum % 10 + result; // 将当前位的和添加到结果中
    carry = Math.floor(sum / 10); // 更新进位
    i--;
    j--;
  }
  return result;
}