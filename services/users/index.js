// @flow

module.exports = {
    getUser: (id: number) => {
        return {
            id: id,
            name: 'HD',
            status: 1
        }
    },

    getUsers: () => {
        return [
            {
                id: 1,
                name: 'HD',
                status: 1,
            },
            {
                id: 2,
                name: 'DuyDoan',
                status: 1,
            },
        ]
    }
};
