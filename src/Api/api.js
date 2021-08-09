const axios = require('axios')

const categoryToIdx = {
    'Все': 0,
    'Мясные': 1,
    'Вегетарианская': 2,
    'Гриль': 3,
    'Острые':4,
    'Закрытые': 5
}

export const homeAPI = {
    getPizzas(activeCategory, sortBy) {
        console.log('activeCategory, sortBy: ', categoryToIdx[activeCategory], sortBy)
        return axios.get(`http://localhost:3004/pizzas?${
            categoryToIdx[activeCategory] > 0 ? `category=${categoryToIdx[activeCategory]}` : ''
        }&_sort=${sortBy}&_order=${sortBy === 'name' ? 'asc' : 'desc'}`)
    }
}