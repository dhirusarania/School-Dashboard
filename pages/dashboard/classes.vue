
<template>
  <section class="navbar-spacing padding-top-30">
    <!-- <div @click="goBack" class="backIcon">
      <i data-feather="arrow-left"></i>
    </div>-->

    <div id="A" class="close">
      <h3 class="white-text">Add New Class</h3>
      <form>
        <div class="form-group">
          <label for="exampleInputPassword1">Class</label>
          <input
            type="text"
            class="form-control"
            id="financeAmount"
            placeholder="Class"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Section</label>
          <div class="row">
            <div class="col-10">
              <div v-for="(p , index) in counter" :key="p.id" class="d-flex">
                <input
                  type="text"
                  class="form-control"
                  id="financeAmount"
                  :placeholder="index"
                  autocomplete="off"
                  style="margin-right: 10px;margin-bottom: 10px"
                />
                 <div v-if="index != 0" @click="removeSection"> 
                     <i style="cursor:pointer" data-feather="minus-circle"></i>
                 </div>
              </div>
            </div>
            <div class="col-2"  @click="addnewSection">
              <i style="cursor:pointer" data-feather="plus-circle"></i>
            </div>
          </div>
        </div>

        <button type="button" class="btn btn-primary" @click="addClasses">Add Classes</button>
        <button type="button" class="btn white-text" @click="closeModal">Cancel</button>
      </form>
    </div>

    <div class="v-container">
      <div style="display:flex; justify-content: space-between;align-items:center">
        <h4>All Classes</h4>
        <vs-button color="danger" type="border" @click="showSideSection">Add Class</vs-button>
      </div>

      <vs-table stripe max-items="10" pagination :data="allClasses">
        <template slot="header"></template>
        <template slot="thead">
          <vs-th sort-key="class">Classes</vs-th>
          <vs-th sort-key="section">Sections</vs-th>
          <vs-th>Action</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].class">{{data[indextr].class}}</vs-td>

            <vs-td :data="data[indextr].section">
              <p v-for="p in data[indextr].section" :key="p.id" class="sections">{{p.name}}</p>
            </vs-td>

            <vs-td :data="data[indextr].id">
              <vs-button class="btnx" type="filled">Actions</vs-button>

              <vs-dropdown vs-trigger-click>
                <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
                <!-- <a href="#">Hola mundo</a> -->

                <vs-dropdown-menu>
                  <vs-dropdown-item @click="goToSingleCustomer(data[indextr].id)">Add Section</vs-dropdown-item>
                  <vs-dropdown-item @click="goToSingleCustomer(data[indextr].id)">Add Student</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </section>
</template>


<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    allClasses: [
      {
        id: '1',
        class: '5',
        section: [{ id: '1', name: 'A' }, { id: '2', name: 'B' }]
      },
      {
        id: '2',
        class: '6',
        section: [
          { id: '1', name: 'A' },
          { id: '2', name: 'B' },
          { id: '3', name: 'C' }
        ]
      }
    ],
    date: '0',
    filteredCustomer: [],
    customer_data: [],
    parcel1: 1,
    select1: 1,
    options1: [{ text: 'Credit', value: 1 }, { text: 'Debit', value: 2 }],
    counter : 1
  }),

  //   mounted() {
  //   this.$store.dispatch('getFinanceByCustomer', localStorage.getItem("id")),
  //     this.$store.dispatch('getAllCustomers'),
  //     this.$store.dispatch('getParcelType')

  // },

  mounted() {
    // this.$vs.loading()
    feather.replace({ color: 'white' })
    // this.$store
    //   .dispatch('getFinanceByCustomer', localStorage.getItem('id'))
    //   .then(res => {
    //     console.log('res')
    //     console.log(res)
    //     this.getAllFinanceLocal = JSON.parse(JSON.stringify(res.data.finances))
    //     this.customer_data = JSON.parse(JSON.stringify(res.data.customer))
    //     this.$vs.loading.close()
    //   }),
    //   this.$store.dispatch('getParcelType')
  },

  computed: {
  },

  methods: {
    showSideSection: function() {
      $('#A').removeClass('close')
    },
    closeModal: function() {
      $('#A').addClass('close')
    },
    addnewSection: function() {
      this.counter++
       setTimeout(function(){ feather.replace({ color: 'white' }) }, 500); 
    },
    removeSection: function() {
      this.counter--
    },
    addClasses: function() {
      //   var payload = {
      //     financeDate: document.getElementById('financeDate').value,
      //     financeCustomerID: localStorage.getItem('id'),
      //     parcel: document.getElementById('parcel').value,
      //     ParcelType: this.parcel1,
      //     finance_type: this.select1,
      //     financeAmount: document.getElementById('financeAmount').value,
      //     amount: document.getElementById('financeAmount').value,
      //     financeNote: document.getElementById('financeNote').value
      //   }
      //   console.log(payload)
      //   this.$store.dispatch('addFinance', payload).then(res => {
      //     console.log(res)
      //     if (res.data.status == 200) {
      //       this.closeModal()
      //       this.$store
      //         .dispatch('getFinanceByCustomer', localStorage.getItem('id'))
      //         .then(res => {
      //           console.log(res)
      //           this.getAllFinanceLocal = JSON.parse(
      //             JSON.stringify(res.data.finances)
      //           )
      //         })
      //     }
      //   })
    },
    goBack: function() {
      //  this.$router.push('/dashboard/parcels/pending')
      this.$router.go(-1)
    }
  }
}
</script>


<style scoped>
.sections {
  padding-right: 10px;
}

.sections:not(:last-child):after {
  content: ',';
}
</style>