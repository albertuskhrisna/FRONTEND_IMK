<template>
      <v-container>        
        <v-row>  
          <v-col cols="2">
          </v-col>
            <v-col cols="15">    
                <div>
                    <h1 class="text-capitalize">My Profile</h1>
                    <p class="text-capitalize"></p>
                    <router-link to = '/dashboard/profile/personal'>
                        <h3 class="text-capitalize"><a href="#" style="text-decoration: none">Personal Details</a></h3>
                    </router-link>
                    <p class="text-capitalize">Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. 
                        Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, 
                        quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, 
                        at nemore equidem est. Sed in error hendrerit, in consul constituam cum.</p>
                    <router-link to = '/dashboard/profile/access'>
                        <h3 class="text-capitalize"><a href="#" style="text-decoration: none">Access Details</a></h3>
                    </router-link>
                    <p class="text-capitalize">Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. 
                        Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, 
                        quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, 
                        at nemore equidem est. Sed in error hendrerit, in consul constituam cum..</p>
                    <router-link to = '/dashboard/profile/photo'>
                        <h3 class="text-capitalize">Edit Photo Profile</h3>
                    </router-link>
                    <p class="text-capitalize">Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. 
                        Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, 
                        quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, 
                        at nemore equidem est. Sed in error hendrerit, in consul constituam cum.</p>
                </div>             
            </v-col>           
        </v-row>
    </v-container>      
      <!-- <v-footer color="primary" width="100%">
          <v-card-text class="white--text pt-0">
            <v-row>
                <v-col cols="5"></v-col>
                <v-col cols="2" style="md-center">
                    <h2>Follow Us</h2>
                </v-col>
                <v-col cols="5"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2">
                    
                </v-col>
                <v-col cols="2">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: left; font-size: 20pt; font-weight: bold;
                            font-family:Varela Round; sans-serif;">Facebook</p>
                    </div>
                </v-col>
                <v-col cols="2">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: left; font-size: 20pt; font-weight: bold;
                            font-family:Varela Round; sans-serif;">Twitter</p>
                    </div>
                </v-col>
                <v-col cols="2">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: left; font-size: 20pt; font-weight: bold;
                            font-family:Varela Round; sans-serif;">Instagram</p>
                    </div>
                    
                </v-col>
                <v-col cols="2">
                <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: left; font-size: 20pt; font-weight: bold;
                            font-family:Varela Round; sans-serif;">Youtube</p>
                    </div>
                </v-col>
                <v-col cols="2">
                </v-col>
            </v-row>
          </v-card-text>
      </v-footer> -->
      <!-- <v-bottom-navigation v-model="bottomNav" dark>
        <v-btn value="recent">
          <span>&copy; Copyright by LiMiaCasa</span>
        </v-btn>
      </v-bottom-navigation> -->
      
    </template>
    
  </v-app>
</template>

<script>
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  data () {
    return {
      signIn: false,
      signUp: false,
      snackbar: false,          
      color: null,         
      text: '',
      load: false,
      errors: '',
     
     
    }
  },
  computed: {
    passwordType() {
      return this.hidePassword ? 'password' : 'text'
    },
    confirmPasswordType() {
      return this.hideConfirm ? 'password' : 'text'
    },
    passwordIcon() {
      return this.hidePassword ? 'mdi-eye' : 'mdi-eye-off'
    },
    confirmPasswordIcon(){
      return this.hideConfirm ? 'mdi-eye' : 'mdi-eye-off'
    }
  }
};
</script>
<style>
.bg {
    height: 100% !important; 
    background: url( '../../assets/home.jpg') no-repeat center center;
  }
</style>