{
  type Person = {
    name: string;
    age: number;
    email: string;
  };
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    // const keysArr = Object.keys(obj);
    return keys.every((key) => key in obj);
  }

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys<Person>(person, ["name", "age"]));
}
