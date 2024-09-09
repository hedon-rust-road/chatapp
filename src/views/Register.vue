<template>
  <div class="register">
    <h1>Create Your Account</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" id="fullName" v-model="fullName" placeholder="Full Name" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" placeholder="Email" required />
      </div>

      <div class="form-group">
        <label for="workspaceName">Workspace Name</label>
        <input type="text" id="workspaceName" v-model="workspaceName" placeholder="Workspace Name" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" placeholder="Password" required />
      </div>

      <button type="submit">Register</button>
    </form>

    <p class="login-link">
      Already have an account? <router-link to="/login">Login here</router-link>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      workspaceName: '',
      password: '',
    };
  },
  methods: {
    register() {
      // Perform registration logic here, e.g., API call
      const userData = {
        fullName: this.fullName,
        email: this.email,
        workspaceName: this.workspaceName,
        password: this.password,
      };

      // For demonstration, we're just logging the data.
      console.log('User Data:', userData);

      // You might want to save the user data to a backend or Vuex store here.
      // After successful registration, redirect to the chat page or login page.
      this.$router.push('/chat'); // or '/login' if you want to direct to login after registration.
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}

.login-link {
  text-align: center;
  margin-top: 20px;
}
</style>
