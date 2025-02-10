function isPalindrome(str) {
  str = str.toLowerCase().replace(/[a-z0-9]/g, "");
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
//console.log(isPalindrome("A man, a plan, a canal, Panama"));

function reverseStr(str) {
  reverseStr = str.split("").reverse().join("");
  return reverseStr;
}
//console.log(reverseStr("A man, a plan, a canal, Panama"));

function longestPalindromicSubString(str) {
  let longest = "";

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > longest.length) {
        longest = str.slice(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return longest;
}
// console.log(longestPalindromicSubString('cbbd'))

function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().split("").sort().join("");
  str2 = str2.toLowerCase().split("").sort().join("");
  return str1 === str2;
}
// console.log(areAnagrams('Listen', 'Silent'))

function removeDuplicates(str) {
  let result = "";

  for (const char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }

  return result;
}
// console.log(removeDuplicates('hello world'))

function countPalindromes(str) {
  const palindromes = new Set();

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      palindromes.add(str.slice(left, right + 1));
      left--;
      right++;
    }
  };
  for (let i = 0; i < str.length; i++) {
    expandAroundCenter(i, 1);
    expandAroundCenter(i, i + 1);
  }
  return palindromes.size;
}
// console.log(countPalindromes('ababa'))

function longestCommonPrefix(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0,-1)
            if (prefix === '') return ''
        }
    }
    return prefix
}
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));


function isCaseInsensitive(str){
    return isPalindrome(str)
}
// console.log(isCaseInsensitive('Aba'))