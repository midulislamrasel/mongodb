import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log(` 🟢 Database Connection Successfull`);

    app.listen(port, () => {
      console.log(` 🚦✪Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Erro Database`, error);
  }
}
bootstrap();
