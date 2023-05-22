import axios from "axios";

export default class OpenStreetMapService {
    static async getPolygonKrasnoDistrict() {
        const response = await axios.get('https://nominatim.openstreetmap.org/search?q=Красногвардейский район,' +
            ' Санкт-Петербург&format=json&polygon_geojson=1')
        return response.data
    }
}