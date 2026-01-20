import express from "express";
const router = express.Router();

import upload from "../middlewares/uploadMiddleware.js";

//single upload
router.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded or invalid file type"
        });
    }

    res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        file: {
            filename: req.file.filename,
            originalname: req.file.originalname,
            size: req.file.size,
            mimetype: req.file.mimetype,
            path: req.file.path
        }
    });
});

export default router;