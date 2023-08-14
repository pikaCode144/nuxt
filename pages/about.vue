<script setup>
import Banner from '@/components/Banner'
const route = useRoute()
const { index } = route.query

const items = ref([
    {
        name: '平台简介',
        id: 1,
    },
    {
        name: '联系我们',
        id: 2,
    },
    {
        name: '建议反馈',
        id: 3,
    },
])


</script>

<template>
    <Banner />
    <v-container>
        <v-row no-gutters>
            <v-col cols="3">
                <v-sheet class="pa-2 ma-2">
                    <v-card class="mx-auto card">
                        <div class="title">
                            <span class="subtitle">关于我们</span>
                            <span class="circle1"></span>
                            <span class="circle2"></span>
                            <span class="circle2"></span>
                        </div>
                        <v-list class="item" :items="items" item-title="name" item-value="id"></v-list>
                    </v-card>
                </v-sheet>
            </v-col>
            <v-col cols="9">
                <v-sheet class="pa-2 ma-2" style="height: 800px;overflow-y: hidden;">
                    <div class="title1">
                        <div class="subtitle1">平台简介</div>
                        <div class="vertical-line"></div>
                    </div>
                    <div class="article">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam nemo, quas velit recusandae
                        fugit rem, ipsam quo, vero cupiditate dolorem expedita labore voluptate molestiae sint officiis!
                        Tenetur, aut delectus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit animi explicabo enim tenetur
                        repellendus, deleniti at molestiae! Eaque, deserunt quam, dolores voluptatum dicta modi aut ipsum
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae in cumque suscipit fuga animi
                        accusantium odio nostrum sed ipsa minus impedit vel ipsum, repellendus dolor, corrupti explicabo
                        totam! Fugit, quo!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus earum aperiam totam nulla
                        distinctio magnam quos vitae autem aut tenetur velit, consectetur, nihil natus. Amet, dolorem?
                        Molestias quae ab placeat.
                        quos expedita porro ducimus!
                    </div>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.card {
    width: 200px;
    height: 300px;
    text-align: center;

    .item :hover {
        background-color: #152f86;
        color: #fff;
    }
}

.title {
    margin-top: 30px;

    .subtitle {
        margin: 0 auto;
        font-size: 21px;
        color: rgb(23, 49, 142);
        font-weight: 600;
    }



}

.title1 {
    display: flex;

    .subtitle1 {
        position: relative;
        padding-right: 10px;
        font-size: 25px;
        font-weight: 600;
        color: rgb(21, 47, 134);

    }

    .vertical-line {
        border-left: 3px solid rgb(21, 47, 134);
        height: 30px;
    }
}

.article {
    text-indent: 2em;
    margin-top: 20px;
}

.circle1::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: rgb(23, 49, 142);
    margin-bottom: 1px;
    margin-left: 4px;

}

.circle2::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: rgb(23, 49, 142);
    margin-bottom: 3px;
    margin-left: 4px;

}

.circle3::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    margin-right: 5px;
    border-radius: 50%;
    background-color: rgb(23, 49, 142);
    margin-bottom: 4px;
    margin-left: 4px;

}
</style>
