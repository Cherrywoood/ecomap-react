import axios from "axios";

const baseURL = 'http://localhost:8080/api/ecopoints'

export const ecopointService = {
    getEcopointById: async (id) => {
        const response = await axios.get(`${baseURL}/${id}`);
        return response.data
    },
    getEcopointsInBounds: async (userBounds, ecopointTypes, fractionTypes) => {
        const params = createEcopointsInBoundsParam(userBounds, ecopointTypes, fractionTypes);
        const response = await axios.get(baseURL, {
            params: {...params}
        });
        return response.data
    },
    getEcopointsInBoundsPagination: async (userBounds, ecopointTypes, fractionTypes, page, size) => {
        const params = createEcopointsInBoundsParam(userBounds, ecopointTypes, fractionTypes);
        return await axios.get(`${baseURL}/pagination`, {
            params: {...params, page, size}
        });
    },
    getEcopointImage: async (id) => {
        const response = await axios.get(`${baseURL}/images/${id}`);
        console.log(response)
        return response.data
    },
    searchEcopointsByName: async (name) => {
        const response = await axios.get(baseURL, {
            params: {name}
        })
        return response.data;
    }
};

const createEcopointsInBoundsParam = (userBounds, ecopointTypes, fractionTypes) => {
    const minLon = userBounds[1][1];
    const minLat = userBounds[1][0];
    const maxLon = userBounds[0][1];
    const maxLat = userBounds[0][0];

    const params = {};
    if (ecopointTypes && ecopointTypes.length === 1 && fractionTypes.length > 0) {
        params[ecopointTypes[0].type] = fractionTypes.join(",");
    } else if (ecopointTypes && ecopointTypes.length > 0) {
        params.ecopointTypes = ecopointTypes.map(ecopointType => ecopointType.id).join(",");
    }
    return {minLon, minLat, maxLon, maxLat, ...params}
}