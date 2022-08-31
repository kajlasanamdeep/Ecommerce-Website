import connect from '../../middlewares/connect';
import nextConnect from 'next-connect';
import { getAll } from '../../helpers/offer';

const api = nextConnect({
  onError(error, req, res) {
    res.status(500).json({ error: `Server Error! -> ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `API Method Error! -> '${req.method}' Method Not Allowded` });
  }
});
api.use(connect);
api.get(controller);
async function controller(req, res) {
  try {
    const { status, message, data } = await getAll(req);
    return res.status(status).json({ message, data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export default api;