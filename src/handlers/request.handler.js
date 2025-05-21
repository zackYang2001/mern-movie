import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json({
    message: errors.array()[0].msg
  });
  // isEmpty() 是 validationResult 提供用來檢查是否「沒有」錯誤

  next()
};

export default { validate };
