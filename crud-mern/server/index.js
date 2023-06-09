import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const server=express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));