module.exports = function modelInterfaceBuilder(Model) {

	const sort = "createdAt";



	return {

		findAndUpdate: function (...theArgs) {

			return Model.updateMany(...theArgs)

				.lean()

				.exec();

		},

		find: function (...theArgs) {

			return Model.find(...theArgs)

				.sort({ [sort]: -1 })

				.lean()

				.exec();

		},

		findPagination: function (limit = 15, skip = 0, ...theArgs) {

			return Model.find(...theArgs)

				.sort({ [sort]: -1 })

				.limit(limit)

				.skip(skip)

				.lean()

				.exec();

		},

		findOne: function (...theArgs) {

			return Model.findOne(...theArgs)

				.lean()

				.exec();

		},

		findLatestOne: function (...theArgs) {

			return Model.findOne(...theArgs)

				.sort({ [sort]: -1 })

				.lean()

				
				.exec();

		},

		findOneAndUpdate: function (...theArgs) {
			
			return Model.findOneAndUpdate(...theArgs)

				.lean()

				.exec();
		},
		findJoin: function (refs, ...theArgs) {
			const model = Model.find(...theArgs);
		  
			refs.forEach(ref => {
			 model.populate(ref);
			});
		  
			return model.sort({ createdAt: -1 })
			 .lean()
			 .exec();
		},
		
		findOneJoin: function (refs, ...theArgs) {
		const model = Model.findOne(...theArgs);
		
		refs.forEach(ref => {
			model.populate(ref);
		});
		
		return model.sort({ createdAt: -1 })
			.lean()
			.exec();
		},


		create: async function (...theArgs) {

			const result = await Model.create(...theArgs);



			return result.toObject();

		},

		remove: function (...theArgs) {

			return Model.remove(...theArgs);

		},

		aggregate: function (...theArgs) {

			return Model.aggregate(...theArgs);

		},

		ensureIndexes: function() {

			return Model.ensureIndexes();

		},

		count: function (...theArgs) {

			return Model.count(...theArgs);

		},

		bulkWrite: function (...theArgs) {

			return Model.bulkWrite(...theArgs);

		},

	};

};