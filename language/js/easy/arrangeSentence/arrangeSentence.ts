export const arrangeSentence = {
  name: 'Arrange Sentence',
  description: `Input sentence is always of the form "Hello here i come.". Hence the rules are:
    * It starts with a capital letter.
    * Is space seprated.
    * Ends with a fullstop.
    Arrange sentence such that above rules are followed but words are arranged as per length.`,
  solution: `function arrangeSentence(str) {
    let wordList = str.split(' ');
    // return in case "Hello." or ""
    if (wordList.length < 2) {
      return str;
    }
    wordList[0] = wordList[0].toLowerCase();
    wordList[wordList.length - 1] = wordList[wordList.length - 1].split('.')[0];
    // deal with extra spaces like "Hello     i am here."
    wordList = wordList.filter((element) => element.trim().length > 0);
    // arrange words based on length
    // nlogn solution
    //wordList = [...sortBasedOnLength(wordList,'sort')];
    // n solution but higher space complexity
    wordList = [...sortBasedOnLength(wordList, '')];
    // make 1st char capital
    const firstCharList = wordList[0].split('');
    firstCharList[0] = firstCharList[0].toUpperCase();
    wordList[0] = firstCharList.join('');
    wordList[wordList.length - 1] = wordList[wordList.length - 1] + '.';
    return wordList.join(' ');
  };
  function sortBasedOnLength(list, type) {
    let tempList = [...list];
    if (type === 'sort') {
      tempList.sort((a, b) => a.length - b.length);
    } else {
      // iterate over array and store words based on length in a map
      const wordLenMap = {};
      tempList.map((element) => {
        if (wordLenMap[element.length] !== undefined) {
          wordLenMap[element.length] = wordLenMap[element.length] + ' ' + element;
        } else {
          wordLenMap[element.length] = element;
        }
      });
      // iterate over map and assign to wordList
      tempList = [];
      Object.keys(wordLenMap).map((element) => {
        tempList.push(wordLenMap[element]);
      });
    }
    return tempList;
  };
  const str1 = "Hello ir4 am3 here.";
  const str = "Hello p ok i o am here.";
  console.log(arrangeSentence(str1));`
};
