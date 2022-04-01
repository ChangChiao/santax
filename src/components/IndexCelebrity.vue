<template>
    <div class="celebrity">
        <div class="celebrity__item">
            <router-link to="/"
                >名人故事<i class="fas fa-chevron-circle-left"></i
            ></router-link>
        </div>
        <div class="celebrity__item craft">
            <router-link to="/"
                >工藝世界<i class="fas fa-chevron-circle-right"></i
            ></router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.celebrity {
    height: 200px;
    margin: 100px 0;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__item {
        width: 40%;
        height: 200px;
        background-image: url("~@/assets/images/pan.jpg");
        background-size: cover;
        background-position: 40% 50%;
        color: #fff;
        box-sizing: border-box;
        position: relative;
        &.craft {
            background-image: url("~@/assets/images/002.jpg");
        }
        a {
            display: inline-block;
            color: #fff;
            width: 100%;
            height: 80px;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 25px 20px;
            box-sizing: border-box;
            position: absolute;
            transition: 0.5s;
            left: 0;
            bottom: 0;
            &:hover {
                background-color: rgba(0, 0, 0, 0.5);
            }
        }
        i {
            margin: 0 10px;
        }
    }
}
</style>
