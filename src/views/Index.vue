<template>
    <div class="index">
        <div class="banner">
            <h2 class="banner__slogan">"零秒出手，是我一貫的風格"</h2>
            <div class="banner__mask">
                <h3>OYSTER PERPETUAL GMT-MASTER II PAM508</h3>
                <p>
                    與時並進
                    雖然GMT-Master腕錶特別為專業用途而設，其無與倫比的功能性與外觀設計，
                    讓它同時廣受旅遊人士所擁戴。除備有不同時區時間顯示外，GMT-Master的堅固
                    材質及易於配搭的外型，不僅適合環遊世界時佩戴，也適用於出席任何場合。
                </p>
            </div>
        </div>
        <index-watch />
        <index-series />
    </div>
</template>

<script>
import IndexWatch from "../components/IndexWatch";
import IndexSeries from "../components/IndexSeries";
export default {
    components: {
        IndexWatch,
        IndexSeries,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.banner {
    background-image: url("/images/banner/wear.jpg");
    background-position: top right;
    height: 0;
    padding-bottom: 600px;
    background-size: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    position: relative;
    &:hover {
        .banner__mask {
            display: block;
            bottom: 0;
            left: 0;
        }
    }
    &__slogan {
        font-size: 1.5rem;
        text-align: left;
        color: #ddd;
        position: relative;
        top: 150px;
        left: 50%;
        font-weight: 900;
    }
    &__mask {
        height: 200px;
        width: 100%;
        position: absolute;
        bottom: -200px;
        left: 0;
        z-index: 2;
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: left;
        font-size: 1rem;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
        padding: 40px 10%;
        box-sizing: border-box;
        h3 {
            color: #fff;
            text-align: left;
            margin: 10px 0px;
            font-size: 1.2rem;
        }
        p {
            margin: 30px 0px;
            color: #ddd;
            text-align: left;
        }
    }
}
</style>
