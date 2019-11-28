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
                andrebemantoro            
              </v-toolbar-title> 
        </v-app-bar> 

        <VContent>             
            <router-view />         
        </VContent> 
        </v-app>
</template>

<script>   
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
            }     
        },
        methods: {
            userlogout(){
                this.$router.push('/')
            }
        }
    } 
</script>