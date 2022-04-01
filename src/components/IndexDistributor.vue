<template>
    <div class="distributor">
        <div class="title">
            <h2>New Arrival</h2>
            <p>新款上市</p>
        </div>
        <div class="distributor__store">
            <router-link to="">尋找您鄰近的經銷商</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.distributor {
    &__store {
        background-image: url("~@/assets/images/retailer.jpg");
        background-attachment: fixed;
        background-position: center center;
        background-size: cover;
        padding-bottom: 300px;
        height: 0;
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
        margin-bottom: 100px;
        line-height: 300px;
        a {
            display: inline-block;
            transform: scale(1.05, 1.05);
            color: #fff;
            letter-spacing: 2px;
            transition: 0.5s;
            box-sizing: border-box;
            white-space: nowrap;
            &:hover {
                transform: scale(1.02, 1.02);
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
}
</style>
