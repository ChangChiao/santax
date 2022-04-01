<template>
    <div
        class="slider"
        :style="{
            backgroundImage: `url(@/assets/images/banner/${series}.jpg)`,
        }"
    >
        <div class="slider__content">
            <h1 class="slider__content__title">{{ series }}</h1>
            <p class="slider__content__text">
                {{ seriesData[series].intro }}
            </p>
        </div>
    </div>
    <div class="title">
        <h2>{{ seriesData[series].series }}</h2>
    </div>
    <ul class="series__list">
        <li
            v-for="(vo, i) in watchData[series]"
            :key="'wa' + i"
            class="series__list__item"
            @click="goPage(i)"
        >
            <img
                :src="`@/assets/images/watch/${prefix}/${prefix}-${i + 1}.png`"
                alt=""
            />
            <h3>{{ vo.name }}</h3>
            <p>{{ vo.model }}</p>
        </li>
    </ul>
</template>

<script>
import seriesData from "@/assets/json/series";
import watchData from "@/assets/json/watch.json";
export default {
    watch: {
        "$route.query.s": {
            immediate: true,
            handler: function (val) {
                this.series = val;
            },
        },
    },
    computed: {
        prefix() {
            return this.series && this.series[0];
        },
    },
    data() {
        return {
            series: "",
            seriesData,
            watchData,
        };
    },
    methods: {
        goPage(index) {
            this.$router.push(`/watch?id=${this.series}_${index}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.series {
    &__list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 50px 200px;
        &__item {
            width: 28%;
            text-align: center;
            margin-bottom: 50px;
            img {
                width: 80%;
                max-width: 220px;
                cursor: pointer;
                transition: 0.5s;
                &:hover {
                    transform: scale(1.05);
                }
            }
            h3 {
                text-align: center;
                font-weight: 900;
                color: $base;
                padding-bottom: 10px;
            }
        }
    }
}
</style>
