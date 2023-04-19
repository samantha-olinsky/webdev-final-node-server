import usersModel from './users-model.js';
export const findUsers = () => usersModel.find();

export const findByUsername = async (username) => {
    try {
        const user = await usersModel.findOne({username});
        return user;
    } catch (error) {
        console.error(error);
    }
}

export const findByID = async (uid) => {
    try {
        const user = await usersModel.findOne({uid});
        return user;
    } catch (error) {
        console.error(error);
    }
}
export const createUser = (user) => usersModel.create(user);
export const deleteUser = (uid) => usersModel.deleteOne({_id: uid});
export const updateUser = (uid, user) => usersModel.updateOne({_id: uid}, user, { new: true })

export const updateLikes = (uid, newLikes) => usersModel.updateOne({_id: uid}, {$set: {total_likes: newLikes}})

export const updateComments = (uid, newComments) => usersModel.updateOne({_id: uid}, {$set: {total_comments: newComments}})

export const updateActions = (uid, newActions) => usersModel.updateOne({_id: uid}, {$set: {actions_taken: newActions}})
