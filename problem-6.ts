{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type Partial = {
    age: number;
  };

  function updateProfile(person: Profile, age: Partial): Profile {
    return { ...person, ...age };
  }

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
