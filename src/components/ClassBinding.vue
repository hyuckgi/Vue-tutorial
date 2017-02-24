<template lang="html">
    <div class="class">
        <!-- Syntax에서 했던 class binding을 다시 보자  -->

        <!-- isActive가 참이면 class명으로 active를 갖는다 -->
        <div :class="{active: isActive}"></div>

        <!-- 조건없는 class명도 당연히 갖을 수 있다 -->
        <div class="static" :class="{active: isActive, 'text-danger': hasError}"></div>
        <button type="button" @click="changeClass">changeClass</button>

        <!-- 객체를 사용할 수도 있다 -->
        <div class="static" :class="classObject"></div>
        <button type="button" @click="changeObj('active')">changeObj</button>

        <!-- 계산된 속성에도 바인딩 할 수 있다 -->
        <div class="static" :class="classObjBind"></div>

        <!-- 배열을 전달하여 클래스 목록을 지정할 수 있다. -->
        <div class="static"  :class="[activeClass, errorClass]"></div>

        <!-- 목록에 있는 클래스를 조건부 토글하려면 삼항 연산자를 이용 -->
        <div class="static" :class="[isActive ? activeClass : '', errorClass]"></div>

        <!-- 갯수가 많으면 삼항연산자가 많아진다. 그래서 배열안에서 객체를 사용 -->
        <div class="static" :class="[ {isActive : activeClass }, errorClass]"></div>
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
            },
            activeClass: 'active',
            errorClass: 'text-danger'
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
    margin-top:50px;
}
.active{
    background:red;
}
.text-danger{
    border:1px solid blue;
}

</style>
