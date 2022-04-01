<template>
    <div>
        <div class="title">
            <h2>New Arrival</h2>
            <p>新款上市</p>
        </div>
        <div class="watch">
            <ul class="watch__list">
                <li
                    v-for="(vo, k) in watchList"
                    :key="'watch' + k"
                    class="watch__list__item"
                    @click="goPage(vo.link)"
                >
                    <img :src="`@/assets/images/watch/${vo.img}.png`" alt="" />
                    <p>{{ vo.type }}</p>
                    <p>{{ vo.model }}</p>
                    <a>了解更多</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            watchList: [
                {
                    type: "Trainmaster",
                    model: "PAM35",
                    link: "t-9",
                    img: "001",
                },
                { type: "Engineer", model: "PAM561", link: "e-9", img: "002" },
                { type: "Deepsea", model: "PAM615", link: "d-2", img: "003" },
                { type: "GMT", model: "PAM005", link: "g-3", img: "004" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.watch {
    height: 0;
    padding-bottom: 500px;
    background-image: url("~@/assets/images/homepage.jpg");
    background-position: center center;
    background-size: cover;
    text-align: center;
    background-attachment: fixed;
    font-size: 0;
    border-top: 25px solid rgba(0, 0, 0, 0.6);
    border-bottom: 25px solid rgba(0, 0, 0, 0.6);
    padding-top: 30px;
    position: relative;
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    &__list {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        &__item {
            cursor: pointer;
            img {
                width: 250px;
                height: auto;
                max-height: 100%;
                max-width: 100%;
                position: relative;
                z-index: 2;
                transform: scale(1, 1);
                transition: 0.5s;
                &:hover {
                    transform: scale(1.1, 1.1);
                    transition: 0.5s;
                }
            }
            p {
                padding: 5px;
                position: relative;
                z-index: 3;
                letter-spacing: 3px;
                font-size: 18px;
                color: aliceblue;
                &:nth-of-type(2) {
                    font-size: 20px;
                    color: $sub;
                }
            }
            a {
                display: inline-block;
                text-decoration: none;
                font-size: 0.8rem;
                border: 2px solid #eee;
                padding: 3px 10px;
                text-align: center;
                letter-spacing: 3px;
                color: #eee;
                position: relative;
                z-index: 3;
            }
        }
    }
}
</style>
