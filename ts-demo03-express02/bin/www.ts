#!/usr/bin/env node

/**
 * Module dependencies.
 */
import app from '../app';
import http from 'http';

/**
 * Get port from environment and store in Express.
 */
const port: string = '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, (): void => {
    console.log('http run on ' + port);
});