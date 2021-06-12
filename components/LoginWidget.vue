    <template>
  <div id="main">
    <div class="form">
      <label for="">Login</label>

      <input
        v-model="email"
        type="email"
        placeholder="Email"
        v-bind:class="{ error: hasError }"
      />

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        v-bind:class="{ error: hasError }"
      />

      <p v-bind:class="{ hide: !hasError }" class="errorText">
        {{ errorText }}
      </p>

      <button
        class="hoverable"
        v-bind:class="{ disable: running }"
        v-on:click="login()"
      >
        Login
      </button>
    </div>
  </div>
</template>

    <script>
export default {
  name: "LoginWidget",
  data: function () {
    return {
      email: "",
      password: "",
      hasError: false,
      errorText: "",
      running: false,
    };
  },
  methods: {
    login: function () {
      if (this.running) {
        return;
      }

      if (!validateEmail(this.email) || this.password == "") {
        this.setError("Invalid email or password");

        return;
      }

      this.setRunning(true);

      this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          // get user profile
          this.getUserInfor(response.data.token);
        })
        .catch((err) => {
          var error = "";

          if (!err.response) {
            if (err.message) {
              error = err.message;
            }
          } else {
            switch (err.response.status) {
              case 404:
                error = "Internal error has occured";
                break;
              case 401:
                error = "Check your email/password";
                break;
              case 417:
                error = "Authentication failed";
                break;
            }
          }

          this.setError(error);
        });
    },
    getUserInfor: function (token) {
      this.$axios.setToken(token, "Bearer");

      // get user profile
      this.$axios.$get("/users/profile").then((response) => {
        this.$auth.setUser(response);

        this.$auth.setUserToken(token).then(() => {
          this.setRunning(false);
          this.$router.push("/ProjectsView");
        });
      });
    },
    setRunning: function (running) {
      this.running = running;
      if (running) {
        this.hasError = false;
        this.$notification.show({
          text: "Logging...",
        });
      } else {
        this.$notification.hide();
      }
    },
    setError: function (text) {
      this.errorText = text;
      this.hasError = true;
      this.setRunning(false);
    },
  },
};

const validateEmail = (param_text) => {
  var reg1 = /^(^\D)([a-zA-Z0-9]+)(@{1})([a-zA-Z]+)(.com{1})$/;
  return reg1.test(param_text);
};
</script>
   
    <style scoped>
#main {
  background-color: white;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hide {
  display: none;
}
.form {
  background-color: white;
  border-radius: 8px;

  width: 450px;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  align-items: stretch;

  overflow-x: hidden;
  padding: 24px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}

input,
label,
button,
.errorText {
  margin-left: 24px;
  margin-right: 24px;
}

input {
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 16px;
  border-radius: 4px;
  border: solid 1.1px rgba(0, 0, 0, 0.12);
}

label {
  margin: 16px 24px;
  font-size: 2rem;
  font-weight: 500;
  color: #04152b;
}
button {
  height: 36px;
  padding: 8px 8px;
  margin-top: 32px;
  margin-bottom: 24px;
  border-radius: 4px;
  background-color: #03162f;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
.btn-reset-password {
  color: #03162f;
  background-color: white;
  margin-top: 0px;
  margin-bottom: 12px;
}
</style>
