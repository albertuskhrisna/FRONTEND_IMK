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
            v-model="search"
          ></v-text-field>
    </v-col>
    <v-col :cols="3"/>
    <v-col
    :cols="1">
        <p class="text-left headline">Market</p>
    </v-col>
    <v-col
    :cols="11">
      <template>
        <v-progress-linear value="100" style="margin-top:2%" ></v-progress-linear>
      </template>
    </v-col>
  </v-row>
    <v-row>
      <v-col
      :cols="3" v-for="item in filteredItem" :key="item.title">
        <template>
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <v-img
                height="250"
                :src=item.src
              ></v-img>

              <v-card-title>{{item.title}}</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value=item.value
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">{{item.value}}</div>
                </v-row>
              </v-card-text>
              <v-card-title>{{item.price}}</v-card-title>

            </v-card>
          </template>
      </v-col>
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
              title: 'Mexican House',
              src: 'https://i.pinimg.com/originals/0f/bc/a7/0fbca7637190373f756df42c1f20cb0c.jpg',
              value: '4.5',
              type: 'Housing',
              price: 'IDR 28.000.000.000'
            },
            {
              title: 'Old White House',
              src: 'https://d2ern41v4fpcqm.cloudfront.net/media/gallery/property-69329/i076900.jpg',
              value: '3.0',
              type: 'Housing',
              price: 'IDR 340.000.000'
            },
            {
              title: 'Old Age House',
              src: 'https://cdn.mos.cms.futurecdn.net/pHX9MUPtvKjyKwJbfUsgS4-768-80.jpg',
              value: '4.0',
              type: 'Housing',
              price: 'IDR 450.000.000'
            },
            {
              title: 'Cozy Apartment',
              src: 'https://odis.homeaway.com/odis/listing/b55ce4aa-1273-4906-a85b-6c216d3fe87d.f6.jpg',
              value: '4.5',
              type: 'Apartment and Penthouse',
              price: 'IDR 35.000.000.000'
            },
            {
              title: 'Simple Apartment',
              src: 'https://q-cf.bstatic.com/images/hotel/max1024x768/109/109453792.jpg',
              value: '4.5',
              type: 'Apartment and Penthouse',
              price: 'IDR 35.000.000.000'
            },
            {
              title: 'Modern Penthouse',
              src: 'https://odis.homeaway.com/odis/listing/18842b0b-48df-4c82-b96a-064242b7af1f.c10.jpg',
              value: '5.0',
              type: 'Apartment and Penthouse',
              price: 'IDR 30.000.000.000'
            },
            {
              title: 'Tall Apartment',
              src: 'https://i.pinimg.com/originals/f8/c5/09/f8c50927c3d44ee8c9bc1d48b5f3d019.jpg',
              value: '5.0',
              type: 'Apartment and Penthouse',
              price: 'IDR 45.000.000.000'
            },
            {
              title: 'Big Join Office',
              src: 'https://www.truefit.com/getattachment/Blog/January-2018/Dream-Big-in-2018-Join-the-True-Fit-Team/TF-Boston-Office-lobby1.jpg.aspx',
              value: '4.0',
              type: 'Office and Building',
              price: 'IDR 33.000.000.000'
            },
            {
              title: 'Simple Private Office',
              src: 'https://officesnapshots.com/wp-content/uploads/2018/01/allsteel-showroom-los-angeles-wolcott-architecture-interiors-10-1200x800.jpg',
              value: '4.5',
              type: 'Office and Building',
              price: 'IDR 28.000.000.000'
            },
          ],
          search: '',
          searchBy: '',
          type: ['Apartment and Penthouse','Office and Building','Housing']
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
  }
</script>
