import connect from '../../middlewares/connect';
import validate from '../../middlewares/validate';
import nextConnect from 'next-connect';
import { register } from '../../helpers/user';
import { registrationSchema } from '../../interfaces/user';

const api = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Server Error! -> ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `API Method Error! -> '${req.method}' Method Not Allowded` });
  }
});
api.use(connect);
api.use(validate(registrationSchema));
api.post(controller);
async function controller(req, res) {
  try {
    const { status, message, data } = await register(req);
    return res.status(status).json({ message, data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default api;