import multer from 'multer';
export default function upload(Type) {
    return multer({
        storage: multer.diskStorage({
            destination: './public/images',
            filename: (req, file, cb) => cb(null, `${file.fieldname}${Date.now()}.jpg`)
        })
    }).single(Type);
};