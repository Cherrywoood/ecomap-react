export const getUserBounds = (map) => {
    const northEast = map.getBounds().getNorthEast();
    const southWest = map.getBounds().getSouthWest();
    return [[northEast.lat, northEast.lng], [southWest.lat, southWest.lng]];
}