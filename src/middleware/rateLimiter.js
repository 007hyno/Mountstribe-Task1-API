import  rateLimit from "express-rate-limit"

//General req limit 
export const totalReqLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 7, // limit 
    legacyHeaders: false,
    standardHeaders: true,
    keyGenerator: function(req) {
      return req.socket.remoteAddress;  // Ip of the user 
    },
    mesage: "Too many requests, please try again later"
  })

