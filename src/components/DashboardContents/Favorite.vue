<template>
    <v-container>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <v-card>
                    <v-container grid-list-md mb-0>
                        <h1 class="text-md-center">PROFILE</h1> 
                        <v-flex xs3> 
                            <v-btn absolute right depressed dark rounded color="primary" @click="editHandler">
                                <v-icon size="20" class="text-md-center">mdi-pencil</v-icon>
                                Update Profile
                            </v-btn>
                        </v-flex>
                        <v-row>
                            <v-col cols="2"></v-col>
                            <v-col cols="8">
                                <v-row justify="space-between">
                                    <v-col cols="2"></v-col>
                                    <v-col cols="4">
                                        <v-img
                                            height="200"
                                            width="200"
                                            src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"
                                        ></v-img>
                                    </v-col>
                                    <v-col
                                        cols="4"
                                        class="pl-0">
                    
                                        <v-row
                                            class="flex-column ma-0 fill-height" justify="center">
                                            <v-col class="px-0">
                                                <h3>Full Name : {{ profile.first_name + " " + profile.last_name}}</h3>
                                            </v-col>

                                            <v-col class="px-0">
                                                <h3>Contact : {{ profile.phone_number }}</h3>
                                            </v-col>

                                            <v-col class="px-0">
                                                <h3>Location : {{ profile.address + ", " + profile.city + ", " + profile.province}}</h3>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="2"></v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="2"></v-col>
                                    <v-col cols="8">
                                        <v-card-text>
                                            <h3>First Name : {{ profile.first_name }}</h3>
                                            <h3>Last Name : {{ profile.last_name }}</h3>
                                            <h3 v-if="profile.gender === '0'">Gender : Male</h3>
                                            <h3 v-else-if="profile.gender === '1'">Gender : Female</h3>
                                            <h3>Address : {{ profile.address }}</h3>
                                            <h3>City : {{ profile.city }}</h3>
                                            <h3>Province : {{ profile.province }}</h3>
                                            <h3>Birth Date : {{ profile.birth_date }}</h3>
                                            <h3>Phone Number : {{ profile.phone_number }}</h3>
                                        </v-card-text>
                                    </v-col>
                                    <v-col cols="2"></v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="2"></v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
    
    <v-dialog v-model="dialog" max-width="1000px">
        <v-card>
        <v-card-title>
            <span class="headline">Edit Profile</span>
        </v-card-title>
        <v-card-text>
            <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                    <label for="firstname">First Name : </label>
                    <v-text-field label="First Name" single-line outlined v-model="form.first_name" required></v-text-field>
                </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                    <label for="lastname">Last Name : </label>
                    <v-text-field label="Last Name" single-line outlined v-model="form.last_name" required></v-text-field>
                </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                    <label for="gender">Gender : </label>
                    <v-radio-group v-model="form.gender" :rules="[v => !!v || 'Item is required']" required>
                        <v-radio label="Male" value="0"></v-radio>
                        <v-radio label="Female" value="1"></v-radio>
                    </v-radio-group>
                </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                    <label for="address">Address : </label>
                    <v-text-field label="Address" single-line outlined v-model="form.address" required></v-text-field>
                </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                    <label for="city">City : </label>
                    <v-text-field label="City" single-line outlined v-model="form.city" required></v-text-field>
                </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                    <label for="province">Province : </label>
                    <v-text-field label="Province" single-line outlined v-model="form.province" required></v-text-field>
                </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <div class="form-group">
                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="290px">
                        <template v-slot:activator="{ on }">
                            <label for="birthdate">Birth Date :</label>
                            <v-text-field
                                v-model="form.birth_date"
                                v-on="on"
                                single-line outlined
                                required>
                            </v-text-field>
                        </template>
                        <v-date-picker v-model="form.birth_date" @input="menu = false " mode="range" :value="null" color="primary" is-dark is-inline></v-date-picker>
                    </v-menu>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                    <div class="form-group">
                    <label for="Phone Number">Phone Number : </label>
                    <v-text-field label="Phone Number" single-line outlined v-model="form.phone_number" required></v-text-field>
                    </div>
                </v-col>
                </v-row>
            </v-container>
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="saveProfile()">Save</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
            </v-card-actions>
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
            first_name: '' ,
            last_name: '',
            gender: '',
            address: '',
            city: '',
            province: '',
            birth_date: '',
            phone_number: '',
            email: '',
        },
        form:
        {
            id: '',
            first_name: '' ,
            last_name: '',
            gender: '',
            address: '',
            city: '',
            province: '',
            birth_date: '',
            phone_number: '',
        },
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
        getProfile(){
            // var config = {
            //     headers: {
            //         Authorization: 'Bearer ' + localStorage.getItem('token')
            //     }
            // }             
            this.id_user = this.$session.get("id_user") 
            var uri = this.$apiUrl + '/profile/' + this.id_user         
            this.$http.get(uri).then(response => {                 
                this.profile = response.data.message       
            })               
        },
        saveProfile()
        {
            // var config = {
            //     headers: {
            //         Authorization: 'Bearer ' + localStorage.getItem('token')
            //     }
            // }

            let update = new FormData();

            update.append('first_name', this.form.first_name);             
            update.append('last_name', this.form.last_name);             
            update.append('gender', this.form.gender);
            update.append('address', this.form.address);
            update.append('city', this.form.city);
            update.append('province', this.form.province);
            update.append('birth_date', this.form.birth_date);
            update.append('phone_number', this.form.phone_number);

            var uri = this.$apiUrl + '/profile/' + this.profile.id;
            this.load = true             
            this.$http.post(uri,update).then(response =>{ 
                    this.snackbar = true; //mengaktifkan snackbar               
                    this.color = 'success'; //memberi warna snackbar               
                    this.text = response.data.message; //memasukkan pesan ke snackbar               
                    this.load = false;               
                    this.dialog = false            
                    this.getProfile(); //mengambil data user               
                    //this.typeInput = 'new';           
                }).catch(error =>{               
                    this.errors = error               
                    this.snackbar = true;               
                    this.text = 'Try Again';               
                    this.color = 'red';               
                    this.load = false;               
                    //this.typeInput = 'new';           
                })         
        },
        editHandler(){
            this.dialog = true;           
            this.form.first_name = this.profile.first_name;
            this.form.last_name = this.profile.last_name;
            this.form.gender = this.profile.gender;
            this.form.address = this.profile.address;
            this.form.city = this.profile.city;
            this.form.province = this.profile.province;
            this.form.birth_date = this.profile.birth_date;
            this.form.phone_number = this.profile.phone_number;
        },
    },
  }
</script>