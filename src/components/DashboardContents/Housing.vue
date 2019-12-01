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
        <p class="text-left headline">Housing</p>
    </v-col>
    <v-col
    :cols="11">
      <template>
        <v-progress-linear value="100" style="margin-top:2%" ></v-progress-linear>
      </template>
    </v-col>
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
            type: ['Housing']
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
      detail(item){
      this.$router.push(
          {
            name: 'HousingDetail',
            params: {id: item.id}
          }
        )
      },
    },
  }
</script>
