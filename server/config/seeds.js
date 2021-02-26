const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
	await Category.deleteMany();

	const categories = await Category.insertMany([
		{ name: "Braids" },
		{ name: "Cut" },
		{ name: "Perm" },
		{ name: "Color" },
		{ name: "Cornrows" },
		{ name: "Crochet" },
		{ name: "Boxbraids" },
	]);

	console.log("categories seeded");

	await Product.deleteMany();

	const products = await Product.insertMany([
		{
			name: "Cornrows",
			description:
				"2 braids in cornrows braided close to the scalp. This style is the most iconic cornrow style.",
			image: "cornrows.jpg",
			category: categories[4]._id,
			price: 100.0,
		},
		{
			name: "Crochet",
			description:
				"A special way of braiding that adds extensions to the hair.",
			image: "crochet.jpg",
			category: categories[5]._id,
			price: 100.0,
		},
		{
			name: "Crochet Singles",
			category: categories[5]._id,
			description:
				"A special way of braiding that adds extensions to the hair.",
			image: "crochet.jpg",
			price: 100.0,
		},
		{
			name: "Twist",
			category: categories[0]._id,
			description:
				"Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.",
			image: "braids.jpg",
			price: 100.0,
		},
		{
			name: "Locs loc/retwist",
			category: categories[0]._id,
			description:
				"Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.",
			image: "braids.jpg",
			price: 100.0,
		},
		{
			name: "All Singles",
			category: categories[0]._id,
			description:
				"Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.",
			image: "braids.jpg",
			price: 150.0,
		},
		{
			name: "Box Braids",
			category: categories[6]._id,
			description:
				"In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.",
			image: "boxbraids.jpg",
			price: 85.0,
		},
		{
			name: "Hair Cut or Trim",
			category: categories[1]._id,
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.",
			image: "cuts.jpg",
			price: 50.0,
		},
		{
			name: "Wash with flatiron or wash press",
			category: categories[1]._id,
			description:
				"Ut vulputate hendrerit nibh, a placerat elit cursus interdum.",
			image: "flatiron.jpg",
			price: 75.0,
		},
		{
			name: "Blow dry",
			category: categories[1]._id,
			description:
				"Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.",
			image: "cuts.jpg",
			price: 40.0,
		},
		{
			name: "Perm or Relaxer",
			category: categories[2]._id,
			description:
				"Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
			image: "perms.jpg",
			price: 100.0,
		},
		{
			name: "Hair Coloring",
			category: categories[3]._id,
			description:
				"Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.",
			image: "color.jpg",
			price: 100.0,
		},
		{
			name: "Conditioning Treatments",
			category: categories[1]._id,
			description:
				"Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.",
			image: "cuts.jpg",
			price: 75.0,
		},
	]);

	console.log("products seeded");

	await User.deleteMany();

	await User.create({
		firstName: "Terahje",
		lastName: "Tester",
		email: "terahje@test.com",
		password: "tester",
		orders: [
			{
				products: [products[0]._id, products[0]._id, products[1]._id],
			},
		],
	});

	console.log("users seeded");

	process.exit();
});
