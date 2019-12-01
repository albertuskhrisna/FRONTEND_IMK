<template>
    <v-container>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1 class="text-center">About Us</h1>
                        </v-col>
                        <v-col cols="12">
                            <div class="form-group">
                                <p class="text-center">Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. 
                        Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, 
                        quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, 
                        at nemore equidem est. Sed in error hendrerit, in consul constituam cum.</p>
                            </div>
                        </v-col>
                        <!-- <v-col cols="12" sm="6">
                            <div class="form-group">
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="New Email" placeholder=" " v-model="form.new_email" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Confirm Email" placeholder=" " v-model="form.confirm_email" required></v-text-field>
                            </div>
                        </v-col> -->
                    </v-row>
                </v-container>
                <!-- <v-btn color="primary" rounded @click="emailUpdate()">
                    Update Email
                </v-btn>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1>Change Password</h1>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Current Password" placeholder=" " v-model="form.current" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="New Password" placeholder=" " v-model="form.new_password" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Confirm Password" placeholder=" " v-model="form.confirm_password" required></v-text-field>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn color="primary" rounded @click="passwordUpdate()">
                    Update Password
                </v-btn> -->
            </v-col>
            <v-col cols="3"></v-col>
        </v-row>
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
    </v-container> 

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        editedIndex: -1,
        defaultItem: 
        {
            id: '',
            name: '' ,
            surname: '',
            address: '',
            province: '',
            city: '',
            postal: '',
            district: '',
            phone_number: '',
            country: '',
        },
        form:
        {
            id: '',
            name: '' ,
            surname: '',
            address: '',
            province: '',
            city: '',
            postal: '',
            district: '',
            phone_number: '',
            country: '',
        },
        selection: ['+1','+62'],
        country: ['America', 'English', 'Indonesia'],
        profiles: [],
        profile: new FormData,
        id_user: '',
        snackbar: false,          
        color: null,         
        text: '',          
        load: false,
        menu: false
      }
    },
    methods: {
        emailUpdate(){
            this.snackbar = true;                
            this.color = 'success'; 
            this.text = "Update Email Success !"
            this.load = false;
        },
        passwordUpdate(){
            this.snackbar = true;                
            this.color = 'success'; 
            this.text = "Update Password Success !"
            this.load = false;
        }
    },
  }
</script>