<template>
    <div class="watch">
        <Crumbs :series="series" :model="singleData.model" />
        <h1 class="watch__name">{{ singleData.name }}</h1>
        <h3 class="watch__model">{{ singleData.model }}</h3>
        <div class="watch__info">
            <img
                :src="`/images/watch/${prefix}/${prefix}-${parseInt(
                    index + 1
                )}.png`"
                alt=""
            />
            <ul>
                <li>機芯</li>
                <li>{{ singleData.caliber }}</li>
                <li>錶殼</li>
                <li>{{ singleData.case }}</li>
                <li>錶殼直徑</li>
                <li>{{ singleData.width }}</li>
                <li>錶盤顏色</li>
                <li>{{ singleData.color }}</li>
                <li>耐震性能</li>
                <li>{{ singleData.shockproof }}</li>
                <li>防水性能</li>
                <li>{{ singleData.waterproof }}</li>
                <li>防磁性能</li>
                <li>{{ singleData.antimagnetic }}</li>
            </ul>
        </div>
        <div class="watch__detail">
            <div class="watch__detail__item">
                <img
                    :src="`/images/watch/${prefix}/${prefix}-${parseInt(
                        index + 1
                    )}-b.png`"
                    alt=""
                />
                <div class="watch__detail__text">
                    <h5>{{ singleData.material }}</h5>
                    <p>{{ material[singleData.material] }}</p>
                </div>
            </div>
            <div class="watch__detail__item">
                <img
                    :src="`/images/watch/${prefix}/${prefix}-${parseInt(
                        index + 1
                    )}-s.png`"
                    alt=""
                />
                <div class="watch__detail__text">
                    <h5>{{ singleData.title }}</h5>
                    <p>{{ singleData.content }}</p>
                </div>
            </div>
            <div class="watch__detail__item">
                <img
                    :src="`/images/world/${
                        caliberList[getRandomInt(0, 3)]
                    }.png`"
                    alt=""
                />
                <div class="watch__detail__text">
                    <h5>{{ singleData.caliber }}型機芯</h5>
                    <p>
                        {{
                            `此錶款採用完全由SANTAX研製的${singleData.caliber}型自動上鏈機械機芯。機芯裝配Parachrom游絲和Paraflex緩震裝置，有效抵禦撞擊及於極端環境下使用。如同所有SANTAX恒動機芯一樣，${singleData.caliber}型機芯也獲得了瑞士官方鑒定認可時計認證。此機芯的構造與所有蠔式腕錶機芯相同，具有無與倫比的可靠性能。`
                        }}
                    </p>
                </div>
            </div>
            <h4>{{ seriesData[series].title }}</h4>
            <div class="watch__demo">
                <img
                    :src="`/images/watch/${prefix}/${prefix}-${parseInt(
                        index + 1
                    )}-b-0.png`"
                    alt=""
                />
                <p>{{ seriesData[series].slogan }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Crumbs from "@/components/Crumbs";
import seriesData from "@/assets/json/series";
import watchData from "@/assets/json/watch.json";
import material from "@/assets/json/material.json";
export default {
    components: {
        Crumbs,
    },
    data() {
        return {
            watchData,
            seriesData,
            material,
            series: "",
            index: 0,
            caliberList: ["791522", "791528", "1333036", "1111068"],
        };
    },
    computed: {
        singleData() {
            return this.watchData[this.series][this.index];
        },
        prefix() {
            return this.series && this.series[0];
        },
    },
    watch: {
        "$route.query.id": {
            immediate: true,
            handler: function (val) {
                const [ser, mod] = val.split("_");
                this.series = ser;
                this.index = mod;
            },
        },
    },
    methods: {
        getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    },
};
</script>

<style lang="scss" scoped>
.watch {
    text-align: center;
    padding: 100px 50px;
    &__name {
        color: #41767c;
        font-size: 25px;
        font-weight: bold;
        margin: 100px 0 20px;
    }
    &__model {
        color: #666;
        font-size: 20px;
        font-weight: bold;
        margin: 20px 0 100px;
    }
    &__info {
        display: flex;
        justify-content: center;
        img {
            width: 30%;
            max-width: 400px;
            margin-right: 100px;
        }
        ul {
            li {
                text-align: left;
                color: #888;
                padding: 5px 0;
                &:nth-child(odd) {
                    font-size: 1.2rem;
                    color: #222;
                    font-weight: bold;
                    position: relative;
                    &::before {
                        content: "";
                        height: 10px;
                        width: 10px;
                        font-size: 1rem;
                        background-color: #4c7c83;
                        border-radius: 50%;
                        position: absolute;
                        top: 10px;
                        left: -15px;
                    }
                }
            }
        }
    }
}
</style>
