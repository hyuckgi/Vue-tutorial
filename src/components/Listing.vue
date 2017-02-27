<template lang="html">
    <div class="listing">
        <!-- v-for 디렉티브 -->
        <ul>
            <li v-for="item in items">{{item.message}}</li>
        </ul>

        <!-- v-for 블록안에서 두번째 전달인자 옵션을 줄 수 있다.  -->
        <ul>
            <li v-for="(item, index) in items">
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul>

        <!-- in 대신에 of 를 구분자로 사용할 수 있다. -->
        <ul>
            <li v-for="item of items">{{item.message}}</li>
        </ul>

        <!-- template의 여러 엘리먼트 블럭을 렌더링할 수 있다. -->
        <ul>
            <template v-for="item in items">
                <li>{{ item.message }}</li>
                <li class="divider"></li>
            </template>
        </ul>

        <!-- index를 넣어서 -->
        <ul>
            <template v-for="(item, index) in items">
                <li>{{index}} : {{ item.message }}</li>
                <li class="divider"></li>
            </template>
        </ul>

        <!-- 객체의 속성을 반복할 수 있다 -->
        <ul id="repeat-object" class="demo">
            <li v-for="value in object">
                {{ value }}
            </li>
        </ul>

        <!-- 객체의 key를 두번째 인자로 전달할 수 있다. -->
        <ul id="repeat-object" class="demo">
            <li v-for="(value, key) in object">
                {{ key }} : {{ value }}
            </li>
        </ul>

        <!-- 또 index도 추가 할 수 있다. -->
        <ul id="repeat-object" class="demo">
            <li v-for="(value, key, index) in object">
                {{index}}. {{ key }} : {{ value }}
            </li>
        </ul>

        <!-- range를 사용할 수 있다. -->
        <div>
            <span v-for="n in 10">{{ n }}</span>
        </div>

        <!-- 컴포넌트와 v-for -->
        <!-- <myComponent
            v-for="(item, index) in items"
            v-bind:item = "item"
            v-bind:index = "index" >
        </myComponent> -->

        <!-- component에서는 데이터를 자동으로 전달하지 않는다 props로 전달 -->
        <div id="todo-list-example">
            <input
                v-model="newTodoText"
                v-on:keyup.enter="addNewTodo"
                placeholder="Add a todo">
            <ul>
                <li
                    is="todo-item"
                    v-for="(todo, index) in todos"
                    v-bind:title="todo"
                    v-on:remove="todos.splice(index, 1)" >
                </li>
            </ul>
        </div>


        <!-- v-for는 v-if보다 높은 우선순위를 가진다. v-if는 v-for의 각 루프마다 실행된다.
            일부항목만 노드를 렌더링 할때 유용하다 -->
        <li v-for="item in completes" v-if="!item.isComplete">
            {{ item.title }}
        </li>

        <!-- v-for의 실행을 조건부로 실행하는 것이라면 -->
        <ul v-if="shouldRenderComplete">
            <li v-for="item in completes">
                {{ item.title }}
            </li>
        </ul>

        <!-- v-for에서 key는 react의 key와 유사하다 -->

        <!--

            배열 변경 감지 : 원본배열을 변형

            레퍼런스 원문 그래로 옮김.
            Vue는 감시중인 배열의 변이 메소드를 래핑하여 뷰 갱신을 트리거합니다.
            래핑된 메소는 다음과 같습니다.

            push()
            pop()
            shift()
            unshift()
            splice()
            sort()
            reverse()


            배열 대체 : 새배열을 반환

            새배열을 반환한다고 해서 전체 목록을 다시 렌더링 하는게 아니다.
            배열을 겹치는 객체가 포함된 다른 배열로 대체하여 효율적이다.

            filter()
            concat()
            slice()


            배열의 변경사항을 감지할 수 없는 경우

            1.인덱스로 배열에 있는 항목을 직접 설정하는 경우
                vm.items[index] = newValue

            2.배열의 길이를 수정하는 경우
                vm.items.length = newLength

            1번의 해결방안
                Vue.set(example.items, index, newValue)
                or
                example.items.splice(index, 1, newValue)

            2번의 해결방안
                example.items.splice(newLength)
        -->


        <!-- 필터링 / 정렬 된 결과 표시하기 -->
        <li v-for="n in evenNumbers">{{ n }}</li>

        <!-- 또는 계산된 속성을 실행할 수 없는 메소드를 사용할 수 있다. -->
        <li v-for="n in even(numbers)">{{ n }}</li>


    </div>
</template>

<script>
import Vue from 'vue';

Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
    ',
    props: ['title']
});
export default {
    name: 'Listing',
    data(){
        return{
            parentMessage: 'Parent',
            items: [
                {message: 'Foo'},
                {message: 'Bar'}
            ],
            object: {
                firstName: ' John',
                lastName: 'Doe',
                age: 30
            },
            newTodoText: '',
            todos: [
                'Do the dishes',
                'Take out the trash',
                'Mow the lawn'
            ],
            shouldRenderComplete: true,
            completes: [
                {
                     title: 'Do the dishes',
                     isComplete: true
                },
                {
                     title: 'Take out the trash',
                     isComplete: false
                },
                {
                     title: 'Mow the lawn',
                     isComplete: true
                }
            ],
            numbers: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        addNewTodo: function(){
            this.todos.push(this.newTodoText)
            this.newTodoText = ''
        },
        even: function(){
            return this.numbers.filter(function(number){
                return number % 2 === 1
            })
        }

    },
    computed: {
        evenNumbers: function(){
            return this.numbers.filter(function(number){
                return number % 2 === 0
            })
        }
    }
}
</script>

<style lang="css" scoped>
.divider{
    list-style:none;
    border-top:1px solid black;
}
</style>
