var { VectorTile, VectorTileLayer} = require('@mapbox/vector-tile');
var Protobuf = require('pbf');

const TILE_URL = 'https://b.api.tomtom.com/map/1/tile/basic/main/1/1/0.pbf?key=KJy0hPSG3oYOycU209sVkFGX1GyhGc0r';
const SOURCE_LAYER_NAME = 'Earth Cover';

fetch(TILE_URL).then(async response => {
    const data = await response.arrayBuffer();
    const tile = new VectorTile(new Protobuf(data));
    Object.keys(tile.layers).map(layerID => {

        const layer = tile.layers[layerID];
        if (layer.name === SOURCE_LAYER_NAME) {
            console.log(layer.feature(0).properties)
        }
    })
})

