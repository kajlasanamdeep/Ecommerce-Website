export default function validate(schema) {
    return function (req, res, next) {
        try {
            if (schema.body) {
                const { error } = schema.body.validate(req.body);
                if (error) throw error;
            }
            if (schema.query) {
                const { error } = schema.query.validate(req.query);
                if (error) throw error;
            }
            if(schema.params){
                const { error } = schema.params.validate(req.params);
                if (error) throw error;
            }
            return next();
        } catch (error) {
            return res.json({error: `Validation Error! -> ${error.message.replace(new RegExp('\\"',"g"),"")}`});
        }
    }
  }
  