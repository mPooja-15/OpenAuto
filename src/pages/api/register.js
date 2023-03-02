import Employee from "../../../models/Register";
import "../../../utils/dbConnect";

function errorMessage(error, message) {
    return {
      isSuccessful: false,
      error,
      message,
    };
  }

export default async (req, res) => {
   
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(req.body.email)) {
            res.status(400).send({Message:"This Email is invalid"})
        }
        const employees = await Employee.create(req.body);
        return res.status(201).json({
          success: true,
          data: employees,
        });
      } catch (error) {
        return res.status(400).send({
          success: false,
          error
        });
      }
    default:
      res.setHeaders("Allow", ["GET", "POST"]);
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`);
  }
};
