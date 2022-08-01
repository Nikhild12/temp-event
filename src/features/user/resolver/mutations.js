
const userMutations = { 
   registerUser: async (parent, args, { models }) => {
        const user = await models.User.create(args);
        return user;
    }
}

// export default userMutations;

module.exports = userMutations;