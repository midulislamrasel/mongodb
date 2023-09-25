//====================== interface=======================

interface IUser {
  id: string;
  role: string;
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  dateOfBirth?: string;
  gendar: "Mail" | "Femail";
  email?: string;
  contactNO?: string;
  emargencyContactNO?: string;
  presentAddress?: string;
  pormanotAddress?: string;
}

export default IUser;
