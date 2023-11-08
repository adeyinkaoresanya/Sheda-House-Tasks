import { Router } from "express";

const router = Router();

router.get("/calculate", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2= Number(req.query.num2);
  const operator = req.query.operator;
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
        result = num1 % num2;
        break;
    case '**':
            result = num1 ** num2;
        break;
    default:
      res.status(400).json({ error: 'Invalid operator' });
      return;
  }

  res.json({ result });
});
    

export default router;

  