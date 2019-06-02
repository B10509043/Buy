
const mongoose = require('mongoose');



exports.initialize = function () {

	return new Promise(function (resolve, reject) {

		console.log("initialize mongoDB...");


		const mongoURL = 'mongodb://localhost:27017/buy';
		const option = {

			useMongoClient: true,

			config: {

				autoIndex: true

			},

			reconnectTries: Number.MAX_VALUE,

			reconnectInterval: 1000,

			poolSize: 300,

			connectTimeoutMS: 10000, // Give up initial connection after 10 seconds

			socketTimeoutMS: 20000, // Close sockets after 45 seconds of inactivity

		};



		mongoose.connect(mongoURL, option, function (error) {

			if (error) {

				console.log("please make sure mongodb is running", mongoURL);

				reject(new Error(error));



				process.exit(1);

				return;

			}



			console.log("connected to mongoDB", mongoURL);

			resolve();

		});

	});

};