const { NgExtension } = require('@angular/compiler-cli/src/ngtsc/shims/src/expando');
const express = require('express');
const app = express();
const busverwaltungExpressRoute = express.Router();
let busseSchema = require('../model/busmodel');

busverwaltungExpressRoute.route('/').get((req,res)=>{
    busseSchema.finde((error, data)=>{
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
    busverwaltungExpressRoute.route('/busverwaltung/:id').get((req, res)=>{
        if (error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})
busverwaltungExpressRoute.route('/addbus').post((req, res,next)=>{
    busseSchema.create(req.body,(error, data) =>{
        if (error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})





module.exports =busverwaltungExpressRoute;