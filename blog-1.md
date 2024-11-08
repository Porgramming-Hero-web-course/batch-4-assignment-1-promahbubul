# TypeScript Blog

## 01 Union Type

```ts
type year = string | number;
```

- union type is using like `|` symbol for type. we can easy use `string` or `number` type in TypeScript union type

## 02 Intersection Type

```ts
type UserName = {
  firstName: string;
  lastName: string;
};

type UserDetails = {
  email: string;
  address: string;
  age: number;
};

type User = UserName & UserDetails;
```

- Intersection type is use for add two types. Using `&` symbol we can two type in one Type.
