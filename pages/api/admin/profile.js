import connect from '../../../middlewares/connect';
import authorize from '../../../middlewares/authorize';
import nextConnect from 'next-connect';
import { profile } from '../../../helpers/user';

const api = nextConnect({
    onError(error, req, res) {
        res.status(500).json({ error: `Server Error! -> ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `API Method Error! -> '${req.method}' Method Not Allowded` });
    }
});
api.use(connect);
api.use(authorize('ADMIN'));
api.get(controller);
async function controller(req, res) {
    try {
        const { status, message, data } = await profile(req);
        return res.status(status).json({ message, data });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export default api;  