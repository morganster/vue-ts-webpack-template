import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: {
    propMessage: String
  }
})
export default class Home extends Vue {
    name: string = "home";
  mounted() {
  }
}
Vue.component('home', Home);