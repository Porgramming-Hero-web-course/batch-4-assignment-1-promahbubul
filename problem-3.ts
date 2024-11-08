{
  function countWordOccurrences(sentence: string, search: string) {
    const sentenceLowerCase = sentence.toLocaleLowerCase();
    const searchLowerCase = search.toLocaleLowerCase();

    const splitWord = sentenceLowerCase.split(" ");
    const matchWord = splitWord.filter(
      (word) => word === searchLowerCase
    ).length;
    return matchWord;
  }

  console.log(countWordOccurrences("I love typescript", "typescript"));
}
