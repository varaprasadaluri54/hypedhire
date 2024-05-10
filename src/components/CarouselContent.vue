<template>
    <div class="slideContainer">
        <img src="img/Ellipse.png" alt="avatar" />
        <div class="text-weight-bold text-h5">Abhishek Gupta</div>
        <div class="text-weight-bold text-subtitle1 text-secondary">마케팅 · 2y+</div>
        <div class="q-mt-lg">
            <div class="carousel-subtext">마케팅 콘텐츠 제작</div>
            <div class="carousel-subtext">인스타그램 관리</div>
        </div>
        <div class="flex-row">
            <div class="carousel-subtext">트위터 관리</div>
            <div class="carousel-subtext">블로그 글 작성</div>
        </div>
    </div>
</template>

<style scoped>
.slideContainer {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.8rem;
    cursor: pointer;
}

img {
    border-radius: 50%;
    width: 130px;
    height: 130px;
    margin-bottom: 0.7rem;
}

.carousel-subtext {
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    padding: 5px 16px;
    text-align: center;
    margin-bottom: 0.5rem;
}

.flex-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.carousel-subtext:last-child {
    margin-left: auto;
}
</style>