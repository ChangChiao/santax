<template>
    <div class="crumbs">
        <span>首頁</span>
        <span>></span>
        <span>{{ seriesData[series]["series"] }}</span>
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
};
</script>

<style lang="scss" scoped>
.crumbs {
    text-align: left;
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
