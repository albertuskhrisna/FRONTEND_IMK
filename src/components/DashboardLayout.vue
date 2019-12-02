<template>
        <v-app>
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            fixed
            temporary
            width="17%"
            color="primary">
            
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        LaMiaCasa
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        Propertio Per Ogni Esigenza
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    @click="$router.push(item.to)">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    
                    <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn @click="userlogout()" block>Logout</v-btn>
                </div>
            </template>
        </v-navigation-drawer>

        <v-app-bar                         
             app          
             fixed             
             clipped-left             
             height="70px"             
             color="primary">             
             <v-app-bar-nav-icon @click.stop="drawer= !drawer"></v-app-bar-nav-icon>

              <VSpacer /> 
              <v-toolbar-title                 
                style="font-size: 21px;"                 
                class="white--text mr-12">
                <v-btn height="100%" color="primary" @click="profile()">
                    <v-avatar color="red">
                        ab
                    </v-avatar>
                        andrebemantoro
                </v-btn>
              </v-toolbar-title> 
        </v-app-bar> 

        <VContent>             
            <router-view />         
        </VContent>
        <v-footer color="primary" width="100%">
          <v-card-text class="white--text pt-0">
            <v-row>
                <v-col cols="5"></v-col>
                <v-col cols="2" class="text-center">
                    <h2>Follow Us</h2>
                </v-col>
                <v-col cols="5"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2">
                    
                </v-col>
                <v-col cols="2">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: left; font-size: 18pt; font-weight: bold;">
                          Facebook
                        </p>
                        <p style="text-align: left; font-size: 14pt; font-weight: bold;">
                          <v-icon color="white">{{facebook}}</v-icon>   lamia.casa
                        </p>
                    </div>
                </v-col>
                <v-col cols="2">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: left; font-size: 18pt; font-weight: bold;">Instagram</p>
                        <p style="text-align: left; font-size: 14pt; font-weight: bold;">
                          <v-icon color="white">{{instagram}}</v-icon>   @lamia_casa
                        </p>
                    </div>
                </v-col>
                <v-col cols="2">
                    <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                        <p style="text-align: right; font-size: 18pt; font-weight: bold;">Twitter</p>
                        <p style="text-align: right; font-size: 14pt; font-weight: bold;">
                          @lamia_casa   <v-icon color="white">{{twitter}}</v-icon>
                        </p>
                    </div>
                    
                </v-col>
                <v-col cols="2">
                  <div style="display: flex; flex-direction: column; width: 100%; margin-left: 5%;">
                      <p style="text-align: right; font-size: 18pt; font-weight: bold;">Youtube</p>
                      <p style="text-align: right; font-size: 14pt; font-weight: bold;">
                        lamiacasa   <v-icon color="white">{{youtube}}</v-icon>
                      </p>
                  </div>
                </v-col>
                <v-col cols="2">
                </v-col>
            </v-row>
          </v-card-text>
      </v-footer>
      <v-bottom-navigation v-model="bottomNav" dark>
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
import { mdiYoutube  } from '@mdi/js';
    export default {     
        data () {       
            return {         
                drawer: null,         
                items: [           
                    { title: 'MARKET', icon: 'fas fa-shopping-cart', to: '/dashboard/market' },
                    { title: 'FAVORITES', icon: 'fas fa-star', to:'/dashboard/favorites' },
                    { title: 'APARTMENT AND PENTHOUSE', icon: 'fas fa-building', to:'/dashboard/apartment' },
                    { title: 'OFFICE AND BUILDING', icon: 'fas fa-university', to:'/dashboard/office' },
                    { title: 'HOUSING', icon: 'fas fa-home', to:'/dashboard/housing' },
                ], 
                
                facebook: mdiFacebookBox,
                instagram: mdiInstagram,
                twitter: mdiTwitterBox,
                youtube: mdiYoutube,   
            }     
        },
        methods: {
            userlogout(){
                this.$router.push('/')
            },
            profile(){
                this.$router.push('/dashboard/profile')
            }
        }
    } 
</script>
<style>
.bg {
    height: 100% !important; 
    background: url( '../assets/home.jpg') no-repeat center center;
  }
</style>