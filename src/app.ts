import express, { Application } from "express";
import cors from "cors";

//Application Routes
import userRouter from "./app/modules/user/user.route";

const app: Application = express();
app.use(cors());

//========================MidelWare====================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ====================================================================

//app.get("/api/v1/user", userRouter);
app.use("/api/user", userRouter);

export default app;

/*
inserting Data into mongodb
step1 : Interface
step2 : Schema
step3 : Model
step4 : Database Query
*/

/*

//MVC VS Modular


Interface ->interface.ts
Schema,Model ->model.ts

route

router function ->controller.ts
Database Query Function ->service


*/
