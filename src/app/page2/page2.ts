import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
})
export default class Page2 extends Vue {
    name: string = "page2";
  mounted() {
  }
}
Vue.component('page2', Page2);