<template>
    <div class="direction">
        <div
            class="slider"
            style="
                background-image: url(/images/banner/watchmaking_player_METAS_Large_1600x900.jpg);
            "
        >
            <div class="slider__content">
                <h1 class="slider__content__title">使用說明</h1>
                <p class="slider__content__text">
                    SANTAX一直致力創作優秀的腕錶，品牌不僅要求腕錶的運行絕對精確，更在每分每秒展現出精湛技藝的偉大成果。為使您能全面欣賞您的腕錶，請查看下列的使用說明書。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>一個改變歷史的契機</h2>
        </div>
        <ul class="direction__list">
            <li
                v-for="(vo, i) in list"
                class="direction__list__item"
                :key="'d' + i"
                :style="{
                    backgroundImage: `url(/images/use/${i}.jpg)`,
                }"
            >
                <h4>{{ vo.name }}</h4>
                <p>{{ vo.series }}</p>
                <a href="/"> 點此查看 </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { name: "Trainmaster", series: "鐵道系列" },
                { name: "Engineer II", series: "工程師系列" },
                { name: "Deepsea", series: "潛水系列" },
                { name: "GMT-Master", series: "GMT系列" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.direction {
    &__list {
        display: flex;
        height: 350px;
        margin-bottom: 100px;
        &__item {
            text-align: center;
            width: 25%;
            color: #fff;
            transition: 1s;
            background-position: 50% 80%;
            display: flex;
            padding-top: 10%;
            flex-direction: column;
            h4 {
                font-weight: bold;
                padding-bottom: 10px;
            }
            p {
                color: #ddd;
                font-size: 0.8rem;
                font-weight: bold;
            }
            a {
                color: #ddd;
                margin: 30px auto 0;
                font-size: 0.8rem;
                width: 60%;
                max-width: 200px;
                outline: 1px solid #fff;
                padding: 10px;
                cursor: pointer;
            }
            &:hover {
                background-position: 60% 80%;
            }
        }
    }
}
</style>
