<template lang="html">
    <div id="Compute">
        <!-- 머쉬태쉬 안에서 표현식을 사용할 수 있다. but 유지보수가 어려워 질 수 있다 -->
        <p>원본메시지 : "{{message}}"</p>
        <p>뒤집히도록 계산된 메시지(computed) : "{{ reversedMessage }}"</p>
        <!-- 계산된 속성은 종속성을 캐시한다. 계산에 필요한 애들이 변경되었을때만 다시 계산한다.  -->

        <!-- now는 종속대상이 없기 때문에 변경되지 않는다. -->
        <p>{{now}}</p>

        <!-- 계산된 속성은 watch callback보다 계산된 속성을 사용하는 것이 좋다 -->

        <!-- 안티패턴
            export default {
            name: 'Compute',
            data(){
                return{
                    message: '안녕하세요',
                    methodMessage: '안녕하세요',
                    firstName: 'Hyuckgi',
                    lastName: 'Kwon',
                    fullName: 'Hyuckgi Kwon'
                }
            },
            watch: function(){
                firstName: function(val){
                    this.fullName = val + ' ' + this.lastName;
                },
                lastName: function(val){
                    this.fullName = this.firstName + ' ' + val
                }
            }
        } -->

        <!-- 추천 -->
        <p>{{fullName}}</p>
        <!-- 안티패턴은 fullName을 얻기위해 계속 계산해야된다.  -->

        <!-- methods로도 쓸수 있지만 파싱될때마다 실행될 것이다 -->
        <p>뒤집히도록 계산된 메시지(methods) : "{{ reversedMessageMethod() }}"</p>

        <!-- 데이터 변경에 반응하는 방법 : watch -->
        <p>
            yes/no ?
            <input type="text" v-model="question">
        </p>
        <p>{{answer}}</p>

    </div>
</template>

<script>
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as lodash from 'lodash';

export default {
    name: 'Compute',
    data(){
        return{
            message: '안녕하세요',
            methodMessage: '안녕하세요',
            firstName: 'Hyuckgi',
            lastName: 'Kwon',
            question: '',
            answer: '질문을 하기 전까지는 대답할 수 없습니다.'
        }
    },
    watch: {
        question: function(newQuestion){
            this.answer = '입력을 기다리는 중...';
            this.getAnswer();
        }
    },
    methods: {
        reversedMessageMethod: function(){
            return this.methodMessage.split('').reverse().join('');
        },
        getAnswer: _.debounce(
            function(){
                this.answer = '생각중...';
                var vm = this;
                axios.get('https://yesno.wtf/api')
                    .then(function(response){
                        vm.answer = _.capitalize(response.data.answer);
                    })
                    .catch(function(error){
                        vm.answer = 'request API error' + error;
                    })
            },
            500
        )
    },
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('');
        },
        now: function(){
            return Date.now();
        },
        fullName: function(){
            return this.firstName + " " + this.lastName;
        }
    }
}
</script>

<style lang="css">
</style>
