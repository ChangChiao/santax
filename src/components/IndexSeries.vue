<template>
    <div class="series">
        <div class="title">
            <h2>New Arrival</h2>
            <p>新款上市</p>
        </div>
        <ul class="series__list">
            <li
                v-for="(vo, k) in seriesList"
                :key="'series' + k"
                :class="['series__list__item', `series__list__item__${k}`]"
                @click="goPage(vo.link)"
            >
                <div class="series__list__item__text">
                    <p>{{ vo.type }}</p>
                    <p>{{ vo.name }}</p>
                    <a>了解更多</a>
                </div>
                <div
                    class="series__list__item__pic"
                    :style="{
                        backgroundImage: `url(/images/watch/${vo.img}.png)`,
                    }"
                ></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seriesList: [
                {
                    type: "Trainmaster",
                    name: "鐵道系列",
                    link: "t-1",
                    img: "01",
                },
                {
                    type: "Engineer",
                    name: "工程師系列",
                    link: "e-1",
                    img: "02",
                },
                { type: "Deepsea", name: "潛水系列", link: "d-1", img: "03" },
                { type: "GMT-master", name: "GMT系列", link: "g-1", img: "04" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.series {
    &__list {
        &__item {
            display: flex;
            justify-content: space-between;
            height: 200px;
            width: 100%;
            position: relative;
            font-size: 0;
            margin: 15px 0;
            box-sizing: border-box;
            &__0 {
                background-color: rgb(104, 105, 92);
            }
            &__1 {
                background-color: rgb(82, 96, 15);
            }
            &__2 {
                background-color: rgb(51, 76, 79);
            }
            &__3 {
                background-color: rgb(59, 65, 67);
            }
            &:nth-of-type(even) {
            }
            &::after {
                content: "";
                display: block;
                height: 0;
                width: 0;
                border-bottom: 200px solid transparent;
                border-right: 200px solid rgba(255, 255, 255, 0.3);
                position: absolute;
                z-index: 2;
                top: 0;
                right: 0;
            }
            &::before {
                content: "";
                display: block;
                height: 0;
                width: 0;
                border-bottom: 90px solid transparent;
                border-right: 90px solid rgba(255, 255, 255, 0.3);
                position: absolute;
                z-index: 3;
                top: 0;
                right: 0;
            }
            &__text {
                display: inline-block;
                width: 40%;
                font-size: 1.2rem;
                color: #fff;
                text-align: center;
                margin-top: 60px;
                vertical-align: middle;
                a {
                    display: inline-block;
                    position: relative;
                    font-family: "微軟正黑體";
                    vertical-align: middle;
                    z-index: 3;
                    color: #fff;
                    width: 100%;
                    height: 50px;
                    font-size: 0.8rem;
                    border: 2px solid #fff;
                    text-align: center;
                    letter-spacing: 3px;
                    color: #fff;
                    margin: auto;
                    box-sizing: border-box;
                }
            }
            &__pic {
                background-position: 90% 40%;
                height: 200px;
                width: 40%;
            }
        }
    }
}
</style>
