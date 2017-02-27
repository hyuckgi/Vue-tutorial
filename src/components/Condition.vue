<template lang="html">
    <div class="condition">
        <!-- v-if 디렉티브 -->
        <h1 v-if="ok">Yes</h1>
        <!-- v-else도 있다 -->
        <h1 v-else>No</h1>

        <!-- 하나 이상의 엘리먼트를 전환하려면 보이지않는 wrapper를 감싼다 -->
        <template v-if="ok">
            <h1>title1</h1>
            <p>paragraph111</p>
            <p>paragraph111</p>
        </template>
        <template v-else>
            <h1>title2</h1>
            <p>paragraph222</p>
            <p>paragraph222</p>
        </template>

        <!-- v-if에 표현식도 가능하다 -->
        <h1 v-if="Math.random() > 0.5">Yes</h1>
        <h1 v-else>no</h1>
        <!-- v-else는 v-if, v-else-if 바로 뒤에 있어야 한다. -->

        <!-- v-else-if 2.1.0에서 추가됨 -->
        <h1 v-if="type === 'A'">A</h1>
        <h1 v-else-if="type === 'B'">B</h1>
        <h1 v-else>Not A/B</h1>

        <!-- key를 이용한 재사용 가능한 엘리먼트 제어 -->
        <template v-if="loginType === 'username'">
            <label>사용자이름</label>
            <input type="text" placeholder="사용자 이름을 입력하세요">
        </template>
        <template v-else>
            <label>이메일</label>
            <input type="text" placeholder="이메일 주소를 입력하세요">
        </template>
        <button type="button" name="button" @click="changeForm">로그인 타입변경</button>
        <!-- 랜더링을 처음부터 하지 않기 때문에 사용자가 입력한 내용이 지워지지 않고 대체된다. -->
        <br>
        <!-- 그러나 이것은 안티패턴임. key속성을 추가해서 다시 랜더링해야함 -->
        <template v-if="loginType === 'username'">
            <label>사용자이름2</label>
            <input type="text" placeholder="사용자 이름을 입력하세요" key="username-input">
        </template>
        <template v-else>
            <label>이메일2</label>
            <input type="text" placeholder="이메일 주소를 입력하세요" key="email-input">
        </template>
        <button type="button" name="button" @click="changeForm">로그인 타입변경2 key추가</button>

        <!-- v-show : 엘리먼트 조건부표시를 위한 또 다른 옵션 -->
        <h1 v-show="ok">vShow</h1>
        <!-- v-if는 파싱되지 않지만 v-show는 엘리먼트가 파싱되고 css속성이 display:none 이 된다  -->

        <!--
            정리

            v-if 와 v-show는 비슷하지만 v-if는 엘리먼트가 적절하게 제거되고 다시 만들어지기 때문에
            "진짜" 조건부 렌더링이다.

            v-if는 게으르기때문에 초기 렌더링 조건이 거짓이면 참이 될때까지 렌더링되지 않는다.
            v-if는 토글비용이 놉아 런타임시 조건이 바뀌지 않을 때 쓰고,
            v-show는 초기 렌더링비용이 높아 자주 바꾸기를 원할 때 쓰자 

        -->

    </div>
</template>

<script>
export default {
    name: 'Condition',
    data(){
        return{
            ok: false,
            type: 'A',
            loginType: 'username'
        }
    },
    methods: {
        changeForm: function() {
            if(this.loginType === 'username'){
                this.loginType = 'email';
            }else{
                this.loginType = 'username';
            }
        }


    },
    computed: {

    }
}
</script>

<style lang="css" scoped>
</style>
