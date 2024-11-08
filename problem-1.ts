{
  function sumArray(num: number[]): number {
    return num.reduce((prev, current) => prev + current, 0);
  }

    console.log(sumArray([10, 20, 30]));
}
