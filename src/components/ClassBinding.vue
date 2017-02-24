<template lang="html">
    <div class="class">
        <!-- Syntax에서 했던 class binding을 다시 보자  -->

        <!-- isActive가 참이면 class명으로 active를 갖는다 -->
        <div :class="{active: isActive}"></div>

        <!-- 조건없는 class명도 당연히 갖을 수 있다 -->
        <div class="static" :class="{active: isActive, 'text-danger': hasError}"></div>
        <button type="button" @click="changeClass">changeClass</button>

        <!-- 객체를 사용할 수도 있 -->
        <div class="static" :class="classObject"></div>
        <button type="button" @click="changeObj('active')">changeObj</button>

        <!-- 계산된 속성에도 바인딩 할 수 있다 -->
        <div class="static" :class="classObjBind"></div>


    </div>
</template>

<script>
export default {
    name: 'ClassBinding',
    data(){
        return{
            title: 'class',
            isActive: true,
            hasError: false,
            classObject: {
                active: true,
                'text-danger': true
            },
            error: {
                type: 'fetal'
            }
        }
    },

    methods: {
        changeClass: function(){
            return this.hasError = !this.hasError;
        },
        changeObj: function(val){
            return this.classObject[val] = !this.classObject[val];
        }
    },
    computed: {
        classObjBind: function(){
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fetal'
            }
        }
    }
}
</script>

<style lang="css">
.static{
    height:200px;
}
.active{
    background:red;
}
.text-danger{
    border:1px solid blue;
}

</style>
