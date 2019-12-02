<template>
    <v-container>
        <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1 class="text-center">Gallery</h1>
                        </v-col>
                        <v-col cols="12">
                            <div class="form-group">
                                <p class="text-center">Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. 
                        Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, 
                        quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, 
                        at nemore equidem est. Sed in error hendrerit, in consul constituam cum.</p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <v-row >
                                <v-col :cols="4"
                                v-for="(item,index) in picture" :key="index">
                                    <v-card>
                                    <v-img
                                    :src="item.src"
                                    class="white--text align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                    height="200px"
                                    >
                                    <v-card-title v-text="item.title"></v-card-title>
                                    </v-img>
                                </v-card>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
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
        picture: [
            {
                title: 'Luxury House', src:'https://www.realestate.com.au/blog/images/1600x1600-fit,progressive/2018/05/04060018/capi_23ab1220474d3c112141d490a146309a_60ad74651c069f231ad7c408d368d3d8.jpeg'
            },
            {
                title: 'Luxury House', src: 'https://www.sothebysrealty-france.com/datas/biens/thumbs/18545/18545_00-2019-08-21-0255.jpg'
            },
            {
                title: 'Luxury House', src: 'https://images2.junkmail.co.za/api/storage/14da2d6f-198c-4332-9643-3edd8d7c10ac/images/085a65681e4046398692b4f0bf58b1a0.jpg'
            },
            {
                title: 'Cozy Apartment', src: 'http://cdn.home-designing.com/wp-content/uploads/2017/11/cozy-apartment-design.jpg'
            },
            {
                title: 'Modern Apartment', src: 'https://images.trvl-media.com/hotels/24000000/23650000/23647900/23647876/a4791e3d_z.jpg'
            },
            {
                title: 'Minimalsm Apartment', src: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/cozy-apartment-central-bern-4-5-rooms-481a5263b8c8352cfa74d18f4d5fb775.jpg'
            },
            {
                title: 'Green Office', src: 'https://www.officelovin.com/wp-content/uploads/2018/05/simple-office-portland-m.jpg'
            },
            {
                title: 'Simple Office', src: 'https://www.tenangles.com/wp-content/uploads/2018/04/Vastuforoffice.jpg'
            },
            {
                title: 'Modern Office', src: 'https://img.archiexpo.com/images_ae/projects/images-g/ersa-introduces-so-simple-office-system-created-multi-faceted-italian-designed-byclaudio-bellini-25860-9911138.jpg'
            }
        ],
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