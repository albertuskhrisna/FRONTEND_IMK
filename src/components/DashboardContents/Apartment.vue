<template>
<v-container> 
    <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
            <v-card>
                <v-container grid-list-md mb-0>
                    <h2 class="text-md-center">JOB</h2> 
                    <v-flex xs3> 
                        <v-btn depressed dark rounded color = "primary" @click="dialog = true">
                        <v-icon size="20" class="text-md-center">mdi-pencil-plus</v-icon>
                        Add New Job
                        </v-btn>
                    </v-flex>
                    <v-row>
                    <v-col v-for="job in jobs" :key="job.id" cols="12">
                    <v-row>
                    <v-col cols="12">
                    <v-card
                        color="primary" 
                        height="auto" width="100%">
                        <v-card-text class="white--text">
                            <h2>Job Name: {{ job.job_name}}</h2>
                            <br/>
                            <h2>Company Name: {{ job.company_name}}</h2>
                            <br/>
                            <h2>Location: {{ job.company_address + ", " + job.company_city + ", " + job.company_province }}</h2>
                            <br/>
                            <h2>Salary: {{ "Rp  " + job.salary }}</h2>
                        </v-card-text>
                    
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="success" @click="editHandler(job)">
                                <v-icon left color="white">mdi-pencil</v-icon>Edit
                            </v-btn>
                            <v-btn color="error" @click="confirm(job.id)">
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
                <label for="job_name">Job Name : </label>
                <v-text-field label="Job Name" single-line outlined v-model="form.job_name" required></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="form-group">
                <label for="company_name">Company Name : </label>
                <v-select single-line outlined :items="selection" label="Company Name" v-model="form.company_name" required></v-select>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="form-group">
                <label for="salary">Salary : </label>
                <v-text-field label="Salary" single-line outlined v-model="form.salary" required></v-text-field>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="12">
                <div class="form-group">
                <label for="description">Description : </label> 
                <v-textarea outlined name="input-7-4" v-model="form.description" required></v-textarea>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="12">
                <div class="form-group">
                <label for="requirement">Requirement : </label> 
                <v-textarea outlined name="input-7-4" v-model="form.requirement" required></v-textarea>
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
                id: '',
                id_user: '',
                id_company: '',
                job_name: '',
                salary: '',
                description: '',
                requirement: '',
                company_name: '',
                company_address: '',
                company_city: '',
                company_province: '',
            },
            form: 
            {
                id: '',
                id_user: '',
                id_company: '',
                job_name: '',
                salary: '',
                description: '',
                requirement: '',
                company_name: '',
                company_address: '',
                company_city: '',
                company_province: '',
            },
            companies: [],
            jobs: [],
            selection: [],
            job: new FormData,
            typeInput: 'new', 
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
        formTitle() {
            return this.typeInput === "new" ? 'Add Job' : 'Edit Job'
        },
        checkIDCompany() {
            for(var i=0; i<this.companies.length; i++){
                if(this.companies[i].company_name === this.form.company_name){
                    return this.companies[i].id
                }
            }
            return -1
        },
    },
    methods: {
        
    }
  }
</script>
