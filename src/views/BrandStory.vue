<template>
    <div class="brand">
        <div
            class="slider"
            style="
                background-image: url(@/assets/images/banner/page-06-watchfinder-header-large.jpg);
            "
        >
            <div class="slider__content">
                <h1 class="slider__content__title">品牌故事</h1>
                <p class="slider__content__text">
                    身為腕錶界的先驅，源於1905年的SANTAX締造出多項創新製錶技術，包括首款
                    防水腕錶「Oyster」及恒動擺鉈自動上鏈系統。超過一世紀以來，SANTAX腕錶
                    伴隨世界各地的探險家與精英征服世界之巔與海洋最深處。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>一個改變歷史的契機</h2>
        </div>
        <div :class="['brand__item', { in: inView.includes(0) }]">
            <div
                class="brand__item__pic"
                style="
                    background-image: url(@/assets/images/story/ourmaison.jpg);
                "
            ></div>
            <div class="brand__item__text">
                <h3>1956年</h3>
                <h4>漢斯 ∙ 森塔斯約克</h4>
                <p>
                    SANTAX的歷史與其富有遠見和開拓精神的創辦人漢斯 ∙
                    森塔斯約克（Hans Santax）
                    之間，有著密不可分的關係。1905年，年僅24歲的他便於倫敦開設專營時計發行的
                    公司。他更幻想將錶佩戴在腕上。雖然當時的腕錶精準度不足，但漢斯
                    ∙ 威爾斯多夫
                    卻能預視腕錶不但可展現優雅風格，並同時精準可靠。
                    為讓大眾相信他的創新時計能同樣精確無誤，他特地為腕錶裝配了由位於瑞士比爾的
                    一家製錶公司所生產的小巧、精準機芯
                </p>
            </div>
        </div>
        <div :class="['brand__item', { in: inView.includes(1) }]">
            <div
                class="brand__item__pic"
                style="
                    background-image: url(@/assets/images/story/wildorf_hans_1908_0001_840x770.jpg);
                "
            ></div>
            <div class="brand__item__text">
                <h3>1961年</h3>
                <h4>五個巧妙的字母</h4>
                <p>
                    漢斯 ∙ 森塔斯約克希望為腕錶取一個精簡易讀的
                    名字，任何語言都容易記得，而且在腕錶機芯和 錶面上美觀悅目。
                </p>
            </div>
        </div>
        <div :class="['brand__item', { in: inView.includes(2) }]">
            <div
                class="brand__item__pic"
                style="
                    background-image: url(@/assets/images/story/1955_submariner_0001_1680x700.jpg);
                "
            ></div>
            <div class="brand__item__text">
                <h3>1968年</h3>
                <h4>第一支SANTAX腕錶問世</h4>
                <p>
                    在歷經多年努力之後，集結眾人的努力，終於打造出第一支SANTAX腕錶。
                </p>
            </div>
        </div>
        <div :class="['brand__item', { in: inView.includes(3) }]">
            <div
                class="brand__item__pic"
                style="
                    background-image: url(@/assets/images/story/geneva_0001_840x770.jpg);
                "
            ></div>
            <div class="brand__item__text">
                <h3>1972年</h3>
                <h4>歷史上的一刻</h4>
                <p>
                    SANTAX遷往以製錶工藝著稱的國際城市日內瓦，於1920年在當地為公司「
                    Montres SANTAX S.A. 」註冊。
                </p>
            </div>
        </div>
        <div :class="['brand__item', { in: inView.includes(4) }]">
            <div
                class="brand__item__pic"
                style="
                    background-image: url(@/assets/images/story/first_transcontinental_flights__0001_840x420.jpg);
                "
            ></div>
            <div class="brand__item__text">
                <h3>1981年</h3>
                <h4>新的時代</h4>
                <p>
                    SANTAX在日內瓦建立了第一間錶廠，並著手研發動力儲存更久的機芯
                </p>
            </div>
        </div>
        <div :class="['brand__item', { in: inView.includes(5) }]">
            <div
                class="brand__item__pic"
                style="background-image: url(@/assets/images/story/201604.jpg)"
            ></div>
            <div class="brand__item__text">
                <h3>1972迄今</h3>
                <h4>永不止息</h4>
                <p>
                    SANTAX至創立以來，在世界各地已販售出超過十萬支手錶，品牌價值已深植人心，未來也會致力研發新錶款來滿足消費者需求
                </p>
            </div>
            <div
                class="brand__item__pic"
                style="background-image: url(@/assets/images/story/droite.jpg)"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inView: [],
        };
    },
    methods: {
        scrollEvent() {
            const dom = document.getElementsByClassName("brand__item");
            if (this.inView.length === dom.length) return;
            for (let i = 0; i < dom.length; i++) {
                if (this.isInView(dom[i]) && !this.inView.includes(i)) {
                    this.inView.push(i);
                }
            }
        },
        isInView(el) {
            const viewPortHeight =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;
            const offsetTop = el.offsetTop;
            const scrollTop = document.documentElement.scrollTop;
            const top = offsetTop - scrollTop;
            return top <= viewPortHeight;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.scrollEvent);
    },
};
</script>

<style lang="scss" scoped>
.brand {
    &__item {
        display: flex;
        opacity: 0;
        &:nth-of-type(even) {
            flex-direction: row-reverse;
        }
        &:last-child {
            margin: 50px 0;
            .brand__item__pic {
                padding-bottom: 700px;
            }
        }
        &.in {
            animation: fadeIn 0.5s forwards ease-out;
        }
        &__pic {
            width: 50%;
            height: 0;
            padding-bottom: 500px;
            background-size: cover;
            background-position: top center;
            box-sizing: border-box;
        }
        &__text {
            width: 50%;
            height: 0;
            padding-bottom: 500px;
            background-size: cover;
            background-position: top center;
            padding: 50px;
            box-sizing: border-box;
            text-align: left;
            h3 {
                font-weight: bold;
                font-size: 2rem;
                padding: 15px 0;
                color: $base;
            }
            h4 {
                font-size: 1.5rem;
                padding-bottom: 15px;
                font-weight: bold;
            }
            p {
                line-height: 1.6rem;
            }
        }
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateX(-100vw);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
