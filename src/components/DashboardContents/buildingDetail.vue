<template>
<v-container> 
  <v-row dense>
    <v-col :cols="3"/>
    <v-col
    :cols="6">
      <v-text-field
            label="Search Property..."
            dense
            outlined
            prepend-inner-icon="mdi-magnify"
            
          ></v-text-field>
    </v-col>
    <v-col :cols="3"/>
  </v-row>
    <v-row>
      <v-col :cols="7">
          <v-container>
              <v-card>
                  <v-row>
                      <v-col
                      :cols="12">
                        <template>
                            <v-card
                            style="margin-left:5px; margin-right:5px">
                                <v-img
                        height="400px"
                        src="https://q-cf.bstatic.com/images/hotel/max1024x768/109/109453792.jpg"
                    ></v-img>
                            </v-card>
                        </template>
                      </v-col>
                      <v-col
                      :cols="4">
                         <v-card style="margin-left:5px">
                                <v-img
                        height="100px"
                        src="https://ak6.picdn.net/shutterstock/videos/1006583506/thumb/1.jpg"
                    ></v-img>
                            </v-card>
                      </v-col>
                      <v-col
                      :cols="4">
                         <v-card>
                                <v-img
                        height="100px"
                        src="http://everyquotes.com/img/2019/09/rustic-layout-ideas-planner-luxury-installation-interior-backsplash-tile-huzname-shaker-styles-bath-beautiful-grey-design-apartment-remodel-817x540.jpg"
                    ></v-img>
                            </v-card>
                      </v-col>
                      <v-col
                      :cols="4">
                         <v-card
                         style="margin-right:5px">
                                <v-img
                        height="100px"
                        src="https://alicisivar.com/wp-content/uploads/2018/09/8-Amazing-Simple-Bathroom-Theme-Ideas-awesome-simple-apartment.jpg"
                    ></v-img>
                            </v-card>
                      </v-col>
                  </v-row>
              </v-card>
          </v-container>
      </v-col>
      <v-col :cols="1"/>
      <v-col>
          <v-container>
              <div class="text-left headline">Simple Apartment</div>
               <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>
                <div class="text-left">IDR 28.000.000.000</div>
                <div class="text-left" style="margin-top:2%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare. Purus viverra accumsan in nisl nisi. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Lectus arcu bibendum at varius vel.</div>
                <v-container>
                    <v-btn text>
                        <v-icon>mdi-arrow-right-drop-circle </v-icon> Detail Spesification 
                    </v-btn>
                    <v-btn text>
                        <v-icon>mdi-arrow-right-drop-circle </v-icon> Address & Location 
                    </v-btn>
                    <v-btn text>
                        <v-icon>mdi-plus-circle </v-icon> Add to favorites
                    </v-btn>
                </v-container>
                <v-container style="margin-top:10%">
                    <v-btn>Contact Property</v-btn>
                </v-container>
          </v-container>
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
