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
                </div>
                <div
                    class="series__list__item__pic"
                    :style="{
                        backgroundImage: `url(@/assets/images/watch/${vo.img}.png)`,
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
                    img: "04",
                },
                {
                    type: "Engineer",
                    name: "工程師系列",
                    link: "e-1",
                    img: "02",
                },
                { type: "Deepsea", name: "潛水系列", link: "d-1", img: "01" },
                { type: "GMT-master", name: "GMT系列", link: "g-1", img: "03" },
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
            &::after {
                content: "";
                display: block;
                height: 0;
                width: 0;
                border-bottom: 200px solid transparent;
                position: absolute;
                left: 0;
                border-left: 200px solid rgba(255, 255, 255, 0.3);
                z-index: 2;
                top: 0;
                left: 0;
            }
            &::before {
                content: "";
                display: block;
                height: 0;
                width: 0;
                border-bottom: 90px solid transparent;
                border-left: 90px solid rgba(255, 255, 255, 0.3);
                position: absolute;
                z-index: 3;
                top: 0;
                left: 0;
            }
            &:nth-of-type(even) {
                flex-direction: row-reverse;
                &::after {
                    border-left: none;
                    right: 0;
                    left: auto;
                    border-right: 200px solid rgba(255, 255, 255, 0.3);
                }
                &::before {
                    border-left: none;
                    right: 0;
                    left: auto;
                    border-right: 90px solid rgba(255, 255, 255, 0.3);
                }
                .series__list__item__pic {
                    background-position: 90% 40%;
                }
            }
            &__text {
                display: inline-block;
                width: 40%;
                font-size: 1.2rem;
                position: relative;
                max-width: 200px;
                height: 50px;
                font-size: 0.8rem;
                border: 2px solid #fff;
                text-align: center;
                letter-spacing: 3px;
                color: #fff;
                margin: auto;
                box-sizing: border-box;
                p {
                    padding: 5px 0;
                }
            }
            &__pic {
                background-position: 10% 40%;
                height: 200px;
                width: 40%;
            }
        }
    }
}
</style>
