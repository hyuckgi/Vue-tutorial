<template lang="html">
    <div class="class">
        <!-- 인라인스타일은 js객체이다. 속성이름은 camelCase와 kebab-case를 쓸 수 있다. -->
        <div :style="{backgroundColor:activeColor, fontSize:fontSize + 'px'}"></div>

        <!-- 직접바인딩하여 템플릿을 간결하게 하자 -->
        <div :style="styleObject"></div>

        <!-- 배열구문 사용가능 -->
        <div :style="[baseStyles, overidingStyles]"></div>

        <!-- auto prefix -->
        <div :style="[baseStyles, transformStyles]"></div>


    </div>
</template>

<script>
export default {
    name: 'StyleBinding',
    data(){
        return{
            activeColor: 'red',
            fontSize: 20,
            styleObject: {
                backgroundColor: 'blue',
                fontSize: '13px'
            },
            baseStyles: {
                backgroundColor: 'pink',
                border: '1px solid blue'
            },
            overidingStyles: {
                backgroundColor: 'black',
                border: '1px solid red'
            },
            transformStyles: {
                backgroundColor: 'red',
                transform: 'rotate(45deg)'
            }
        }
    },

    methods: {

    },
    computed: {

    }
}
</script>

<style lang="css" scoped>

div{
    width:200px;
    height:200px;
}
</style>
