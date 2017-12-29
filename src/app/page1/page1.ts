import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
})
export default class Page1 extends Vue {
    name: string = "page1";
  mounted() {
  }
}
Vue.component('page1', Page1);