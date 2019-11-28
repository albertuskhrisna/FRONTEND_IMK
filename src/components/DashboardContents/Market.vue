<template>
<v-container> 
    <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
            <v-card>
                <v-container grid-list-md mb-0>
                    <h2 class="text-md-center">COMPANY</h2> 
                    <v-flex xs3> 
                        <v-btn depressed dark rounded color = "primary" @click="dialog = true">
                        <v-icon size="20" class="text-md-center">mdi-pencil-plus</v-icon>
                        Add New Company
                        </v-btn>
                    </v-flex>
                    <v-row>
                    <v-col v-for="company in companies" :key="company.id" cols="12">
                    <v-row>
                    <v-col cols="12">
                    <v-card
                        color="primary" 
                        height="auto" width="100%">
                        <v-card-text class="white--text">
                            <h2>Company Name: {{ company.company_name}}</h2>
                            <br/>
                            <h2>Address: {{ company.address + ", " + company.city + ", " + company.province }}</h2>
                            <br/>
                            <h2>Company Email: {{ company.company_email }}</h2>
                        </v-card-text>
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="success" @click="editHandler(company)">
                                <v-icon left color="white">mdi-pencil</v-icon>Edit
                            </v-btn>
                            <v-btn color="error" @click="confirm(company.id)">
                                <v-icon left color="white">mdi-delete</v-icon>Delete
                            </v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                    </v-col>
                    </v-row>
                    
                    </v-col>
                </v-row>
                </v-container> 
            </v-card>
        </v-col>
        <v-col cols="2"></v-col>
    </v-row> 
  
  <v-dialog v-model="dialog" max-width="1000px">
    <v-card>
  <v-card-title>
    <h2 class="text-center">{{ formTitle }}</h2>
  </v-card-title>
  <v-card-text>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="4">
              <div class="form-group">
                <label for="company_name">Company Name : </label>
                <v-text-field label="Company Name" single-line outlined v-model="form.company_name" required></v-text-field>
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
                  <label for="company_email">Company Email : </label>
                  <v-text-field label="Company Email" single-line outlined v-model="form.company_email" type="email" required></v-text-field>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <div class="form-group">
                  <label for="phone_number">Phone Number : </label>
                  <v-text-field label="Phone Number" single-line outlined v-model="form.phone_number" required></v-text-field>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="12">
                <div class="form-group">
                <label for="company_description">Company Description : </label> 
                <v-textarea outlined name="input-7-4" v-model="form.company_description" required></v-textarea>
                </div>
            </v-col>
            </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="setForm()">Save</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
    </v-card-actions>
</v-card>
</v-dialog>

<v-dialog v-model="confirmationDialog" width="25%">
<v-card>
  <v-card-title>
    <h2 class="text-center">Confirmation</h2>
  </v-card-title>
  <v-card-text>
    <v-container>
        <v-row>
            <h2>Are you sure want to delete this item ?</h2>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="deleteData(id)">Confirm</v-btn>
        <v-btn color="blue darken-1" text @click="confirmationDialog = false">Cancel</v-btn>
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
            confirmationDialog: false,
            editedIndex: -1,
            defaultItem: 
            {
                company_name: '',
                address: '', 
                city: '', 
                province: '',
                company_email: '',
                phone_number: '',
                company_description: ''
            },
            form: 
            {
                company_name: '',
                address: '', 
                city: '', 
                province: '',
                company_email: '',
                phone_number: '',
                company_description: ''
            },
            company: new FormData,
            typeInput: 'new', 
            companies: [],
            search: '',
            select: [],
            snackbar: false,          
            color: null,         
            text: '',          
            load: false,
            id_user: '',
            id: ''
      }
    },
    computed: 
    {
      formTitle () {
        return this.typeInput === "new" ? 'Add Company' : 'Edit Company'
      },
    },
    methods: {
        getData(){
            // var config = {
            //     headers: {
            //         Authorization: 'Bearer ' + localStorage.getItem('token')
            //     }
            // }             
            
            this.id_user = this.$session.get("id_user")
            var uri = this.$apiUrl + '/company/readByUserId/' + this.id_user            
            this.$http.get(uri).then(response => { 
                if(response.data.message["msg"] === "Company tidak ditemukan"){
                  this.companies = []
                }else{
                  this.companies = response.data.message
                }
            })               
        },
        sendData(){  
            // var config = {
            //     headers: {
            //         Authorization: 'Bearer ' + localStorage.getItem('token')
            //     }
            // }

            this.company = new FormData()
            this.company.append('id_user', this.id_user)
            this.company.append('company_name', this.form.company_name);
            this.company.append('address', this.form.address);
            this.company.append('city', this.form.city);
            this.company.append('province', this.form.province);
            this.company.append('company_email', this.form.company_email);
            this.company.append('phone_number', this.form.phone_number);
            this.company.append('company_description', this.form.company_description);

            var uri =this.$apiUrl + '/company'             
            this.load = true             
            this.$http.post(uri,this.company).then(response =>{               
                this.snackbar = true; //mengaktifkan snackbar               
                this.color = 'green'; //memberi warna snackbar               
                this.text = response.data.message; //memasukkan pesan ke snackba r               
                this.load = false;               
                this.dialog = false               
                this.getData(); //mengambil data user               
                this.resetForm();           
            }).catch(error =>{               
                this.errors = error               
                this.snackbar = true;               
                this.text = 'Try Again';               
                this.color = 'red';               
                this.load = false;           
            })         
        }, 
        updateData(){  
            // var config = {
            //     headers: {
            //         Authorization: 'Bearer ' + localStorage.getItem('token')
            //     }
            // }

            this.company = new FormData()
            this.company.append('id_user', this.id_user)
            this.company.append('company_name', this.form.company_name);
            this.company.append('address', this.form.address);
            this.company.append('city', this.form.city);
            this.company.append('province', this.form.province);
            this.company.append('company_email', this.form.company_email);
            this.company.append('phone_number', this.form.phone_number);
            this.company.append('company_description', this.form.company_description);

            var uri =this.$apiUrl + '/company/' + this.form.id             
            this.load = true             
            this.$http.post(uri,this.company).then(response =>{               
                this.snackbar = true; //mengaktifkan snackbar               
                this.color = 'green'; //memberi warna snackbar               
                this.text = response.data.message; //memasukkan pesan ke snackba r               
                this.load = false;               
                this.dialog = false               
                this.getData(); //mengambil data user               
                this.resetForm();           
            }).catch(error =>{               
                this.errors = error               
                this.snackbar = true;               
                this.text = 'Try Again';
                this.color = 'red';               
                this.load = false;           
            })         
        },
        deleteData(id){  
            // var config = {
            //     headers: {
            //         Authorization: 'Bearer ' + localStorage.getItem('token')
            //     }
            // }

            this.confirmationDialog = false;
            var uri =this.$apiUrl + '/company/' + id             
            this.load = true             
            this.$http.delete(uri).then(response =>{               
                this.snackbar = true; //mengaktifkan snackbar               
                this.color = 'green'; //memberi warna snackbar               
                this.text = response.data.message; //memasukkan pesan ke snackba r               
                this.load = false;               
                this.dialog = false               
                this.getData(); //mengambil data user               
                this.resetForm();           
            }).catch(error =>{               
                this.errors = error               
                this.snackbar = true;               
                this.text = 'Try Again';
                this.color = 'red';               
                this.load = false;           
            })
        }, 
        confirm(id){
            this.id = id;
            this.confirmationDialog = true;
        },
        editHandler(company){
            this.dialog = true; 
            this.typeInput = "edit";   
            this.form.id = company.id;       
            this.form.company_name = company.company_name;
            this.form.address = company.address;
            this.form.city = company.city;
            this.form.province = company.province;
            this.form.phone_number = company.phone_number;
            this.form.company_email = company.company_email;
            this.form.company_description = company.company_description;
        },
        setForm(){             
            if (this.typeInput === 'new') {
                this.sendData()             
            }else{         
                this.updateData()             
            }
        },
        resetForm(){             
            this.form = {                
                company_name: '',
                address: '', 
                city: '', 
                province: '',
                company_email: '',
                phone_number: '',
                company_description: ''             
            }         
        }
    },
    mounted(){         
        this.getData();     
    },
  }
</script>
