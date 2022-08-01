const userQueries = { 
    getAllUsers: async (parent, args, { models }) => {
        const users = await models.User.findAll();
        return users;
    }
}

module.exports = userQueries;