// 단일 파일 컴포넌트
import myHeader from './components/header.js'
// import myBoardList from './components/myBoardList.js'
// import myBoardWrite from './components/myBoardWrite.js'
// import myBoardRead from './components/myBoardRead.js'
//router로 옮겨서 사용
import router from './router/router.js'

let template = `
<div>
    <my-header v-bind:parentData.sync="this.$data"></my-header>
    <router-view></router-view>
</div>`

    new Vue({
        el: '#app',
        template : template,
        data: {
          dataArray: {},     // 파일에서 읽은 데이터
        },
        components: {
          //공통으로 사용할 기능을 headerComponent로 이동
          'my-header' : myHeader
        },
        methods: {
          //data를 주고 받을 수 있도록 데이터 관련 함수
          getParentData : function(){
            return this.dataArray['board']
          },
          setParentData : function(dataList){
            this.dataArray['board'] = dataList
          }
        },
        router
      })