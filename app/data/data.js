const foods = [{
        id: 1,
        name: 'Chicken soup',
        categoryId: 1,
        price: 3.50,
        weight: 250,
        ingUrl: '',
    },
    {
        id: 2,
        name: 'Vegetables soup',
        categoryId: 1,
        price: 3.00,
        weight: 300,
        ingUrl: '',
    },
    {
        id: 3,
        name: 'Shopska salad',
        categoryId: 2,
        price: 4.00,
        weight: 200,
        ingUrl: '',
    },
    {
        id: 4,
        name: 'Verona',
        categoryId: 3,
        price: 8.00,
        weight: 400,
        ingUrl: '',
    },
];

const categories = [{
        id: 1,
        name: 'soups'
    },
    {
        id: 2,
        name: 'salads'
    },
    {
        id: 3,
        name: 'pizza'
    },
    {
        id: 4,
        name: 'pasta'
    },
    {
        id: 5,
        name: 'desearts'
    },
];


const getAllFood = () => {
    return foods;
};

const getFoodById = (id) => {
    return foods.find((f) => f.id === id);
};

const createFood = (obj) => {
    
    return foods.push(obj);
};

module.exports = {
    getAllFood,
    getFoodById,
    createFood,
};