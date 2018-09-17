const express = require('express');
//const bycrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../models/usuario'); //Permite crear la colección en la base de datos
const app = express();

app.get('/usuario', function(req, res) {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);

    Usuario.find({ estado: true }, 'nombre email role estado google img')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            Usuario.count({ estado: true }, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });
            });


        });
});

app.post('/usuario', function(req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        //password: bycrypt.hashSync(body.password, 10),
        password: body.password,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }


        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });
})

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']); //En el arreglo solo las propiedades que se podrán modificar

    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }


        res.json({
            ok: true,
            usuario: usuarioDB
        });

    })
});

app.delete('/usuario/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['estado']); //En el arreglo solo las propiedades que se podrán modificar

    let cambiaEstado = {
        estado: false
    }

    //Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        };

        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado.'
                }
            });
        }

        res.json({
            ok: true,
            usuario: usuarioBorrado
        });

    });
})


module.exports = app;