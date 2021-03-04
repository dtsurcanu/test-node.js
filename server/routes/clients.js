"use strict";

const express = require('express');
const knex = require('knex')(require('../../knexfile'));
const clientsRouter = express.Router();
const clientsService = require('../services/clients.service');

clientsRouter.route('/clients/:client_id/products/:product_id')
    .post(async (request, response) => {
        const { client_id, product_id } = request.params;

        console.log(request.params);

        clientsService.postClientProduct(client_id, product_id);

        response.sendStatus(200);
    });

clientsRouter.route('/clients/:client_id/products/:product_id')
    .delete(async (request, response) => {
        const { client_id, product_id } = request.params;

        clientsService.deleteClientsProduct(client_id, product_id);

        response.sendStatus(200);
    });

clientsRouter.route('/clients/:client_id/products')
    .get(async (request, response) => {

        const products = clientsService.getClientProducts(request.params.client_id);
        
        products.then(function(result) {
            console.log(result) ;
            response.json({
                result
            });
         });

    });

clientsRouter.route('/clients/products/sum')
    .get( async (request, response) => {

        const clientsProducts = clientsService.getClientsProductsSum();

        clientsProducts.then(function(result) {
            console.log(result) ;
            response.json({
                result
            });
         });

    });

clientsRouter.route('/clients/products/count')
    .get(async (request, response) => {
        const clientsProducts = clientsService.getClientsProductsCount();

        clientsProducts.then(function(result) {
            console.log(result) ;
            response.json({
                result
            });
         });
    });

module.exports = clientsRouter;

