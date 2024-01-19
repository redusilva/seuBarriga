module.exports = () => {
    const findAll = (req, res) => {
        res.status(200).json([
            { name: 'Jhon Doe', mail: 'john@mail.com' },
        ]);
    };

    const create = (req, res) => {
        res.status(201).json(req.body);
    };

    return {
        findAll,
        create,
    };
};
