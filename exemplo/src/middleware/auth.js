const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next){
    const token = req.headers["authorization"]
    console.log(token);

    if (!token){
        res.status(400).json({msg: "Invalid Token, or not sent with request!"})
        return
    }

    jwt.verify(token, "MyS3cr3tP455w0rD", (err, decoded)=>{
        if (err){
            console.log(err)
            res.status(400).json({msg: "Invalid Token, or not sent with request!"})
            return
        }

        console.log('jwt', decoded);
        req.session = decoded;
        next();

    })

}

module.exports = authMiddleware;