//========================
//PUERTO
//========================

process.env.PORT = process.env.PORT || 3000;

//========================
//ENTORNO
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================
//VENCIMIENTO DEL TOKEN
//========================
//60 segundos
//60 minutos
//24 horas
//30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//========================
//SEED DE AUTENTICACIÓN
//========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'


//========================
//BASE DE DATOS
//=========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGOURI;
}
process.env.URLDB = urlDB;

//========================
//GOOGLE CLIENT ID
//=========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '98361545710-6eh1ko7cpne8rja5rl6q7kk0ggpggufv.apps.googleusercontent.com';