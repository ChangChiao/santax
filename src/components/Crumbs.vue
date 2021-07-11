<template>
    <div class="crumbs">
        <span @click="goPage('/')">首頁</span>
        <span>></span>
        <span @click="goPage()">{{ seriesData[series]["series"] }}</span>
        <span>></span>
        <span>{{ model }}</span>
    </div>
</template>

<script>
import seriesData from "@/assets/json/series";
export default {
    props: {
        series: String,
        model: String,
    },
    data() {
        return {
            seriesData,
        };
    },
    methods: {
        goPage(path) {
            if (path) {
                this.$router.push(path);
                return;
            }
            this.$router.push(`/series?s=${this.series}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.crumbs {
    text-align: left;
    padding-left: 50px;
    span {
        padding: 0 5px;
        color: #888;
        cursor: pointer;
        &:hover {
            color: #666;
        }
    }
}
</style>
