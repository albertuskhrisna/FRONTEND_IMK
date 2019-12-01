<template>
<v-container> 
  <v-row dense>
    <v-col :cols="3"/>
    <v-col
    :cols="2">
        <v-select
          :items="type"
          label="Locations"
          dense
          outlined
          single-line
          v-model="searchBy"
        ></v-select>
    </v-col>
    <v-col
    :cols="4">
      <v-text-field
            label="Search Property..."
            dense
            outlined
            prepend-inner-icon="mdi-magnify"
            single-line
            v-model="search"
          ></v-text-field>
    </v-col>
    <v-col :cols="3"/>
    <v-col
    :cols="1">
        <p class="text-left headline">Favorites</p>
    </v-col>
    <v-col
    :cols="11">
      <template>
        <v-progress-linear value="100" style="margin-top:2%" ></v-progress-linear>
      </template>
    </v-col>
    <v-col :cols="3"/>
    <v-col :cols="6">
        <v-btn-toggle
          v-model="icon"
        
        >
          <v-btn value="left" @click="showHousing()">
            Housing
          </v-btn>

          <v-btn value="center" @click="showApartment()">
            Apartment
          </v-btn>

          <v-btn value="right" @click="showPenthouse()">
            Penthouse
          </v-btn>

          <v-btn value="justify" @click="showOffice()">
            Office
          </v-btn>

          <v-btn  @click="showBuilding()">
            Building
          </v-btn>
        </v-btn-toggle>
    </v-col>
    <v-col :cols="3"/>
  </v-row>
  
    <v-row>
        <!-- <v-col :cols="3"/> -->
      <v-col
      :cols="6" v-for="item in filteredItem" :key="item.title">
       <template>
            <v-card
              :loading="loading"
               class="mx-auto my-12"
            >
                <v-row>
                    <v-col
                    :cols="6">
                    <v-img
                        height="400px"
                        :src=item.src
                    ></v-img>
                    </v-col>
                    <v-col
                    :cols="6"
                    :md="5">
                        <div>
                            <p class="text-left headline">{{item.title}}</p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare. Purus viverra accumsan in nisl nisi. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Lectus arcu bibendum at varius vel. Justo nec ultrices dui sapien eget.
                        </div>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn text @click="details(item)">Read More</v-btn>
                </v-card-actions>
            </v-card>
          </template>
      </v-col>
      <!-- <v-col :cols="3"/> -->
    </v-row>
</v-container> 

</template>

<script>
  export default {
    data () {
      return {
        item: 
        {
          title: '',
          src: '',
          value: '',
          price: '',
          type: '',
        },
        items: 
        [
          {
            id: 0,
            title: 'Mexican House',
            src: 'https://i.pinimg.com/originals/0f/bc/a7/0fbca7637190373f756df42c1f20cb0c.jpg',
            value: '4.5',
            type: 'Housing',
            price: 'IDR 28.000.000.000'
          },
          {
            id: 1,
            title: 'Old White House',
            src: 'https://d2ern41v4fpcqm.cloudfront.net/media/gallery/property-69329/i076900.jpg',
            value: '3.0',
            type: 'Housing',
            price: 'IDR 340.000.000'
          },
          {
            id: 2,
            title: 'Old Age House',
            src: 'https://cdn.mos.cms.futurecdn.net/pHX9MUPtvKjyKwJbfUsgS4-768-80.jpg',
            value: '4.0',
            type: 'Housing',
            price: 'IDR 450.000.000'
          },
          {
            id: 3,
            title: 'Cozy Apartment',
            src: 'https://odis.homeaway.com/odis/listing/b55ce4aa-1273-4906-a85b-6c216d3fe87d.f6.jpg',
            value: '4.5',
            type: 'Apartment',
            price: 'IDR 35.000.000.000'
          },
          {
            id: 4,
            title: 'Simple Apartment',
            src: 'https://q-cf.bstatic.com/images/hotel/max1024x768/109/109453792.jpg',
            value: '4.5',
            type: 'Apartment',
            price: 'IDR 35.000.000.000'
          },
          {
            id: 5,
            title: 'Modern Penthouse',
            src: 'https://odis.homeaway.com/odis/listing/18842b0b-48df-4c82-b96a-064242b7af1f.c10.jpg',
            value: '5.0',
            type: 'Penthouse',
            price: 'IDR 30.000.000.000'
          },
          {
            id: 6,
            title: 'Tall Apartment',
            src: 'https://i.pinimg.com/originals/f8/c5/09/f8c50927c3d44ee8c9bc1d48b5f3d019.jpg',
            value: '5.0',
            type: 'Apartment',
            price: 'IDR 45.000.000.000'
          },
          {
            id: 7,
            title: 'Big Join Office',
            src: 'https://www.truefit.com/getattachment/Blog/January-2018/Dream-Big-in-2018-Join-the-True-Fit-Team/TF-Boston-Office-lobby1.jpg.aspx',
            value: '4.0',
            type: 'Building',
            price: 'IDR 33.000.000.000'
          },
          {
            id: 8,
            title: 'Simple Private Office',
            src: 'https://officesnapshots.com/wp-content/uploads/2018/01/allsteel-showroom-los-angeles-wolcott-architecture-interiors-10-1200x800.jpg',
            value: '4.5',
            type: 'Office',
            price: 'IDR 28.000.000.000'
          },
        ],
        search: '',
        searchBy: '',
        type: ['Apartment','Penthouse','Office','Building','Housing'],
        tempItems: [],
        items_original: []
      }
    },
    computed: {
      filteredItem(){
        return this.items.filter(item =>
        {
          return item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.value.includes(this.search) ||
          item.price.includes(this.search)
        })
      },
    },
    methods: {
      getData(){
        this.items_original = this.items
      },
      restoreData(){
        this.items = this.items_original
      },
      details(item){
        this.$router.push(
          {
            name: 'Details',
            params: {id: item.id}
          }
        )
      },
      showHousing(){
        this.restoreData()
        var tempItems = []
        for(var i=0; i<this.items.length; i++)
        {
          if(this.items[i].type === "Housing"){
            tempItems.push(this.items[i])
          }
        }
        this.items = tempItems
      },
      showApartment(){
        this.restoreData()
        var tempItems = []
        for(var i=0; i<this.items.length; i++)
        {
          if(this.items[i].type === "Apartment"){
            tempItems.push(this.items[i])
          }
        }
        this.items = tempItems
      },
      showPenthouse(){
        this.restoreData()
        var tempItems = []
        for(var i=0; i<this.items.length; i++)
        {
          if(this.items[i].type === "Penthouse"){
            tempItems.push(this.items[i])
          }
        }
        this.items = tempItems
      },
      showOffice(){
        this.restoreData()
        var tempItems = []
        for(var i=0; i<this.items.length; i++)
        {
          if(this.items[i].type === "Office"){
            tempItems.push(this.items[i])
          }
        }
        this.items = tempItems
      },
      showBuilding(){
        this.restoreData()
        var tempItems = []
        for(var i=0; i<this.items.length; i++)
        {
          if(this.items[i].type === "Building"){
            tempItems.push(this.items[i])
          }
        }
        this.items = tempItems
      },
    },
    mounted(){
      this.getData()
    },
  }
</script>
