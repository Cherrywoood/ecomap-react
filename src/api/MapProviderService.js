import axios from "axios";

export default class MapProviderService {
    static async getMain() {
        const response = await axios.get('http://localhost:8080/api/map-providers/main')
        //console.log(response.data)
        return response.data
    }

    static async getAll() {
        const response = await axios.get('http://localhost:8080/api/map-providers')
        //console.log(response.data)
        return response.data
    }
}