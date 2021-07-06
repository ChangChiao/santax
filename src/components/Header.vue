<template>
    <header class="header">
        <ul class="header__list">
            <li
                class="header__list__item"
                v-for="(vo, i) in menu"
                :key="'menu' + i"
                @click="goPage(vo.link)"
                @mouseenter="setActive(vo.name)"
            >
                {{ vo.name }}
                <ul
                    class="header__list__sub"
                    v-if="vo.subMenu && nowActive === vo.name"
                    @mouseleave="cleanActive"
                >
                    <li
                        class="header__list__item"
                        v-for="(item, i) in vo.subMenu"
                        :key="'submenu' + i"
                        @click="goPage(item.link)"
                    >
                        {{ item.name }}
                    </li>
                </ul>
            </li>
        </ul>
        <div class="header__logo" @click="goPage('/')">
            <img src="/images/logo.png" alt="" />
            <h6>SANTAX</h6>
            <p>森塔斯</p>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            nowActive: "",
            menu: [
                {
                    name: "探索品牌",
                    link: "",
                    subMenu: [
                        { name: "品牌故事", link: "/brandStory" },
                        { name: "名人故事", link: "/celebritystory" },
                        { name: "工藝世界", link: "/craft" },
                        { name: "極限測試", link: "/test" },
                    ],
                },
                { name: "鐵道系列", link: "railway", subMenu: false },
                { name: "工程系列", link: "engineer", subMenu: false },
                { name: "", link: "", subMenu: false },
                { name: "潛水系列", link: "diving", subMenu: false },
                { name: "GMT系列", link: "gmt", subMenu: false },
                {
                    name: "客戶服務",
                    link: "",
                    subMenu: [
                        { name: "經銷商據點", link: "" },
                        { name: "維修中心", link: "" },
                        { name: "常見問題", link: "" },
                        { name: "使用說明", link: "" },
                        { name: "檢修流程", link: "" },
                    ],
                },
            ],
        };
    },
    methods: {
        goPage(link) {
            if (!link) return;
            this.$router.push(link);
        },
        setActive(name) {
            this.nowActive = name;
        },
        cleanActive() {
            this.nowActive = "";
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    height: 80px;
    background-color: rgba(0, 0, 0, 0.7);
    transform-style: preserve-3d;
    position: relative;
    z-index: 100;
    &__list {
        width: 75%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        &__item {
            color: $font;
            white-space: nowrap;
            text-align: center;
            letter-spacing: 3px;
            line-height: 2.5rem;
            position: relative;
            &:hover {
                color: #999;
                transform: translateX(3px);
                transition: 0.3s;
            }
        }
        &__sub {
            background-color: rgba(0, 0, 0, 0.7);
            top: 52px;
            position: absolute;
            padding-top: 20px;
            height: 240px;
            width: 120px;
        }
    }
    &__logo {
        width: 7%;
        max-width: 70px;
        top: 0;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: $base;
        min-height: 100px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        border: 5px solid #335c61;
        h6 {
            font-size: 14px;
            padding-bottom: 5px;
        }
        p {
            font-size: 12px;
        }
        &:hover {
            transform: scale(1.05);
            transition: 0.5s;
        }
    }
}
</style>
