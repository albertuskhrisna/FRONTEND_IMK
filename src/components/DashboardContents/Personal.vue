<template>
    <v-container>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1>Personal Details</h1>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Name" placeholder=" " v-model="form.name" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Surname" placeholder=" " v-model="form.surname" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Address" placeholder=" " v-model="form.address" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Province" placeholder=" " v-model="form.province" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="City" placeholder=" " v-model="form.city" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="Postal Code" placeholder=" " v-model="form.postal" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-text-field label="District" placeholder=" " v-model="form.district" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" md="2">
                            <div class="form-group">
                                <v-select :items="selection" label="Phone Number" placeholder=" "></v-select>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <div class="form-group">
                                <v-text-field v-model="form.phone_number" required></v-text-field>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <div class="form-group">
                                <v-select :items="country" label="Country" placeholder=" " v-model="form.country" required></v-select>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn color="primary" rounded @click="profileUpdate()">
                    Update Profile
                </v-btn>
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
        profileUpdate(){
            this.snackbar = true;                
            this.color = 'success'; 
            this.text = "Update Profile Success !"
            this.load = false;
        }
    },
  }
</script>
