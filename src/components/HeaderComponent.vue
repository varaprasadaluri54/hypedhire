<template>
    <header class="site-header">
        <q-toolbar>
            <q-toolbar-title>
                <q-img src="img/logo.svg" style="width: 140px"></q-img>
            </q-toolbar-title>

            <q-toolbar-title class="gt-sm">
                <div class="dropdown">
                    <a href="#" class="q-mr-md text-white" style="font-size: 1rem; font-weight: bold">채용
                        <span class="q-ml-sm"><img src="icons/arrow-down.svg" /></span>
                    </a>

                    <div class="dropdown-content shadow-2">
                        <a href="#" class="text-weight-bold">채용</a>
                        <a href="#">해외 개발자 원격 채용</a>
                        <a href="#">외국인 원격 채용 (비개발 직군)</a>
                        <a href="#">한국어 가능 외국인 채용</a>
                    </div>
                </div>
                <a href="#" class="text-white q-ml-sm" style="font-size: 1rem; font-weight: bold">해외 개발자 활용 서비스</a>
            </q-toolbar-title>

            <div class="gt-sm">
                <q-btn style="background: white ; color :  #4A77FF" label="문의하기" />
            </div>

            <div>
                <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" class="lt-md"
                    color="white" />
            </div>
        </q-toolbar>
    </header>

    <q-drawer v-model="leftDrawerOpen" bordered>
        <q-list>
            <q-item-label header> Essential Links </q-item-label>

            <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
        </q-list>
    </q-drawer>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "./EssentialLink.vue";

const linksList = [
    { title: "채용", icon: "school" },
    { title: "해외 개발자 원격 채용", icon: "code" },
    { title: "외국인 원격 채용 (비개발 직군)", icon: "chat" },
    { title: "한국어 가능 외국인 채용", icon: "record_voice_over" }
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.site-header {
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 100%;
    padding-left: 7%;
    padding-right: 7%;
    padding-top: 0.5rem;

    @media (max-width: 1024px) {
        padding-left: 2rem;
    }

    @media (max-width: 600px) {
        padding-left: 0%;
    }
}

.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    margin-left: -12rem;
    background-color: #f1f1f1;
    min-width: 160px;
    border-radius: 12px;
    z-index: 999999;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 1rem;
    transition: 0.5s all ease;
}

.dropdown-content a:hover {
    background: rgb(235, 229, 229);
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>