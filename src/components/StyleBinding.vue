<template lang="html">
    <div class="class">
        <!-- 인라인스타일은 js객체이다. 속성이름은 camelCase와 kebab-case를 쓸 수 있다. -->
        <div :style="{backgroundColor:activeColor, fontSize:fontSize + 'px'}"></div>

        <!-- 직접바인딩하여 템플릿을 간결하게 하자 -->
        <div stlye="styleObject"></div>

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
