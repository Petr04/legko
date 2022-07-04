<template>
    <div class="containerQue">
        <div class="queBlock">
            <div class="queTriangel"></div>
            <img class="triangel" src="../assets/queTriangel.svg" alt="">
            <img src="@/assets/arrowQuestion.svg" alt="">
            <p>
                <slot />
            </p>
            
        </div>
        
    </div>
</template>

<style scoped>
    .containerQue{
        width: 95%;
        height: fit-content;
        position: relative;
    }
    .queBlock{
        background-color: rgba(217, 217, 217, 1);
        padding: 10px 10px 10px 20px;
        width: 85%;
        float: left;
        display: flex;
        align-items: center;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        height: fit-content;
        margin-top: 10px;
    }
    .queBlock img{
        height: 30px;
        z-index: 5;
    }
    .queBlock p{
        margin-bottom: 0px;
        margin-left: 10px;
        font-size: 22px;
        z-index: 5;
    }
    .queTriangel{
        background-color: rgba(217, 217, 217, 1);
        width: 85%;
        height: 100%;
        float: left;
        margin-left: -3px;
        position: absolute;
        left: 0px;
        /* border-radius: 7px;
        border: 35px solid transparent;
        border-left: 21px solid rgba(217, 217, 217, 1); */
    }
    .triangel{
        height: 100% !important;
        width: auto;
        position: absolute;
        z-index: 0 !important;
        left: 81%;
    }

    @media screen and (min-width: 768px){
        .triangel{
            left: 84%;
        }
    }
</style>
