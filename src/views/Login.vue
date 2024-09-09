<template>
  <div class="login">
    <h1>Login</h1>
    <input v-model="username" placeholder="Username" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    login() {
      if (this.username.trim()) {
        this.$store.dispatch('login', { name: this.username });
        localStorage.setItem('user', JSON.stringify({ name: this.username }));
        this.$router.push('/chat');
      }
    },
  },
};
</script>

<style scoped>
/* Style the login form */
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
input {
  padding: 10px;
  margin-bottom: 20px;
  width: 200px;
}
button {
  padding: 10px 20px;
}
</style>
