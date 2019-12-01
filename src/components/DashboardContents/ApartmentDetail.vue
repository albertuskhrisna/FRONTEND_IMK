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
                    <v-btn text @click="detailSpecs()">
                        <v-icon>mdi-arrow-right-drop-circle </v-icon> Detail Spesification 
                    </v-btn>
                    <v-btn text @click="showAddress()">
                        <v-icon>mdi-arrow-right-drop-circle </v-icon> Address & Location 
                    </v-btn>
                    <v-btn text @click="addToFav()">
                        <v-icon>mdi-plus-circle </v-icon> Add to favorites
                    </v-btn>
                </v-container>
                <v-container style="margin-top:10%">
                    <v-btn @click="contactProperty()">Contact Property</v-btn>
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
</v-container> 

</template>

<script>
  export default {
    data () {
      return {
            items:
            [
                {
                    id: 0,
                    title: 'Simple Apartment',
                    src: 'https://q-cf.bstatic.com/images/hotel/max1024x768/109/109453792.jpg',
                    src1: 'https://ak6.picdn.net/shutterstock/videos/1006583506/thumb/1.jpg',
                    src2: 'http://everyquotes.com/img/2019/09/rustic-layout-ideas-planner-luxury-installation-interior-backsplash-tile-huzname-shaker-styles-bath-beautiful-grey-design-apartment-remodel-817x540.jpg',
                    src3: 'https://alicisivar.com/wp-content/uploads/2018/09/8-Amazing-Simple-Bathroom-Theme-Ideas-awesome-simple-apartment.jpg',
                    value: '4.5',
                    type: 'Apartment and Penthouse',
                    price: 'IDR 35.000.000.000'
                },
                {
                    id: 1,
                    title: 'Cozy Apartment',
                    src: 'https://odis.homeaway.com/odis/listing/b55ce4aa-1273-4906-a85b-6c216d3fe87d.f6.jpg',
                    src1: 'https://cdn.homedit.com/wp-content/uploads/2013/01/bold-apartment-accents-accessories.jpg',
                    src2: 'https://odis.homeaway.com/odis/listing/c82461cc-51fe-4420-ae3d-46b0fccd0d71.f6.jpg',
                    src3: 'https://cdn.homeaddict.io/wp-content/uploads/2019/06/shutterstock_1051179893.jpg',
                    value: '4.5',
                    type: 'Apartment and Penthouse',
                    price: 'IDR 35.000.000.000'
                },
                {
                    id: 2,
                    title: 'Modern Penthouse',
                    src: 'https://odis.homeaway.com/odis/listing/18842b0b-48df-4c82-b96a-064242b7af1f.c10.jpg',
                    src1: 'https://i.ytimg.com/vi/_U7P_c6puZo/maxresdefault.jpg',
                    src2: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/Modern-Penthouse-Apartment.jpg',
                    src3: 'https://m.wsj.net/video/20190312/031119lotd_london_new/031119lotd_london_new_960x540.jpg',
                    value: '5.0',
                    type: 'Apartment and Penthouse',
                    price: 'IDR 30.000.000.000'
                },
                {
                    id: 3,
                    title: 'Tall Apartment',
                    src: 'https://i.pinimg.com/originals/f8/c5/09/f8c50927c3d44ee8c9bc1d48b5f3d019.jpg',
                    src1: 'https://rumahdijual.com/attachments/jakarta-pusat/1272860d1400416170-apartment-green-pramuka-jakarta-pusat-gambar-3.jpg',
                    src2: 'http://2.bp.blogspot.com/-j_Wm6vB0V2w/VqdEK5q_9uI/AAAAAAAAABU/incG6Z-nJjE/s1600/Apartement%2BT%2BPlaza.jpg',
                    src3: 'https://rumahdijual.com/attachments/jakarta-pusat/738411d1382695078-t-plaza-bendungan-hilir-t-plaza-20-40benhil.jpg',
                    value: '5.0',
                    type: 'Apartment and Penthouse',
                    price: 'IDR 45.000.000.000'
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
