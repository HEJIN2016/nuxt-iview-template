<template>
  <section class="container">
    <div>
      <Button type="primary">{{ a }} button</Button>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      a: 1
    }
  },
  async asyncData ({ params, req, error, redirect }) {
    // 服务端渲染
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve({a: 1});
      }, 100)
    })
  },
  created () {
    if (process.browser) {
      console.log(this.$Moment(new Date()).format("YYYY-MM-DD"))
    }
  },
  async mounted () {
    let a = ()=> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("123");
          resolve("1");
        })
      });
    };
    let result = await a();
  }
}
</script>

<style>
</style>
