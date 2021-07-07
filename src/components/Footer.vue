<template>
    <footer class="footer">
        <ul class="footer__menu">
            <li
                v-for="(vo, k) in menuList"
                :key="k + 'fo'"
                class="footer__menu__item"
            >
                <h5 class="footer__title">{{ vo.name }}</h5>
                <ul class="footer__submenu">
                    <li
                        v-for="(item, i) in vo.list"
                        :key="i + 'sub'"
                        class="footer__submenu__item"
                    >
                        <router-link :to="item.link">{{
                            item.name
                        }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="footer__media">
            <li
                v-for="(item, i) in mediaList"
                class="footer__media__item"
                :key="i + 'med'"
            >
                <router-link :to="item.link">
                    <i :class="item.icon"></i>
                </router-link>
            </li>
        </ul>
        <p class="footer__declare">
            © {{ new Date().getFullYear() }} SANTAX Watch
            資料、圖片來源皆來自網路，僅用來做為學習用途，無商業用途。
        </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    name: "探索品牌",
                    list: [
                        { name: "品牌故事", link: "" },
                        { name: "名人故事", link: "" },
                        { name: "工藝世界", link: "" },
                        { name: "極限測試", link: "" },
                    ],
                },
                {
                    name: "錶款系列",
                    list: [
                        { name: "鐵道系列", link: "/watch?s=t" },
                        { name: "工程師系列", link: "/watch?s=e" },
                        { name: "潛水系列", link: "/watch?s=d" },
                        { name: "GMT系列", link: "/watch?s=g" },
                    ],
                },
                {
                    name: "客戶服務",
                    list: [
                        { name: "經銷商據點", link: "" },
                        { name: "維修中心", link: "" },
                        { name: "常見問題", link: "" },
                        { name: "使用說明", link: "" },
                        { name: "檢修流程", link: "" },
                    ],
                },
            ],
            mediaList: [
                { icon: "fab fa-facebook", link: "" },
                { icon: "fab fa-instagram", link: "" },
                { icon: "fab fa-youtube", link: "" },
                { icon: "fab fa-twitter", link: "" },
                { icon: "fab fa-google-plus-g", link: "" },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-evenly;
    height: 250px;
    background-color: #555;
    text-align: left;
    flex-wrap: wrap;
    padding: 40px 0;
    &__title {
        padding-bottom: 15px;
    }
    &__menu {
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 0 50px;
        width: 50%;
        &__item {
            width: 15%;
            height: 200px;
            color: #fff;
        }
    }
    &__submenu {
        &__item {
            font-size: 0.75rem;
            color: #ccc;
            padding: 5px 0;
            a {
                color: #ccc;
                &:hover {
                    color: rgb(168, 168, 168);
                }
            }
        }
    }
    &__media {
        width: 30%;
        display: flex;
        &__item {
            font-size: 20px;
            margin: 0 10px;
            a {
                color: #fff;
                &:hover {
                    color: rgb(221, 221, 217);
                }
            }
        }
    }
    &__declare {
        text-align: center;
        width: 100%;
        color: #ccc;
    }
}
</style>
