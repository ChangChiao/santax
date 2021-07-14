<template>
    <div class="maintain">
        <div
            class="slider"
            style="
                background-image: url(/images/banner/watchmaking_player_co_axial_Large_1600x900.jpg);
            "
        >
            <div class="slider__content">
                <h1 class="slider__content__title">檢修流程</h1>
                <p class="slider__content__text">
                    為確保每枚時計離開SANTAX錶廠後，均符合原來的功能和美學設計規格，SANTAX特別制定出一套檢修程序。每枚機芯均經詳細檢查，而錶殼及錶鏈亦經過精細拋光，重現原來色澤。此外，SANTAX腕錶經嚴格的計時和防水測試，對品質水平作出保證，精準可靠。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>標準流程</h2>
        </div>
        <ul class="maintain__list">
            <li
                class="maintain__list__item"
                v-for="(vo, i) in list"
                :key="i + 'main'"
            >
                <div class="maintain__list__item__content maintain__content">
                    <h4>Step {{ i + 1 }}</h4>
                    <h5>{{ vo.title }}</h5>
                    <p>{{ vo.content }}</p>
                </div>
                <div
                    class="maintain__list__item__pic maintain__pic"
                    :style="{
                        backgroundImage: `url(/images/service/do-${i + 1}.jpg)`,
                    }"
                ></div>
            </li>
        </ul>
        <div
            class="maintain__all__pic maintain__pic"
            style="background-image: url(/images/service/do-all.jpg)"
        >
            <div class="maintain__all__content maintain__content">
                <h4>Step 9</h4>
                <h5>最高質量保證</h5>
                <p>
                    每個階段的檢修過程均經過嚴謹的質量測試。在最終檢測階段，製錶師會按照生產規格，最後一次查驗腕錶的動力儲備、計時精確度和整體外觀，確保各方面均達致最高品質水平。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    title: "拆解",
                    content:
                        "將錶殼與錶鏈拆解分開。製錶師會先打開錶殼，然後取出機芯。此時，錶殼已完全拆解。",
                },
                {
                    title: "清潔機芯",
                    content: "拆解機芯後，各組件以特別配方的溶液進行超聲波清潔",
                },
                {
                    title: "更換組件",
                    content:
                        "SANTAX製錶師仔細檢查每個獨立機芯組件，以判斷所需更換的部分。 製錶師只會選用由瑞士SANTAX總部所直接提供的原廠更換組件。",
                },
                {
                    title: "上潤滑劑並重新組裝機芯",
                    content:
                        "機芯各個功能組件均悉心塗上最先進的潤滑劑，以減低磨擦，預防耗損。這確保您的SANTAX腕錶機芯可持續準確運行。",
                },
                {
                    title: "校準時間",
                    content:
                        "平衡擺輪是SANTAX腕錶機芯的心臟地帶，每天振頻逾690,000次。為確保精準計時，製錶師細心調校平衡擺輪，並就其計時準確度進行電子測試。接着，製錶師便會全面檢測您的SANTAX腕錶，並在及後數天仔細觀察，以驗證腕錶的性能。",
                },
                {
                    title: "整修錶殼",
                    content:
                        "進行錶殼和錶鏈的檢修工序，與保養SANTAX腕錶機芯的過程同樣一絲不苟。在初步清潔後，錶殼和錶鏈均經詳細檢查，任何磨損或損壞的部份均會換上原廠SANTAX零件。然後，您的錶殼和錶鏈會以專業方式整修，並使用超聲波清洗，讓腕錶散發光澤。",
                },
                {
                    title: "防水測試",
                    content:
                        "錶殼經過嚴格測試，以確保符合耐壓要求。透過真空、壓縮及冷凝三個測試步驟，有助探測錶殼內含的極微量水份。",
                },
                {
                    title: "兩年服務保證",
                    content:
                        "在完成檢修後，您的SANTAX腕錶可獲兩年服務保證。其服務範圍並不包括因意外或不當使用腕錶而導致的損毀或磨損。如經非SANTAX認可的第三方檢修，或裝配非SANTAX原廠生產的組件或附件，服務保證則將會作廢。",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.maintain {
    &__list {
        &__item {
            display: flex;
            margin-top: 10px;
            height: 300px;
            &:nth-child(even) {
                flex-direction: row-reverse;
            }
            &:hover {
                .maintain__list__item__content {
                    background: #222;
                }
                .maintain__list__item__pic {
                    filter: brightness(1);
                }
            }
        }
    }
    &__content {
        width: 30%;
        color: #ddd;
        background-color: #444;
        text-align: left;
        box-sizing: border-box;
        padding: 15px;
        h4 {
            font-family: verdana;
            padding: 10px 0px;
            color: #fff;
            font-size: 2rem;
        }
        h5 {
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #ddd;
            padding-top: 10px;
        }
        p {
            font-size: 0.9rem;
            line-height: 24px;
            color: #bbb;
            padding-top: 10px;
        }
    }
    &__pic {
        width: 70%;
        background-size: cover;
        background-position: center;
        filter: brightness(0.4);
        transition: 0.5s;
    }
    &__all {
        &__pic {
            margin-top: 10px;
            height: 900px;
            width: 100%;
            display: flex;
            align-items: center;
            filter: brightness(1);
            background-blend-mode: darken;
            position: relative;
            transition: 0.5s;
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }
            &:hover {
                .maintain__all__content {
                    background: #222;
                }
                &::before {
                    display: none;
                }
            }
        }
        &__content {
            height: 300px;
            text-align: center;
            width: 100%;
            padding: 20px;
            position: relative;
            z-index: 10;
            p {
                padding: 10px 9%;
                text-align: left;
            }
        }
    }
}
</style>
