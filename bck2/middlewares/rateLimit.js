import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15*60*1000, // 15 minutes , windowms is time window in ms
    max: 50,
    message: "Too many requests from this IP, please try again after 15 minutes"
});

export default limiter;