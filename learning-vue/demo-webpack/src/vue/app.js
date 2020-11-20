export default {
  template: `
    <div>
      <h3>{{message}}</h3>
      <button @click="buttonClick">按钮</button>
    </div>
  `,
  data() {
    return {
      message: 'hello Vue',
    }
  },
  methods: {
    buttonClick() {
      console.log("点击按钮")
    }
  }
}