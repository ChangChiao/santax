<template>
    <div class="celebrity">
        <div
            class="slider"
            style="background-image: url(/images/banner/1maintenancead.jpg)"
        >
            <div class="slider__content">
                <h1 class="slider__content__title">名人故事</h1>
                <p class="slider__content__text">
                    SANTAX腕錶常備受珍視，它不僅具備物質價值，更蘊藏深遠的意義。不論是作為家傳之寶、成功路上的里程碑或贈禮，SANTAX腕錶常象徵著生命旅途上的非凡時刻。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>一只SANTAX，一個故事</h2>
        </div>
        <ul class="celebrity__list">
            <li
                :class="['celebrity__list__item', { active: nowIndex === i }]"
                v-for="(vo, i) in list"
                :key="i + 'ce'"
                :style="{
                    backgroundImage: `url(/images/person/${
                        nowIndex === i ? 'story-p' + i : 'p' + i
                    }.jpg)`,
                }"
                @click="setActive(i)"
            >
                <div class="celebrity__list__item__outer">
                    <h3>{{ vo.name }}</h3>
                    <span>了解更多</span>
                </div>
                <p class="celebrity__list__item__inner">
                    {{ vo.content }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowIndex: -1,
            list: [
                {
                    id: "a",
                    name: "蓮茜 ∙ 禾恩",
                    content:
                        "蓮茜 ∙ 禾恩（Lindsey Vonn）是美國高山滑雪世界盃運動員，並堪稱全球最成功的滑雪運動員之一。2013年，她膝蓋的傷患嚴重影響她的滑雪能力，更令她錯失整個滑雪賽季與索契冬季奧林匹克運動會。儘管這有礙她職業生涯的發展，但她憑着果敢與堅毅精神成功克服逆境。",
                },
                {
                    id: "b",
                    name: "積奇 ∙ 史釗活",
                    content:
                        "積奇 ∙ 史釗活爵士（Sir Jackie Stewart）於1966年至1973年間，三度於FORMULA 1 GRAND PRIX DE MONACO大賽勝出。有着「飛行蘇格蘭人」綽號的史釗活爵士在賽道上堪為一級方程式賽車史上最傑出的車手之一，然而他在賽事外則以宣揚賽車運動安全駕駛而見稱。",
                },
                {
                    id: "c",
                    name: "米高 ∙ 布雷",
                    content:
                        "米高 ∙ 布雷（Michael Bublé）自幼便憧憬成為知名歌手。在全球發行五千萬張唱片、贏得四項格林美殊榮、連續四張專輯於美國Billboard 200唱片排行榜位居首位，在達成這些矚目成就之前，布雷曾經過十年的努力，才能令夢想成真。無數個演出的晚上，除家人及朋友外，只有少量的聽眾支持，幸而他最終能取得突破。",
                },
                {
                    id: "d",
                    name: "維積 ∙ 阿姆",
                    content:
                        "維積 ∙ 阿姆（Vijay Amritraj）成功克服生命中的挑戰。生於印度的阿姆自小患有嚴重肺病，令他童年大部分時間均在醫院中渡過。當醫生建議他參與戶外運動以強健體魄時，他選擇了網球運動。此運動不僅讓他恢復健康，更成就他成為印度首位職業運動員。",
                },
            ],
        };
    },
    methods: {
        setActive(index) {
            this.nowIndex = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.celebrity {
    &__list {
        display: flex;
        width: 100%;
        margin-bottom: 100px;
        &__item {
            width: 25%;
            cursor: pointer;
            height: 0px;
            padding-bottom: 500px;
            transition: 0.5s;
            background-size: cover;
            position: relative;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            &:nth-child(2) {
                background-position: 60% 50%;
                p {
                    float: right;
                }
            }
            &:nth-child(3) {
                background-position: 80% 50%;
            }
            &__outer {
                color: #fff;
                padding-top: 10%;
                h3 {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                }
                span {
                    font-size: 0.8rem;
                    padding: 5px 10px;
                    letter-spacing: 3px;
                    border: 1px solid #fff;
                }
            }
            &__inner {
                display: none;
                color: #fff;
                width: 50%;
                padding: 30px 20px;
                text-align: left;
            }
            &.active {
                width: 75%;
                p {
                    display: block;
                }
                .celebrity__list__item__outer {
                    display: none;
                }
            }
        }
    }
}
</style>
