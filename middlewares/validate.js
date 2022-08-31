const fs = require('fs');
export default function validate(schema) {
    return function (req, res, next) {
        try {
            if (schema.body) {
                const { error, value } = schema.body.validate(req.body);
                if (error) throw error;
                req.body = value;
            }
            if (schema.query) {
                const { error, value } = schema.query.validate(req.query);
                if (error) throw error;
                req.query = value;
            }
            if (schema.params) {
                const { error, value } = schema.params.validate(req.params);
                if (error) throw error;
                req.params = value;
            }
            return next();
        } catch (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.json({ error: `Validation Error! -> ${error.message.replace(new RegExp('\\"', "g"), "")}` });
        }
    }
}
