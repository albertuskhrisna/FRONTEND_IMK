<template>
<v-container> 
  <v-row dense>
    <v-col :cols="3"/>
    <v-col
    :cols="2">
        <v-select
          :items="items"
          label="Locations"
          dense
          outlined
          
        ></v-select>
    </v-col>
    <v-col
    :cols="4">
      <v-text-field
            label="Search Property..."
            dense
            outlined
            prepend-inner-icon="mdi-magnify"
            
          ></v-text-field>
    </v-col>
    <v-col :cols="3"/>
    <v-col
    :cols="1">
        <p class="text-left headline">Market</p>
    </v-col>
    <v-col
    :cols="11">
      <template>
        <v-progress-linear value="100" style="margin-top:2%" ></v-progress-linear>
      </template>
    </v-col>
  </v-row>
    <v-row>
      <v-col
      :cols="3">
        <template>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <v-img
                height="250"
                src="https://i.pinimg.com/originals/0f/bc/a7/0fbca7637190373f756df42c1f20cb0c.jpg"
              ></v-img>

              <v-card-title>Mexican House</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">4.5</div>
                </v-row>
              </v-card-text>
              <v-card-title>IDR 28.000.000.000</v-card-title>

            </v-card>
          </template>
      </v-col>
    </v-row>
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
