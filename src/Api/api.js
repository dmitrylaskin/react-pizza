const axios = require('axios')

export const homeAPI = {
    getPizzas() {
        return axios.get('http://localhost:3004/pizzas')
    }
}