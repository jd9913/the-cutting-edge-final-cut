import bcrypt from "bcryptjs";

const users = [
	{
		firstName: "Admin",
		lastName: "Admin",
		email: "admin@test.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		firstName: "John",
		lastName: "Doe",
		email: "john@test.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		firstName: "Jane",
		lastName: "Doe",
		email: "jane@test.com",
		password: bcrypt.hashSync("123456", 10),
	},
];

export default users;
