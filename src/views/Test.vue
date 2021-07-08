<template>
    <div class="test">
        <div
            class="slider"
            style="
                background-image: url(/images/banner/page-06-watchfinder-header-large.jpg);
            "
        >
            <div class="slider__content">
                <h1 class="slider__content__title">極限測試</h1>
                <p class="slider__content__text">
                    測試 cak1 si3
                    一系列我們腕錶難以遇見的極限試驗。一系列嚴格試驗，以確保每一只SANTAX腕錶在任何實際環境下都能表現出色。確保SANTAX腕錶佩戴者創造速度更快、距離更遠及探潛更深的記錄。是我們不斷創造、提升及創新的途徑。SANTAX之道
                </p>
            </div>
        </div>
        <div class="title">
            <h2>防震測試</h2>
        </div>
        <p class="test__text">
            爲了達到最高質量水平，每一枚
            Watch都必須經過極爲嚴格的測試程序，以保證防震性能可達到5,000Gs。按照ISO
            1413國際標準，測試程序是使用鐘擺式撞擊測試機進行防震性能檢測。
        </p>
        <div class="test__pic top"></div>
        <div class="title">
            <h2>防磁測試</h2>
        </div>
        <p class="test__text">
            大部分的SANTAX
            Watch以防腐蝕鐵氧體(Ferritic)不銹鋼作爲材料，製造出具卓越防磁功能的錶殼。此外，一個防磁軟鐵內殼(
            包括一個保護機芯的圓環及一底蓋)，可用來保護手錶内部的正常運轉。這種配合著錶殼外型的特殊合金零件，可以令機芯減少受到磁場影響，從而保證準確報時。
        </p>
        <div class="test__pic bottom"></div>
        <div class="title">
            <h2>經認證的精準度</h2>
        </div>
        <div class="test__core">
            <img src="/images/test/rolex_way.jpg" alt="" />
        </div>
        <p class="test__text">
            歷經考驗與測試可靠性能只有少數公司能持續秉承追求卓越、力臻至善、探求原創和嶄新方法的精神。但凡想像得到的嚴苛環境，不管是萬丈深海、巍峨高峰，還是置身在半空或賽道之中，SANTAX腕錶從一開始便歷經重重難關。每枚腕錶在離開製造所前均經最嚴謹的測試，確保所有SANTAX出品都不負眾望，發揮出頂尖水準。
        </p>
        <div class="test__intro">
            <div class="test__intro__item test__intro__item__pic"></div>
            <div class="test__intro__item test__intro__item__text">
                <h5>蠔式保險扣</h5>
                <p>
                    攀登險峻山峰或下潛至海洋深處等活動以及意外碰撞和日常動作，均有機會令腕錶的錶帶和帶扣承受極大壓力。裝配於SANTAX專業腕錶的新一代蠔式保險扣在研發過程中經過26種不同類型的墜落測試。保險扣曾被沉浸在加入沙粒的氯氣和鹽水罐中，然後開關數十萬次，大約相當於帶扣生命週期的三倍左右，以確保帶扣於極端情況下仍能正常使用。
                </p>
            </div>
        </div>
        <div class="test__intro">
            <div class="test__intro__item test__intro__item__pic"></div>
            <div class="test__intro__item test__intro__item__text">
                <h5>嚴格的防水測試</h5>
                <p>
                    所有蠔式恒動腕錶均配備蠔式錶殼，為機芯提供最佳保護，免受水份、灰塵及震動的影響。在出廠前，每枚蠔式腕錶均會浸於水中，其測試水壓較保證的防水深度高出10%，潛水錶款更高出25%。故此，每枚SANTAX蠔式腕錶不僅是可抵禦至少水深100米的水壓，而是經過測試證明。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.test {
    &__text {
        width: 80%;
        margin: 0 auto;
        padding: 50px 0;
        line-height: 1.4rem;
    }
    &__core {
        text-align: center;
    }
    &__pic {
        height: 0px;
        padding-bottom: 500px;
        width: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100%;
        &.top {
            background-image: url(/images/test/Shock_Resistance.jpg);
        }
        &.bottom {
            background-image: url(/images/test/Anti_Magnetism.jpg);
        }
    }
    &__intro {
        display: flex;
        &:last-child {
            flex-direction: row-reverse;
            .test__intro__item__pic {
                background-image: url(/images/test/rolex_way_tested_to.jpg);
            }
        }
        &__item {
            width: 50%;
            &:last-child {
                flex-direction: row-reverse;
            }
            &__pic {
                height: 0;
                padding-bottom: 500px;
                background-image: url(/images/test/rolex_way_tested.jpg);
                background-position: center center;
                background-repeat: no-repeat;
                box-sizing: border-box;
            }
            &__text {
                width: 50%;
                box-sizing: border-box;
                padding: 0 5%;
                text-align: left;
                h5 {
                    font-size: 1.5rem;
                    font-weight: 900;
                    padding: 50px 0;
                }
                p {
                    line-height: 1.6rem;
                }
            }
        }
    }
}
</style>
