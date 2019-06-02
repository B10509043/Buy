const {
    create,
    findOne,
    findOneAndUpdate,
} = require('../models/user');

function createUser(attributes) {
    return create(attributes);
}

function getUserByUsername(username) {
    return findOne({ username });
}
function getUserByemail(fullemail) {
    return findOne({ fullemail });
}
function getUserById(_id) {
    return findOne({ _id });
}
function updateUser(id,user){
    console.log('..........')
     console.log(user)
     console.log('..........')
     var x= { _id:id._id}
     console.log(x)
     console.log(user)
    
    

    


return findOneAndUpdate(x,user, { new: true })
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserById,
    updateUser,
    getUserByemail,
};