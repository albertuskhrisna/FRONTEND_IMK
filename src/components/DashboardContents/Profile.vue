<template>
  <v-app>
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
      
    </template>
    
  </v-app>
</template>

<script>
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
