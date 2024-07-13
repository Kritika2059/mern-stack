// make a function that takes a sentence and return the greatest(in length) palindrome using
// eg greatest('mam is beautiful and madam is fabulous but mom is the best),it must return madam because madam have greater length than mam



let longestPalindrome = (input) => {
    let temp1 = input.split(" "); //["my","mom","is","beautiful","but","i","like","madam"]
    let temp2 = temp1.filter((word) => {
      return isPalindrome(word);
    }); //["mom","madam"]
    let tempWord = ""; //"madam"
    temp2.forEach((word) => {
      if (word.length > tempWord.length) {
        tempWord = word;
      }
    });
    return tempWord;
  };
  console.log(longestPalindrome("my mom is beautiful but i like madam "));