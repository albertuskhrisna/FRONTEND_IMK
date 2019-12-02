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
    :cols="2">
        <p class="text-left headline">Office & Building</p>
    </v-col>
    <v-col
    :cols="10">
      <template>
        <v-progress-linear value="100" style="margin-top:2%" ></v-progress-linear>
      </template>
    </v-col>
    <v-col :cols="5"/>
    <v-col :cols="4">
        <v-btn-toggle
          v-model="icon"
        
        >

          <v-btn @click="showOffice()">
            Office
          </v-btn>
          <v-btn value="justify" @click="showBuilding()">
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
                title: 'Big Join Office',
                src: 'https://www.truefit.com/getattachment/Blog/January-2018/Dream-Big-in-2018-Join-the-True-Fit-Team/TF-Boston-Office-lobby1.jpg.aspx',
                value: '4.0',
                type: 'Building',
                price: 'IDR 33.000.000.000'
              },
              {
                id: 1,
                title: 'Simple Private Office',
                src: 'https://officesnapshots.com/wp-content/uploads/2018/01/allsteel-showroom-los-angeles-wolcott-architecture-interiors-10-1200x800.jpg',
                value: '4.5',
                type: 'Office',
                price: 'IDR 28.000.000.000'
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
            type: ['Mexico City','New Jersey','New York',"Washington D.C"],
            items_original: []
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
            name: 'OfficeDetail',
            params: {id: item.id}
          }
        )
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
      }
    },
    mounted(){         
        this.getData();     
    },
  }
</script>
