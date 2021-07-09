<template>
    <div>
        <span>首頁</span>
        <span>></span>
        <span>{{ series }}</span>
        <span>></span>
        <span>{{ model }}</span>
    </div>
</template>

<script>
import watchData from "/watch.json";
export default {
    watch: {
        "$route.query.id": {
            immediate: true,
            handler: function (val) {
                const [ser, mod] = val.split("-");
                this.series = this.seriesList[ser];
                this.model = mod;
            },
        },
    },
    data() {
        return {
            seriesList: {
                e: "工程師系列",
                g: "GMT系列",
                d: "潛水系列",
                t: "鐵道系列",
            },
            series: "",
            model: "",
        };
    },
};
</script>

<style lang="scss" scoped></style>
