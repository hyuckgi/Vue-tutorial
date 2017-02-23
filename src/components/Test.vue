<template>
    <div class="test">
        <!-- html을 render할때 -->
        <!-- <span v-html="title"></span> -->
        <h1>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text="user.lastName"></p>

        <!-- 조건문 -->
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Nobody</p>

        <!-- v-bind : attribute -->
        <img v-bind:src="feelsgood" >
        <img v-bind:src="feelsbad" >
        <!-- 축약 -->
        <!-- <img :src="feelsbad" > -->

        <!-- v-bind와 조건문을 동시에 쓸 수 있다. -->
        <img :src="smile? feelsgood : feelsbad" alt="">

        <!-- for문 -->
        <ul>
            <li v-for="item in items">{{item.text}}</li>
        </ul>
        <br>


        <!-- v-model 양방향 디렉티브(form에서 사용) -->
        <input type="text" v-model="title">
        <br>


        <!-- v-on method에 추가 -->
        <button type="button" v-on:click="greet">Say Greeting</button>
        <!-- parameter 전달 가능 -->
        <br>
        <button type="button" v-on:click="yourGreet('hello world')">Your Greeting</button>
        <br>
        <!-- event.target.value && submit -->
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <!-- 축약 -->
        <!-- <button type="button" @click="greet">Say Greeting</button> -->
        <br>
        <label>First Name : </label><input type="text" v-model="user.firstName">
        <br>
        <label>Last Name : </label><input type="text" v-model="user.lastName">
        <h3>{{fullName}}</h3>
        <h4>{{msg}}</h4>
    </div>
</template>


<script>
    export default {
        name: 'Test',
        props: {
            msg: {
                type: String,
                default: "hello"
            }
        },
        data() {
            return {
                title: 'hello world',
                user: {
                    firstName: 'Hyuckgi',
                    lastName: "Kwon"
                },
                showName: true,
                items: [
                    {text: 'Item One'},
                    {text: 'Item Two'},
                    {text: 'Item Three'}
                ],
                feelsgood: 'https://imgh.us/feelsgood_1.jpg',
                feelsbad: 'https://imgh.us/feelsbad.jpg',
                smile: true
            }
        },
        methods:{
            greet: function(){
                alert("hello");
            },
            yourGreet: function(arg){
                alert(arg);
            },
            pressKey: function(e){
                console.log(e.target.value);
            },
            enterHit: function() {
                console.log("hit enter");
            }
        },
        computed: {
            fullName: function(){
                return this.user.firstName+ ' ' + this.user.lastName;
            }
        }

    }
</script>

<!-- 해당 template만 style적용할 때 scoped 속성주입  -->
<style scoped>
    .test{
        color:blue;
    }
</style>
