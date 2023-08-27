<template>
  <div>
    <div class="mx-5">
      <h1 class="text-success">{{ this.$store.state.name }}</h1>
      <div class="form-group">
        <!-- Email Address -->
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <!-- Password -->
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <!-- <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div> -->
      <button
        type="submit"
        class="btn btn-sm btn-success mt-3"
        @click="LogInData()"
      >
        Submit
      </button>
      <div class="container mt-4">
        <button
          class="btn btn-sm btn-danger"
          id="logoutButton"
          @click="logOut()"
        >
          Log Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      user: {
        email: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    LogInData() {
      if (this.user.email !== undefined && this.user.password !== undefined) {
        // const userJSON = JSON.stringify(this.user);
        // localStorage.setItem("logInData", userJSON);
        const isLoggedIn = true;
        localStorage.setItem("logInTrue", JSON.stringify(isLoggedIn));
      } else {
        alert("Fill Password and Email");
      }
    },
    logOut() {
      const isloggedOut = false;
      localStorage.setItem("logInTrue", JSON.stringify(isloggedOut));
    },
  },
};
</script>

<style lang="scss" scoped></style>
