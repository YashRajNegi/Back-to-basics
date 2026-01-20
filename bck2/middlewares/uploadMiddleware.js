import multer from "multer";
import path from 'path';
import fs from 'fs';

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {
        // unique filename
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
})

//File filter (SECURITY)
const fileFilter = (req, file, cb) => {
    if(file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type"), false);
    }
}

// Final upload middleware
const upload = multer({
    storage, 
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

export default upload;