{
  function removeDuplicates(num: number[]): number[] {
    return num.filter((value, index) => num.indexOf(value) === index);
  }

  console.log(removeDuplicates([2, 3, 4, 5, 2, 3]));
}
