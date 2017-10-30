import Vue from 'vue';
import Component from 'vue-class-component';
@Component({})
export default class App extends Vue {
  propMessage: string = 'VueJS';
  // inital data
  msg: number = 123;
  // use prop values for initial data
  helloMsg: string = 'Hello, ' + this.propMessage;
  // lifecycle hook
  mounted():void {
  }
  // method
  greet():void {
    this.helloMsg = 'nice you have change the text XD';
  }
}
