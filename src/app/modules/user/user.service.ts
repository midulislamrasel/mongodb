import User from "./user.model";

//   ==================Database Query====================
export const createUserToDB = async () => {
  const user = await new User({
    id: "05",
    role: "005",
    password: "password",
    name: {
      firstName: "Md",
      middleName: "-X",
      lastName: "Islam",
    },
    dateOfBirth: "12/05/1975",
    gendar: "male",
    email: "mrx@gmail.com",
    contactNO: "01658.....",
    emargencyContactNO: "0156....",
    presentAddress: "Mirpur 10 ",
    pormanotAddress: "Gangni ",
  });
  await user.save();
  return user;
};
