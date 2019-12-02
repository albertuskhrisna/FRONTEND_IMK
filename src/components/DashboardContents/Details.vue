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
                </v-container>
                <v-container style="margin-top:10%">
                    <v-btn @click="contact=true">Contact Property</v-btn>
                </v-container>
          </v-container>
      </v-col>
    </v-row>
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
                {
                    id: 3,
                    title: 'Cozy Apartment',
                    src: 'https://odis.homeaway.com/odis/listing/b55ce4aa-1273-4906-a85b-6c216d3fe87d.f6.jpg',
                    src1: 'https://cdn.homedit.com/wp-content/uploads/2013/01/bold-apartment-accents-accessories.jpg',
                    src2: 'https://odis.homeaway.com/odis/listing/c82461cc-51fe-4420-ae3d-46b0fccd0d71.f6.jpg',
                    src3: 'https://cdn.homeaddict.io/wp-content/uploads/2019/06/shutterstock_1051179893.jpg',
                    value: '4.5',
                    type: 'Apartment',
                    price: 'IDR 35.000.000.000'
                },
                {
                    id: 4,
                    title: 'Simple Apartment',
                    src: 'https://q-cf.bstatic.com/images/hotel/max1024x768/109/109453792.jpg',
                    src1: 'https://ak6.picdn.net/shutterstock/videos/1006583506/thumb/1.jpg',
                    src2: 'http://everyquotes.com/img/2019/09/rustic-layout-ideas-planner-luxury-installation-interior-backsplash-tile-huzname-shaker-styles-bath-beautiful-grey-design-apartment-remodel-817x540.jpg',
                    src3: 'https://alicisivar.com/wp-content/uploads/2018/09/8-Amazing-Simple-Bathroom-Theme-Ideas-awesome-simple-apartment.jpg',
                    value: '4.5',
                    type: 'Apartment',
                    price: 'IDR 35.000.000.000'
                },
                {
                    id: 5,
                    title: 'Modern Penthouse',
                    src: 'https://odis.homeaway.com/odis/listing/18842b0b-48df-4c82-b96a-064242b7af1f.c10.jpg',
                    src1: 'https://i.ytimg.com/vi/_U7P_c6puZo/maxresdefault.jpg',
                    src2: 'http://cdn.home-designing.com/wp-content/uploads/2014/06/Modern-Penthouse-Apartment.jpg',
                    src3: 'https://m.wsj.net/video/20190312/031119lotd_london_new/031119lotd_london_new_960x540.jpg',
                    value: '5.0',
                    type: 'Penthouse',
                    price: 'IDR 30.000.000.000'
                },
                {
                    id: 6,
                    title: 'Tall Apartment',
                    src: 'https://i.pinimg.com/originals/f8/c5/09/f8c50927c3d44ee8c9bc1d48b5f3d019.jpg',
                    src1: 'https://rumahdijual.com/attachments/jakarta-pusat/1272860d1400416170-apartment-green-pramuka-jakarta-pusat-gambar-3.jpg',
                    src2: 'http://2.bp.blogspot.com/-j_Wm6vB0V2w/VqdEK5q_9uI/AAAAAAAAABU/incG6Z-nJjE/s1600/Apartement%2BT%2BPlaza.jpg',
                    src3: 'https://rumahdijual.com/attachments/jakarta-pusat/738411d1382695078-t-plaza-bendungan-hilir-t-plaza-20-40benhil.jpg',
                    value: '5.0',
                    type: 'Apartment',
                    price: 'IDR 45.000.000.000'
                },
                {
                    id: 7,
                    title: 'Big Join Office',
                    src: 'https://www.truefit.com/getattachment/Blog/January-2018/Dream-Big-in-2018-Join-the-True-Fit-Team/TF-Boston-Office-lobby1.jpg.aspx',
                    src1: 'https://lh3.googleusercontent.com/2z234hrNCCUGuVMJGeQQaJ4TDwwozYLX7Bht7_1o0ZKXJmM8YYRvjs6p8-Ksfga7T_3XC5YA=w1080-h608-p-no-v0',
                    src2: 'https://s3-ap-southeast-1.amazonaws.com/xwork-gallery/rooms/images/3506/1549446519.82/3506_1549446519.82.sm.JPEG',
                    src3: 'https://files.propertywala.com/photos/4b/P20749113.training-room.18549835l.jpg',
                    value: '4.0',
                    type: 'Building',
                    price: 'IDR 33.000.000.000'
                },
                {
                    id: 8,
                    title: 'Simple Private Office',
                    src: 'https://officesnapshots.com/wp-content/uploads/2018/01/allsteel-showroom-los-angeles-wolcott-architecture-interiors-10-1200x800.jpg',
                    src1: 'https://nighthops.com/wp-content/uploads/2017/08/Simple-Contemporary-Executive-Office-Furniture.jpg',
                    src2: 'https://sc01.alicdn.com/kf/HTB1zNx9dlfM8KJjSZFhq6ARyFXab/Simple-L-Shape-New-High-Tech-Executive.jpg_350x350.jpg',
                    src3: 'https://secure.img2-fg.wfcdn.com/im/78832791/compr-r85/7498/74981367/marcum-solid-wood-l-shape-desk.jpg',
                    value: '4.5',
                    type: 'Office',
                    price: 'IDR 28.000.000.000'
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
        contactProperty(){

        }
    },
    mounted(){         
        this.getData();     
    },
  }
</script>
