<template>
    <div>
        <div
            class="slider"
            style="background-image: url(/images/banner/watchmaking.jpg)"
        >
            <div class="slider__content">
                <h1 class="slider__content__title">維修中心</h1>
                <p class="slider__content__text">
                    SANTAX為確保每枚時計離開SANTAX錶廠後，均符合原來的功能和美學設計規格，SANTAX特別制定出一套檢修程序。每枚機芯均經詳細檢查，而錶殼及錶鏈亦經過精細拋光，重現原來色澤。此外，SANTAX腕錶經嚴格的計時和防水測試，對品質水平作出保證，精準可靠。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>尋找服務據點</h2>
        </div>
        <div id="chartMap" ref="chart"></div>
    </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
export default {
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.map = am4core.create("chartMap", am4maps.MapChart);
        this.map.geodata = am4geodata_worldLow;
        this.map.projection = new am4maps.projections.Miller();
        const polygonSeries = this.map.series.push(
            new am4maps.MapPolygonSeries()
        );
        polygonSeries.useGeodata = true;
        polygonSeries.exclude = ["AQ"];
        //set color
        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.fill = am4core.color("#41767c");
        const hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#224448");

        const imageSeries = this.map.series.push(new am4maps.MapImageSeries());
        const imageSeriesTemplate = imageSeries.mapImages.template;
        const marker = imageSeriesTemplate.createChild(am4core.Image);
        marker.href =
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/marker.svg";
        marker.width = 20;
        marker.height = 20;
        marker.nonScaling = true;
        marker.tooltipText = "{title}";
        marker.horizontalCenter = "middle";
        marker.verticalCenter = "bottom";

        // Set property fields
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        // Add data for the three cities
        imageSeries.data = [
            {
                latitude: 48.856614,
                longitude: 2.352222,
                title: "Pairs 51 Avenue Montaigne, 75008 Paris, 法國 電話： +33 1 44 50 73 00",
            },
            {
                latitude: 40.712775,
                longitude: -74.005973,
                title: "New york 100 Mott St, New York, NY 10013美國  電話：+1 212-966-3988",
            },
            {
                latitude: 35,
                longitude: 139,
                title: "tokyo 3-2-1 Ginza, Chuo, Tokyo 104-0061日本 電話：+3-3567-0077",
            },
            {
                latitude: 25,
                longitude: 121.5,
                title: "Taiwan 110台北市信義區松高路16號 電話：02-2888567",
                scale: 2,
            },
        ];
    },
    beforeUnmount() {
        if (this.map) {
            this.map.dispose();
        }
    },
};
</script>

<style lang="scss" scoped>
#chartMap {
    padding-top: 50px;
    width: 100%;
    height: 500px;
    margin-bottom: 100px;
}
</style>
