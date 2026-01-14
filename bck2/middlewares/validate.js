import { validationResult } from "express-validator";
import ErrorHandler from "../utils/errorHandler.js";
import { error } from "console";

const validate = (req,res,next) => {
    const errors = validationResult(req);    // validationResult req se errors nikalta hai

    if (!errors.isEmpty()) {

        // Sirf first error dikha rahe hain (clean)

        throw new ErrorHandler(errors.array()[0].msg, 400);

      }
      next();

}

export default validate;