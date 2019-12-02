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
    :cols="3">
        <p class="text-left headline">Apartment & Penthouse</p>
    </v-col>
    <v-col
    :cols="9">
      <template>
        <v-progress-linear value="100" style="margin-top:2%" ></v-progress-linear>
      </template>
    </v-col>
    <v-col :cols="5"/>
    <v-col :cols="4">
        <v-btn-toggle
          v-model="icon"
        >
          <v-btn @click="showApartment()">
            Apartment
          </v-btn>
          <v-btn @click="showPenthouse()">
            Penthouse
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
                            <v-rating
                                :value=item.value
                                color="amber"
                                dense
                                half-increments
                                readonly
                                size="14"
                            ></v-rating>
                            <p class="text-left">{{item.price}}</p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare. Purus viverra accumsan in nisl nisi. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor.
                        </div>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn text @click="detail(item)">Read More</v-btn>
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
        items:
        [
          {
            id: 0,
            title: 'Simple Apartment',
            src: 'https://q-cf.bstatic.com/images/hotel/max1024x768/109/109453792.jpg',
            value: '4.5',
            type: 'Apartment',
            price: 'IDR 35.000.000.000'
          },
          {
            id: 1,
            title: 'Cozy Apartment',
            src: 'https://odis.homeaway.com/odis/listing/b55ce4aa-1273-4906-a85b-6c216d3fe87d.f6.jpg',
            value: '4.5',
            type: 'Apartment',
            price: 'IDR 35.000.000.000'
          },
          {
            id: 2,
            title: 'Modern Penthouse',
            src: 'https://odis.homeaway.com/odis/listing/18842b0b-48df-4c82-b96a-064242b7af1f.c10.jpg',
            value: '5.0',
            type: 'Penthouse',
            price: 'IDR 30.000.000.000'
          },
          {
            id: 3,
            title: 'Tall Apartment',
            src: 'https://i.pinimg.com/originals/f8/c5/09/f8c50927c3d44ee8c9bc1d48b5f3d019.jpg',
            value: '5.0',
            type: 'Apartment',
            price: 'IDR 45.000.000.000'
          },
        ],
        item:
        {
          title: '',
          src: '',
          value: '',
          type: '',
          price: ''
        },
        search: '',
        searchBy: '',
        icon: '',
        loading: false,
        items_original: [],
        type: ['Mexico City','New Jersey','New York',"Washington D.C"]
      }
    },
    computed: 
    {
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
      detail(item){
        this.$router.push(
          {
            name: 'ApartmentDetail',
            params: {id: item.id}
          }
        )
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
      }
    },
    mounted(){
      this.getData();
    }
  }
</script>
