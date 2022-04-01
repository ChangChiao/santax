<template>
    <div class="craft">
        <div
            class="slider"
            style="
                background-image: url(@/assets/images/banner/Watchmaking_TetiereLarge_1600x655_homepage.jpg);
            "
        >
            <div class="slider__content">
                <h1 class="slider__content__title">SANTAX製錶工藝</h1>
                <p class="slider__content__text">
                    SANTAX是腕錶研發的先驅，從金合金的鑄造，到機芯、錶殼、錶面及錶帶的加工、
                    打磨、組裝和修飾，腕錶的所有重要零件均由SANTAX全力設計及研製。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>全新性能標準</h2>
        </div>
        <div class="craft__info">
            <div class="craft__info__item">
                <h3>精準兩倍</h3>
                <p>瑞士天文台認證</p>
                <h3>專利 新組件</h3>
                <p>14項 > 90%</p>
            </div>
            <div class="craft__info__item pic"></div>
            <div class="craft__info__item">
                <h3>擒縱系統</h3>
                <p>效率+15%</p>
                <h3>動力儲備</h3>
                <p>小時 (+50%)</p>
            </div>
        </div>
        <p class="craft__info__text">
            SANTAX於2015年巴塞爾世界鐘錶珠寶博覽會上隆重呈獻頒授14項專利技術的3255型機芯。此新世代機械機芯為腕錶機芯的核心性能奠下新標準，包括其精準度、動力儲備、可靠性能、抗震力、防磁性，以及調校過程的簡便程度。
            3255型機芯的精準度較官方鑒定認可時計的日常使用標準高出兩倍。此機芯裝配全新的SANTAX專利Chronergy擒縱系統，集高效動力及可靠性能於一身。由於機芯以鎳磷製成，故不受磁場干擾。平衡擺輪可說是機械機芯的心臟，裝有經改良的藍色Parachrom游絲，遇上震動時，其精準度更較傳統游絲高出十倍。憑藉發條盒的全新結構設計及擒縱系統的高效率運作，讓3255型機芯的動力儲備因而增加了三天。即使腕錶未經佩戴或上鏈，仍然能從星期五晚上繼續運行至星期一下午。
        </p>
        <div class="title">
            <h2>新製機芯</h2>
        </div>
        <ul class="craft__list">
            <li
                v-for="(vo, i) in list"
                :key="i + 'cr'"
                class="craft__list__item"
            >
                <img :src="`@/assets/images/world/${vo.img}.png`" alt="" />
                <h6>{{ vo.name }}</h6>
                <p>{{ vo.text }}</p>
            </li>
        </ul>
        <div class="title">
            <h2>質量之作</h2>
        </div>
        <div class="craft__design"></div>
        <p class="craft__content">
            每一枚SANTAX錶都是由各領域勝任的製錶專家們以極專業手法加工而成。他們都久經訓練，以靈巧的雙手配合精確的儀器將不同的組件逐一裝配起來，精工細作，令每一枚SANTAX萬國錶都是集精準、功能及設計於一身的出眾腕錶，每一枚SANTAX萬國錶都是製錶工藝的高水準之作。
        </p>
        <ul class="craft__pic">
            <li class="craft__pic__item __0"></li>
            <li class="craft__pic__item __1"></li>
            <li class="craft__pic__item __2"></li>
            <li class="craft__pic__item __3"></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: "P.9100",
                    img: "791522",
                    text: "P.9100自動上鏈機械式機芯，13¾法分，厚8.15毫米，37石，302個零件。",
                },
                {
                    name: "P.8500",
                    img: "791528",
                    text: "P.8500/R自動上鏈機械式機芯，13¾法分，厚9.55毫米，37石，328個零件。",
                },
                {
                    name: "p.6500",
                    img: "1333036",
                    text: "P.6500自動上鏈機械式機芯，13¾法分，厚8.10毫米，25石，299個零件。",
                },
                {
                    name: "P.7100",
                    img: "1111068",
                    text: "P.7100自動上鏈機械機芯，13¾法分，厚6.0毫米，31石，200件零件。",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.craft {
    &__info {
        display: flex;
        justify-content: center;
        &__item {
            width: 20%;
            animation: fadeIn 0.5s forwards ease-out;
            margin: 0 10px;
            h3 {
                font-weight: bold;
                color: #111;
                font-size: 2rem;
                padding-bottom: 10px;
            }
            p {
                color: #666;
                font-size: 1.2rem;
                padding-bottom: 80px;
            }
            &.pic {
                width: 300px;
                height: 300px;
                border-radius: 50%;
                background: url("~@/assets/images/world/calibre-3255.jpg");
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
        }
        &__text {
            width: 80%;
            margin: 0 auto;
            line-height: 1.4rem;
            padding: 50px 0;
            text-align: left;
        }
    }
    &__list {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: #111;
        padding: 50px;
        &__item {
            width: 20%;
            img {
                width: 100%;
                max-width: 200px;
            }
            h6 {
                text-align: center;
                font-weight: 900;
                padding-bottom: 10px;
                font-size: 1.2rem;
                color: #eee;
            }
            p {
                color: #fff1d3;
                line-height: 1.4rem;
                font-size: 0.8rem;
            }
        }
    }
    &__content {
        width: 50%;
        margin: 0 auto;
        line-height: 1.6rem;
        padding: 80px 0;
        font-size: 1.2rem;
        text-align: left;
    }
    &__design {
        height: 400px;
        background-image: url("~@/assets/images/world/designing_main_bg.jpg");
        background-position: 50% 20%;
    }
    &__pic {
        margin-bottom: 100px;
        display: flex;
        &__item {
            width: 25%;
            height: 0;
            padding-bottom: 100px;
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            &.__0 {
                background-image: url("~@/assets/images/world/01.jpg");
            }
            &.__1 {
                background-image: url("~@/assets/images/world/02.jpg");
            }
            &.__2 {
                background-image: url("~@/assets/images/world/03.jpg");
            }
            &.__3 {
                background-image: url("~@/assets/images/world/04.jpg");
            }
        }
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
