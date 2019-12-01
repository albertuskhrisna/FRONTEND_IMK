<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>

      <div class="d-flex align-center">
        <v-row>
          <v-col>
            <h1>LaMiaCasa</h1>
          </v-col>
          <v-col>
            
          </v-col>
        </v-row>
        <v-row>
          <h5>Propertio Per Ogni Esigenza</h5>
        </v-row>
      </div>

      <v-spacer></v-spacer>

      
      <v-toolbar-items>
        <v-btn text @click="home()">Home</v-btn>
        <v-btn text @click="about()">About</v-btn>
        <v-btn text @click="contact()">Contact Us</v-btn>
        <v-btn text @click="gallery()">Gallery</v-btn>
        <v-btn text @click="signIn = true">Log In</v-btn>
        <v-btn text @click="signUp = true">Sign Up</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view/>
      <v-carousel
        cycle
        height="800"
        hide-delimiter-background
        show-arrows-on-hover
        v-if="carusel">
      <v-carousel-item
        v-for="(item, i) in items"
        :src="item.src"
        :key="i">
        
        <v-row
          class="fill-height"
          align="center"
          justify="center">
        
        </v-row>
    </v-carousel-item>
  </v-carousel>
    </v-content>

    <template>
      <v-dialog v-model="signIn" persistent max-width="600px">       
          <v-card>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="resetForm()">
                  <v-icon>fas fa-window-close</v-icon>
                </v-btn>
              </v-card-actions>  
              <v-list>
                <v-list-item-content>
                  <v-list-item-title>
                    <h1 class="text-center">LOG IN</h1>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list>      
              <v-divider></v-divider>
              <v-card-text>
                  <v-container>             
                      <v-row>               
                          <v-col cols="12">                 
                              <v-text-field 
                                label="Username*" 
                                v-model="formSignIn.username" 
                                required
                                filled
                                rounded
                                prepend-inner-icon="fas fa-user"></v-text-field>               
                          </v-col>                         
                          <v-col cols="12">                 
                              <v-text-field 
                                label="Password*" 
                                v-model="formSignIn.password" 
                                filled
                                rounded
                                dense
                                required
                                prepend-inner-icon="mdi-shield-lock"
                                :append-icon="passwordIcon"
                                :type="passwordType"
                                @click:append="hidePassword = !hidePassword"></v-text-field>               
                          </v-col>             
                      </v-row>
                  </v-container>           
                  <small>*indicates required field</small>          
              </v-card-text>
              <div class="text-center">
                <v-btn color="primary" rounded text @click="userLogin()"><h2>Login</h2></v-btn>
              </div>
              <div class="text-center">
                <br>
              </div>
              <v-divider></v-divider>
              <div class="text-center">
                <br>
                <h4><a href="#" style="text-decoration: none">Forgot Password ?</a></h4>
              </div> 
              <div class="text-center">
                <br>
              </div>
            </v-card>
        </v-dialog>
        <v-dialog v-model="signUp" persistent max-width="600px">       
          <v-card>         
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="resetFormSignUp()">
                  <v-icon>fas fa-window-close</v-icon>
                </v-btn>
              </v-card-actions> 
              <v-list>
                <v-list-item-content>
                  <v-list-item-title>
                    <h1 class="text-center">SIGN UP</h1>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list>      
              <v-divider></v-divider>        
              <v-card-text>           
                  <v-container>             
                      <v-row>  
                          <v-col cols="12">             
                              <v-text-field 
                                label="Email*" 
                                v-model="formSignUp.email"
                                :rules="[() => !!formSignUp.email || 'This field is required']" 
                                required
                                filled
                                rounded
                                prepend-inner-icon="fas fa-envelope"></v-text-field>               
                          </v-col>              
                          <v-col cols="12">            
                              <v-text-field 
                                label="Username*" 
                                v-model="formSignUp.username" 
                                :rules="[() => !!formSignUp.username || 'This field is required']" 
                                required
                                filled
                                rounded
                                prepend-inner-icon="fas fa-user"></v-text-field>               
                          </v-col>                         
                          <v-col cols="12">                 
                              <v-text-field 
                                label="Password*" 
                                v-model="formSignUp.password" 
                                :rules="[() => !!formSignUp.password || 'This field is required']" 
                                filled
                                rounded
                                dense
                                required
                                prepend-inner-icon="mdi-shield-lock"
                                :append-icon="passwordIcon"
                                :type="passwordType"
                                @click:append="hidePassword = !hidePassword"></v-text-field>               
                          </v-col> 
                          <v-col cols="12">                 
                              <v-text-field 
                                label="Confirm Password*" 
                                v-model="confirmPassword" 
                                :rules="[() => !!confirmPassword || 'This field is required']" 
                                filled
                                rounded
                                dense
                                required
                                prepend-inner-icon="mdi-shield-lock"
                                :append-icon="confirmPasswordIcon"
                                :type="confirmPasswordType"
                                @click:append="hideConfirm = !hideConfirm"></v-text-field>               
                          </v-col>           
                      </v-row>
                  </v-container>           
                  <small>*indicates required field</small> 
              </v-card-text>         
              <div class="text-center">
                <v-btn color="primary" rounded text @click="userSignUp()"><h2>Sign Up</h2></v-btn>
              </div>
              <div class="text-center">
                <br>
              </div>
            </v-card>
        </v-dialog>      
        <v-snackbar       
            v-model="snackbar"
            :color="color"       
            :multi-line="true"       
            :timeout="3000">       
            {{ text }}       
                
            <v-btn         
                dark         
                text         
                @click="snackbar = false">
                Close       
            </v-btn>     
        </v-snackbar>  
    </template>
    <v-footer color="primary">
          <v-card-text class="white--text pt-0">
            <v-row>
              <v-col cols="2">
                <v-img src ="../assets/aboutus.png" class="rounded-circle" style="
                    width: 200px; 
                    height: 200px;"></v-img>
              </v-col>
              <v-col cols="3">
                  <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                    <p style="text-align: left; font-size: 20pt; font-weight: bold;
                        font-family:Varela Round; sans-serif;">ABOUT US</p>
                    <p style="text-align: left">Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. 
                        Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, 
                        quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, 
                        at nemore equidem est. Sed in error hendrerit, in consul constituam cum.
                    </p>
                </div>
              </v-col>
              <v-col cols="2">
              </v-col>
              <v-col cols="3">
                  <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                    <p style="text-align: left; font-size: 20pt; font-weight: bold;
                        font-family:Varela Round; sans-serif;">CONTACT US</p>
                    <p style="text-align: left">
                        <v-icon color="white">{{facebook}}</v-icon>   lamia.casa
                        <br/>
                        <v-icon color="white">{{instagram}}</v-icon>   @lamia_casa
                        <br/>
                        <v-icon color="white">{{twitter}}</v-icon>   @lamia_casa
                        <br/>
                        <v-icon color="white">{{email}}</v-icon>   lamiacasa@gmail.com
                    </p>
                </div>
              </v-col>
            <v-col cols="2">
                <v-img src ="../assets/contactus.png" class="rounded-circle" style="
                    width: 200px; 
                    height: 200px;"></v-img>
            </v-col>
            </v-row>
          </v-card-text>
      </v-footer>
      <v-bottom-navigation dark>
        <v-btn value="recent">
          <span>&copy; Copyright IMK ANTI NGULANG CLUB</span>
        </v-btn>
      </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mdiFacebookBox } from '@mdi/js'; 
import { mdiInstagram  } from '@mdi/js';
import { mdiTwitterBox  } from '@mdi/js';
import { mdiEmail  } from '@mdi/js';

export default {
  data () {
    return {
      signIn: false,
      signUp: false,
      snackbar: false,          
      color: null,         
      text: '',
      carusel:true,
      load: false,
      errors: '',
      facebook: mdiFacebookBox,
      instagram: mdiInstagram,
      twitter: mdiTwitterBox,
      email: mdiEmail,
      formSignIn: {
        username: '',
        password: '',
      },
      formSignUp: {
        email: '',
        username: '',
        password: '',
        user_type: '',
      },
      confirmPassword: '',
      user: new FormData,
      hidePassword: true,
      hideConfirm: true,
      items: [
        {
          src: 'https://www.odeon.mc/thmbwt/fixe/1920/1080/6KNt1NwcOK15XTJHjIqj5KnNe_PLS_Ko1vHxG_SLH_XXzmcjviNshwLOD_SLH_bjqpk7kmQHMnModHbjEqxd4ek_EQS_.jpg'
        },
        {
          src: 'https://construccionesprisma.com.co/images/apartment_photos/22_41_pradoalto97.5m202.jpg'
        },
        {
          src: 'https://www.realista.com/wp-content/uploads/2018/07/Aqualina-apartments-and-penthouses-Benahavis-for-sale-new-development-off-plan_Realista-Quality-Property-Marbella-7.jpg'
        },
        {
          src: 'https://s1.1zoom.me/b5050/136/349972-admin_1920x1080.jpg'
        },
        {
          src: 'http://cardiogenix.com/wp-content/uploads/2016/04/hotel-bed-rooms-contemporary-design-9-on-bed-design-ideas.jpg'
        },
      ],
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
  },
  methods: {
    userLogin(){                        
      if(this.formSignIn.username == "andrebemantoro"){
        this.snackbar = true;                
        this.color = 'success'; 
        this.text = "Login Success !"
        this.load = false;               
        this.formSignIn = false
        this.$router.push({name: "Market"})
      }else{
        this.snackbar = true;                
        this.color = 'error'; 
        this.text = "Login Failed !"
        this.load = false;               
        this.formSignIn = false
      }
    },
    userSignUp(){
      if(this.formSignUp.email == "andrebemantoro@gmail.com"){
        this.snackbar = true;                
        this.color = 'success'; 
        this.text = "Registration Success !"
        this.load = false;               
        this.formSignUp = false
        this.$router.push({name: "Homepage"})
      }else{
        this.snackbar = true;                
        this.color = 'error'; 
        this.text = "Registration Failed !"
        this.load = false;
      }   
    },
    about(){
       this.carusel=false
       this.$router.push('/about')
    },
    contact(){
       this.carusel=false
       this.$router.push('/contact')
    },
    gallery(){
       this.carusel=false
       this.$router.push('/gallery')
    },
    home(){
       this.carusel=true
       this.$router.push('/')
    },
    resetForm(){
      this.formSignIn.username = '',
      this.formSignIn.password = '',
      this.signIn = false;
    },
    resetFormSignUp(){
      this.formSignUp.email = '',
      this.formSignUp.username = '',
      this.formSignUp.password = '',
      this.confirmPassword = '',
      this.signUp = false;
    }
  }
};
</script>
