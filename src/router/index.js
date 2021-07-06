import { createRouter, createWebHashHistory } from "vue-router";
import BrandStory from "../views/BrandStory.vue";
import Index from "../views/Index.vue";
import Directions from "../views/Directions.vue";
import CelebrityStory from "../views/CelebrityStory.vue";
import Craft from "../views/Craft.vue";
import Maintenance from "../views/Maintenance.vue";
import Question from "../views/Question.vue";
import Series from "../views/Series.vue";
import Service from "../views/Service.vue";
import ServiceCenter from "../views/ServiceCenter.vue";
import Test from "../views/Test.vue";
import Watch from "../views/Watch.vue";
const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/brandstory",
        name: "BrandStory",
        component: BrandStory,
    },
    {
        path: "/celebritystory",
        name: "CelebrityStory",
        component: CelebrityStory,
    },
    {
        path: "/craft",
        name: "Craft",
        component: Craft,
    },
    {
        path: "/directions",
        name: "Directions",
        component: Directions,
    },
    {
        path: "/maintenance",
        name: "maintenance",
        component: Maintenance,
    },
    {
        path: "/question",
        name: "Question",
        component: Question,
    },
    {
        path: "/series",
        name: "Series",
        component: Series,
    },
    {
        path: "/service",
        name: "Service",
        component: Service,
    },
    {
        path: "/servicecenter",
        name: "ServiceCenter",
        component: ServiceCenter,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
    },

    {
        path: "/watch",
        name: "Watch",
        component: Watch,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
