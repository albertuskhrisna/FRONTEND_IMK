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
                        :src=items[id].src
                    ></v-img>
                            </v-card>
                        </template>
                      </v-col>
                      <v-col
                      :cols="4">
                         <v-card style="margin-left:5px">
                                <v-img
                        height="100px"
                        :src=items[id].src1
                    ></v-img>
                            </v-card>
                      </v-col>
                      <v-col
                      :cols="4">
                         <v-card>
                                <v-img
                        height="100px"
                        :src=items[id].src2
                    ></v-img>
                            </v-card>
                      </v-col>
                      <v-col
                      :cols="4">
                         <v-card
                         style="margin-right:5px">
                                <v-img
                        height="100px"
                        :src=items[id].src3
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
              <div class="text-left headline">{{items[id].title}}</div>
               <v-rating
                    :value=items[id].value
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>
                <div class="text-left">{{items[id].price}}</div>
                <div class="text-left" style="margin-top:2%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare. Purus viverra accumsan in nisl nisi. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Lectus arcu bibendum at varius vel.</div>
                <v-container>
                    <v-btn text @click="spesification=true">
                        <v-icon>mdi-arrow-right-drop-circle </v-icon> Detail Spesification 
                    </v-btn>
                    <v-btn text @click="map=true">
                        <v-icon>mdi-arrow-right-drop-circle </v-icon> Address & Location 
                    </v-btn>
                    <v-btn text @click="addToFav()">
                        <v-icon>mdi-plus-circle </v-icon> Add to favorites
                    </v-btn>
                </v-container>
                <v-container style="margin-top:10%">
                    <v-btn @click="contact=true">Contact Property</v-btn>
                </v-container>
          </v-container>
      </v-col>
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
    <v-dialog
    v-model="contact"
    max-width="500px">
        <v-card>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="primary" text @click="contact=false">
                    <v-icon>fas fa-window-close</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <p class="headline font-weight-bold text-center">Contact Property</p>
            </v-card-text>
            <v-img src="../../assets/chat.jpg" style="margin-left:20px;margin-right:30px;"></v-img>
            <v-card-text>
                <v-row>
                    <v-col :cols="9">
                        <v-text-field solo placeholder="Type Message"></v-text-field>
                    </v-col>
                    <v-col :cols="3">
                        <v-btn class="primary">Send</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
    <v-dialog
    v-model="map"
    max-width="500px">
        <v-card>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="primary" text @click="map=false">
                    <v-icon>fas fa-window-close</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <p class="headline font-weight-bold text-center">Address & Location</p>
                <p class="title">Address : </p>
                <p class="subtitle" style="margin:10px">1021 Justin Ave, Glendale, CA 91201, United States</p>
                <p class="title">Map : </p>
            </v-card-text>
            <v-img src="../../assets/map.png" style="margin-left:30px;margin-right:30px;"></v-img>
            <v-card-title></v-card-title>
        </v-card>
    </v-dialog>
    <v-dialog
    v-model="spesification"
    max-width="500px">
        <v-card>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="primary" text @click="spesification=false">
                    <v-icon>fas fa-window-close</v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <p class="headline font-weight-bold text-center">Detail Spesifications</p>
                <p class="title">Facilities : </p>
                <v-row>
                    <v-col :cols="1"><v-icon>mdi-bed-double-outline</v-icon></v-col>
                    <v-col :cols="11"><p class="subtitle">: 2 bedrooms</p></v-col>
                    <v-col :cols="1"><v-icon>mdi-shower</v-icon></v-col>
                    <v-col :cols="11"><p class="subtitle">: 1 bathroom</p></v-col>
                    <v-col :cols="1"><v-icon>mdi-microwave</v-icon></v-col>
                    <v-col :cols="11"><p class="subtitle">: Microwave</p></v-col>
                    <v-col :cols="1"><v-icon>mdi-fridge</v-icon></v-col>
                    <v-col :cols="11"><p class="subtitle">: Fridge</p></v-col>
                </v-row>
                <p class="title">Floor Plan : </p>
            </v-card-text>
            <v-img src="../../assets/map apartment.jpg" style="margin-left:30px;margin-right:30px;"></v-img>
            <v-card-title></v-card-title>
        </v-card>
    </v-dialog>
</v-container> 

</template>

<script>
  export default {
    data () {
      return {
            map:false,
            spesification:false,
            contact:false,
            items:
            [
                {
                    id: 0,
                    title: 'Mexican House',
                    src: 'https://i.pinimg.com/originals/0f/bc/a7/0fbca7637190373f756df42c1f20cb0c.jpg',
                    src1: 'https://www.idesignarch.com/wp-content/uploads/Casa-Koala-Merida-Mexico_1.jpg',
                    src2: 'https://www.archipanic.com/wp-content/uploads/2018/10/Digital09085527_1E2A6289.jpg',
                    src3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Tkw-NpKiGIDfySitOYE3WpcAz_f4Gvq5Nv-YCsuIFMFX70yo&s',
                    value: '4.5',
                    type: 'Housing',
                    price: 'IDR 28.000.000.000'
                },
                {
                    id: 1,
                    title: 'Old White House',
                    src: 'https://d2ern41v4fpcqm.cloudfront.net/media/gallery/property-69329/i076900.jpg',
                    src1: 'https://insinyurbangunan.com/wp-content/uploads/2018/11/model-2-teras-rumah.jpg',
                    src2: 'https://insinyurbangunan.com/wp-content/uploads/2018/11/teras-rumah-yang-asri.jpg',
                    src3: 'https://stroyew.ru/wp-content/uploads/2017/12/vegcopy-leq-523x645.jpg',
                    value: '3.0',
                    type: 'Housing',
                    price: 'IDR 340.000.000'
                },
                {
                    id: 2,
                    title: 'Old Age House',
                    src: 'https://cdn.mos.cms.futurecdn.net/pHX9MUPtvKjyKwJbfUsgS4-768-80.jpg',
                    src1: 'https://media.rooang.com/wp-content/uploads/2015/06/tips-mendekorasi-rumah-tua.jpg',
                    src2: 'https://assets.kompasiana.com/items/album/2015/11/02/dscn2836-jpg-563715ded69373a807aa479d.jpg?v=400&t=o?t=o&v=350',
                    src3: 'https://makassar.terkini.id/aset/images/sites/2/2019/02/original_IMG_6255-630x420.jpg',
                    value: '4.0',
                    type: 'Housing',
                    price: 'IDR 450.000.000'
                },
            ],
            item:
            {
                title: '',
                src: '',
                scr1: '',
                src2: '',
                src3: '',
                value: '',
                type: '',
                price: ''
            },
            search: '',
            searchBy: '',
            id: -1,
            snackbar: false,
            color: null,
            text: '',
            load: false
        }
    },
    methods: {
        getData(){
            this.id = this.$route.params.id
        },
        detailSpecs(){

        },
        showAddress(){

        },
        addToFav(){
            this.snackbar = true;                
            this.color = 'success'; 
            this.text = "Successfully Added !"
            this.load = false;
        },
        contactProperty(){

        }
    },
    mounted(){         
        this.getData();     
    },
  }
</script>
