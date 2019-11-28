<template>
    <v-container>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1>Edit Profile Photo</h1>
                        </v-col>
                        <v-col cols="12">
                            <v-card height="400" width="300">
                                <v-card-text>
                                    <div style="margin-top: 55%">
                                        <h1 style="font-size: 100pt" class="text-center">+</h1>
                                    </div>
                                </v-card-text>
                            </v-card>  
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn color="primary" rounded @click="photoUpdate()">
                    Update Photo
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
        photoUpdate(){
            this.snackbar = true;                
            this.color = 'success'; 
            this.text = "Update Photo Success !"
            this.load = false;
        },
    },
  }
</script>