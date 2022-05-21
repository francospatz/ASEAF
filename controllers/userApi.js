const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const transporter = require('../config/nodemailer');
const jwt_secret = process.env.ULTRA_SECRET_KEY;

const login = async(req, res) => {
    let data;
    try {
        const {email, password} = req.body
        data = await User.findOne({'email': email}, '-_id -__v');
        console.log(data)
        if(!data){
            res.status(400).json({ msg: 'Usuario o contraseña incorrectos.'}); 
        }else{
            const match = await bcrypt.compare(password, data.password);
            if(match){
                await User.updateOne({ email: req.body.email }, { logged: true })
                const {email, username} = data;
                const userForToken = {
                    email: email,
                    username: username,
                };
                const token = jwt.sign(userForToken, jwt_secret, {expiresIn: '60m'});
                res
                .cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict",
                })
                .status(200)
                .json({
                    msg:'Autentificación correcta.',
                    token: token,
                });
            }else {
                res.status(400).json({ msg: 'Usuario o contraseña incorrectos.'});
            }
        }        
    } catch (error) {
        console.log('Error:', error);
    }
};

const logout = async(req, res) => {
    let data;
    try {
        data = await User.updateOne({ email: req.params.email })
        res.clearCookie("access-token").status(200).json({message: 'Token deleted'});
    } catch (error) {
        console.log('Error:', error);
    }
};

const sendEmail = async(req, res) => {
    try {
        await transporter.sendMail({
            to: req.params.email,
            subject: "Acceso al drive informativo",
            html: `<h3>Google Drive</h3>
                <a href = ${process.env.DRIVE_URL}>Haz clic para ir al Google Drive</a>
                <p>¡Gracias por apuntarte!</p>
                <p>ASEAF</p>`
        });
        res.status(200).json({
            message: 'El email se envió correctamente'
        })
    } catch (error) {
        console.log('Error: ', error)
    }
};

/* const signUpUser = async(req, res) => {
    let data;
    try {
        const {email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        
        data = await User.create({'email': email, 'password': hashPassword});
        res.status(201).json(data);
        
    } catch (error) {
        console.log('Error:', error);
    }
}; */

const user = {
    login,
    logout,
    sendEmail, 
    //signUpUser
};

module.exports = user;