{
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Shape = Rectangle | Circle;

  function calculateShapeArea(input: Shape) {
    if (input.shape === "circle") {
      return Math.PI * input.radius * input.radius;
    } else if (input.shape === "rectangle") {
      return input.height * input.width;
    } else {
      return `Please use correct shap`;
    }
  }

  const circle: Circle = { radius: 5, shape: "circle" };
  const rectangle: Rectangle = { height: 10, shape: "rectangle", width: 4 };

  console.log(calculateShapeArea(circle));
  console.log(calculateShapeArea(rectangle));
}
