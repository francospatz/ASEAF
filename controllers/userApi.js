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
                .cookie("access_token", token, {
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
        data = await User.updateOne({ email: req.params.email }, {logged: false})
        res.clearCookie("access_token").status(200).json({message: 'Token deleted'});
    } catch (error) {
        console.log('Error:', error);
    }
};

const sendEmail = async(req, res) => {
    try {
        await transporter.sendMail({
            to: req.params.email,
            subject: "Día del Pijama",
            html: `“Acogimiento familiar: por el derecho a crecer en familia”
                <p>Querido centro educativo,</p>
                <p>Nos ponemos en contacto con vosotros desde ASEAF con motivo de vuestra inscripción para participar en el Día del Pijama.</p>
                <p>Antes de nada, nos gustaría daros las gracias por sumaros este año a la iniciativa. Nos alegra saber que cada vez sois más colegios, institutos y escuelas infantiles comprometidos con la protección a la infancia y la adolescencia en nuestro país.</p>
                <p>El Día del Pijama es una actividad que invita a la reflexión de una forma divertida y educativa,  fomentando la diversidad familiar como manera de lograr una escuela más inclusiva que acoja todas las realidades de nuestros niños y niñas. Es por ello que, además de acudir en pijama a la escuela el día 19 de noviembre (para hacerlo coincidir con la jornada lectiva), queremos proponeros diferentes actividades para que podáis trabajar en el aula sobre los derechos de la infancia, el derecho a crecer en familia y dar a conocer el acogimiento familiar entre las familias y alumnos. Por supuesto, os animamos a complementar el material que os enviamos con vuestras propias ideas que estaremos encantados de que nos hagáis llegar.</p>
                <p>En este enlace podéis encontrar y descargar todo el material que os proponemos: ${process.env.DRIVE_URL}</p>
                <p>En el mismo encontraréis:</p>
                <p>1.	Información a colegios. Es una carta que podéis difundir entre el profesorado del centro para explicarles en qué consiste la iniciativa y el objetivo de la misma.</p>
                <p>2.	Información a familias. Es una carta que os animamos a enviar a las familias para hacerles partícipes de la iniciativa, explicarles en qué consiste el acogimiento familiar y cómo pueden ayudar.</p>
                <p>3.	“Día del Pijama_Dossier informativo”. Se trata de un documento con toda la información sobre la iniciativa que podéis acompañar como complemento para la explicación de la misma.</p>
                <p>4.	Carpetas</p>
                <p>Actividades. En esta carpeta hay 3 archivos: uno con actividades para Secundaria y Bachillerato, otro con actividades y unidades didácticas para infantil y primaria y, por último, una guía con propuestas para hablar sobre diversidad y derechos.</p>
                <p>Cartelería. Aquí podréis encontrar cartelería en diferentes formatos por si queréis dar difusión de vuestra participación en la iniciativa en redes sociales o mediante carteles en el centro.</p>
                <p>Cuentos sobre acogimiento familiar y diversidad</p>
                <p>Material adicional para docentes. En esta carpeta incluimos material que puede ser de especial utilidad para docentes en cuyas aulas existan menores que se encuentran en acogimiento o adopción. </p>
                <p>Importante. Haciendo click aquí encontraréis un documento que os animamos encarecidamente a leer, especialmente, si en vuestro centro educativo hay niños, niñas o adolescentes que se encuentren en acogimiento residencial, familiar o adopción.</p>
                <p>Todos estos chicos y chicas tienen en común unas circunstancias familiares no convencionales y, por ello, es necesario que el trabajo en el aula incorpore elementos de atención a la diversidad familiar y que les ayude a que tengan la mayor sensación posible de normalización. Puesto que ya se saben o se sienten ‘especiales’ en algunos aspectos, el esfuerzo educativo debe ir en dirección de la normalidad que, lejos de acentuar la diferencia, facilite la integración y no sientan o vean que reciben un trato diferente, particularmente si ello implica valoraciones o aspectos negativos.</p>
                <p>En este sentido, en el documento adjunto encontraréis recomendaciones sobre actividades que deben evitarse o reorientarse, así como propuestas para dar respuesta a preguntas que pueden surgir en el alumnado fruto de las actividades realizadas.</p>
                <p>Además, os animamos a que aprovechéis este día para acercar a la escuela a los educadores y educadoras responsables de los niños y niñas que se encuentran en acogimiento residencial y a las familias acogedoras o adoptivas.</p>
                <p>Quedamos a vuestra disposición para cualquier cuestión que os pueda surgir a través del correo electrónico aseaf@aseaf.org o en el teléfono 633 738 461.</p>
                <p>Muchas gracias de nuevo por vuestra participación. Os agradeceríamos si pudierais confirmarnos que habéis recibido la información correctamente.</p>
                <p>Un saludo acogedor,</p>
                <h3>ASEAF</h3>
        `});
        res.status(200).json({
            message: 'El email se envió correctamente'
        })
    } catch (error) {
        console.log('Error: ', error)
    }
};

 const signUpUser = async(req, res) => {
    let data;
    try {
        const {email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 10);
        
        data = await User.create({'email': email, 'password': hashPassword, 'logged': false});
        res.status(201).json(data);
        
    } catch (error) {
        console.log('Error:', error);
    }
}; 

const user = {
    login,
    logout,
    sendEmail, 
    signUpUser
};

module.exports = user;