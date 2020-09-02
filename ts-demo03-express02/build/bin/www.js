#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
var app_1 = __importDefault(require("../app"));
var http_1 = __importDefault(require("http"));
/**
 * Get port from environment and store in Express.
 */
var port = '3000';
app_1.default.set('port', port);
/**
 * Create HTTP server.
 */
var server = http_1.default.createServer(app_1.default);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
    console.log('http run on ' + port);
});
