export default {
    template: `
<div>
        <table id="list">
            <thead>
            <th >순위</th>
                            <th>영화 제목</th>
                            <th>누적 관객수</th>
                            <th>개봉 날짜</th>
                            <th></th>
            </thead>
            <tbody>
            <tr v-for="item in object" v-bind:key="item.movieCd">
            <td>
            {{item.rank}}
            </td>
            <router-link tag="td" v-bind:to="{ name : 'movieDetail', params : {'movieCd' : item.movieCd}}">
            {{item.movieNm}}</router-link>
            <td>
            {{item.audiAcc}} 명
            </td>
            <td>
            {{item.openDt}}
            </td>
       
            <td><button v-on:click="movieDelete(item.movieCd)">삭제</button></td>
          
            </tr>
            </tbody>
        </table>

</div>`,
data : function(){
    return {
        object : []
    }
},
created : function(){
    this.object = this.$parent.getParentData();
},
methods : {
    movieDelete : function(movieCode){
        this.object = this.object.filter(function(item){
            return (item.movieCd != movieCode)
        }, this);

        this.$parent.setParentData(this.object)
    }
}
}