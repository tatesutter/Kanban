import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access Denied: No Token Provided' });
    }
    const token = authHeader.split(' ')[1];
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid Token' });
        }
        req.user = decoded;
        return next();
    });
    return next();
};
