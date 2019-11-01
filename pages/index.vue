<template>
  <section id="login">
    <div class="login container">
      <div class="row login-row">
        <!-- <div class="col backgroundcolor hidden-md hidden-xs hidden-sm">
          <div class="login-texts flex justify-center flex-column">
            <img src="logo_side.png" style="object-fit:contain">
          </div>
        </div> -->
        <div class="col login-col">
          <div class="login-texts flex flex-column">
            <h2 class="white-text">Login</h2>
            <p class="white-text">Welcome Back, Please login to your account</p>

            <div class="form-group">
              <label class="control-label">
                Email
                <span class="symbol required"></span>
              </label>
              <span class="input-icon">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  maxlength="50"
                  placeholder="Email"
                  ng-model="email"
                >
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <div
              class="form-group"
              ng-class="{'has-error':Form.password.$dirty && Form.password.$invalid, 'has-success':Form.password.$valid}"
            >
              <label class="control-label">
                Password
                <span class="symbol required"></span>
              </label>
              <span class="input-icon">
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  maxlength="25"
                  placeholder="Password"
                  ng-model="password"
                >
                <i class="fa fa-lock"></i>
                <p class="white-text">Forgot Password</p>
              </span>
            </div>

            <div class="row">
              <div class="col-xs-6">
                <!-- <button
                  type="submit"
                  class="btn white-text loginButton"
                  style="border: 1px solid grey"
                >Join</button> -->
              </div>

              <div class="col-xs-6 right">
                <button
                  @click="login"
                  type="submit"
                  class="btn btn-my-blue white-text loginButton"
                >Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>





<script>
import axios from 'axios'
axios.defaults.withCredentials = true

export default {
  name: 'login',
  data() {
    return {
      jokes: [],
      loading: false
    }
  },
  methods: {
    login: function() {

        this.$vs.loading()

      var bodyFormData = new FormData()

      bodyFormData.append('email', document.getElementById('email').value)
      bodyFormData.append('password', document.getElementById('password').value)

      axios({
        method: 'POST',
        url: this.$store.state.api.login,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: bodyFormData
      })
        .then(res => {
        //   console.log('res', res.data.data.token)
        //   console.log('response')
        //   this.$vs.notify({title:'Success',text:'Login Successfully',color:'success', time: 5000})
        //   this.$cookies.set("access_token", res.data.data.token, {
            
        //   path: "/",
        //   // httpOnly : true,
        //   // secure: true,
        //   maxAge: 60 * 60 * 24 * 7
        // });
        //   this.$cookies.set("user_id", res.data.data.id, {
            
        //   path: "/",
        //   // httpOnly : true,
        //   // secure: true,
        //   maxAge: 60 * 60 * 24 * 7
        // });

      
        // localStorage.setItem('currentUserEmail', document.getElementById('email').value)
        // localStorage.setItem('currentUserName', res.data.user.name)
        // localStorage.setItem('currentUserID', res.data.user.id)



        //   // this.$router.push('gateway')
        //   this.$vs.loading.close()
        //   // this.$store.dispatch('saveCurrentLoggedInUser', res)
          // this.jokes = res
          this.$router.push('/dashboard/classes')
        })
        .catch(err => {
          console.log('error in request1', err.response.data.message)
          this.$vs.loading.close()
          this.$vs.notify({title:'Login Failed',text:err.response.data.message,color:'danger', time: 5000})
         
        })
    }
  }
}
</script>






<style scoped>
#login {
  background-image: url('~static/login_bg.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.login-row {
  height: 390px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 15%;
  max-width: 450px;
  box-shadow: 1px 4px 19px 7px rgba(0, 0, 0, 0.18);
}

.loginButton {
  width: 100px;
}

.backgroundcolor {
  background-color: white;
  border-radius: 5px 0 0 5px;
}

.control-label {
  color: white;
}

.login-texts {
  height: 100%;
  padding: 0 5px;
}

.login-col {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  border-radius: 5px;
  background-color: #0d164b;
}

.underline {
  line-height: 1;
  position: relative;
  display: block;
  margin: 1em 0;
  font-weight: bold;
  line-height: 1.4;
  padding-bottom: 10px;
}

.underline::before {
  background-color: white;
  content: '';
  position: absolute;
  z-index: 1;
  color: red;
  bottom: 0;
  left: 0;
  width: 35%;
  height: 5px;
  opacity: 1;
  border-radius: 10px;
}


@media screen and (min-width: 1199px) {
  .login-row{
    margin: auto;
  }
}


</style>
