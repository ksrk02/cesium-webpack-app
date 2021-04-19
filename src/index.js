window.CESIUM_BASE_URL = '/static/Cesium/';

import * as Cesium from 'cesium';
import '../node_modules/cesium/Build/Cesium/Widgets/widgets.css';
// In deveropment mode add this at cesium/package.json:95 instead. => "./Build/Cesium/Widgets/widgets.css": "./Build/Cesium/Widgets/widgets.css",
import './css/main.css';


const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

// const buildingsTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());

viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(139.7528, 35.685175, 4000),
});

viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: './3dtiles/13101/tileset.json',
    })
);

viewer.scene.primitives.add(
    new Cesium.Cesium3DTileset({
        url: './3dtiles/13106/tileset.json',
    })
)