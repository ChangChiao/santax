<template>
    <div class="service">
        <div
            class="slider"
            style="
                background-image: url(@/assets/images/banner/cellini_time_0001_1680x1070.jpg);
            "
        >
            <div class="slider__content">
                <h1 class="slider__content__title">尋找經銷商</h1>
                <p class="slider__content__text">
                    唯有SANTAX授權的特約經銷商，方能提供銷售及保養SANTAX腕錶的服務。憑藉其豐富經驗、專業知識及獨特工具，
                    他們不僅確保您的SANTAX腕錶的各個零件均為真品及腕錶長遠的可靠運作，竭誠助您選購可伴隨一生的時計。
                </p>
            </div>
        </div>
        <div class="title">
            <h2>尋找經銷商</h2>
        </div>
        <div class="service__main">
            <div class="service__main__select">
                <h3>選擇地區</h3>
                <div class="dropdown">
                    <select class="dropdown-select" v-model="nowIndex">
                        <option
                            v-for="(vo, i) in selectList"
                            :key="i + 'k'"
                            :value="vo.id"
                        >
                            {{ vo.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="service__main__pic">
                <img
                    :src="`@/assets/images/store/store${nowIndex}.jpg`"
                    alt=""
                />
            </div>
            <div :class="[nowStore.color, 'service__main__bar']"></div>
            <h3>{{ nowStore.name }}</h3>
            <a :href="`tel:${nowStore.tel}`">{{ nowStore.tel }}</a>
            <p>
                {{ nowStore.address }}
                <a :href="nowStore.location"
                    ><i class="fas fa-map-marker-alt"></i
                ></a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        nowStore() {
            return this.list[this.nowIndex];
        },
    },
    data() {
        return {
            nowIndex: 0,
            selectList: [
                { name: "台灣", id: 0 },
                { name: "日本", id: 1 },
                { name: "法國˙", id: 2 },
                { name: "美國", id: 3 },
            ],
            list: [
                {
                    color: "yellow",
                    name: "台北旗艦店",
                    tel: "02-2888567",
                    address: "110台北市信義區松高路16號",
                    location:
                        "https://www.google.com.tw/maps/place/110%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E6%9D%BE%E9%AB%98%E8%B7%AF16%E8%99%9F/data=!4m2!3m1!1s0x3442abba4a8eab77:0x1eccdb98c501b841?sa=X&ved=0ahUKEwi9zZj9hqXPAhXDopQKHVE-CcsQ8gEIIjAB",
                },
                {
                    color: "green",
                    name: "東京銀座店",
                    tel: "3-3567-0077",
                    address: "3-2-1 Ginza, Chuo, Tokyo 104-0061日本",
                    location:
                        "https://www.google.com.tw/maps/place/3+Chome-2-1+Ginza,+Ch%C5%AB%C5%8D-ku,+T%C5%8Dky%C5%8D-to+104-0061%E6%97%A5%E6%9C%AC/@35.6733706,139.7648602,18z/data=!4m5!3m4!1s0x60188be5ac7d445f:0xf2028c2cc744c4b2!8m2!3d35.6737694!4d139.7650451",
                },
                {
                    color: "red",
                    name: "巴黎香榭店",
                    tel: "+33 1 44 50 73 00",
                    address: "51 Avenue Montaigne, 75008 Paris, 法國",
                    location:
                        "https://www.google.com.tw/maps/place/Avenue+Montaigne,+75008+Paris,+%E6%B3%95%E5%9C%8B/data=!4m2!3m1!1s0x47e66fdcaa0cb549:0x607d018620c897d7?sa=X&ved=0ahUKEwisk5uhh6XPAhVFHZQKHfJvD8sQ8gEIGTAA",
                },
                {
                    color: "blue",
                    name: "紐約旗艦店",
                    tel: "+1 212-966-3988",
                    address: "100 Mott St, New York, NY 10013美國",
                    location:
                        "https://www.google.com.tw/maps/place/100+Mott+St,+New+York,+NY+10013%E7%BE%8E%E5%9C%8B/@40.7172643,-73.9994059,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a278420dcf1:0x5f90be4a80be0260!8m2!3d40.7172643!4d-73.9972172",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.service {
    &__main {
        width: 70%;
        margin: 0 auto;
        // text-align: center;
        &__select {
            text-align: center;
        }
        &__bar {
            width: 25%;
            height: 10px;
        }
        &__pic {
            text-align: center;
            img {
                width: 100%;
            }
        }
        h3 {
            font-weight: bold;
            color: #41767c;
            font-size: 1.5rem;
            padding: 10px 0;
        }
        a {
            padding: 10px 0;
            font-weight: bold;
            color: #666;
            font-size: 1.2rem;
        }
        p {
            padding: 10px 0 50px;
            a {
                display: inline-block;
                margin-left: 10px;
                font-size: 20px;
                cursor: pointer;
                transition: 0.3s;
                &:hover {
                    color: #888;
                }
            }
        }
    }
}
.green {
    background: #458b74;
}
.red {
    background: #a52a2a;
}
.yellow {
    background: #fa0;
}
.blue {
    background: #00688b;
}
</style>
