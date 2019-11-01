<template>
  <section class="navbar-spacing padding-top-30">
    <div class="v-container">
      <div style="display:flex; justify-content: space-between;align-items:center">
        <h4>All Teachers</h4>
        <vs-button color="danger" type="border" @click="showSideSection">Add Teachers</vs-button>
      </div>

      <div id="A" class="close">
        <h3 class="white-text">Add New Teachers</h3>
        <form>
          <div class="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              type="text"
              class="form-control"
              id="financeAmount"
              placeholder="Class"
              autocomplete="off"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Select Class</label>
            <vs-select
              class="selectExample"
              id="ReceiverCountry"
              v-model="selectClass"
              @change="changeClass"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.class"
                v-for="(item,index) in allClasses"
              />
            </vs-select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Select Section</label>
            <vs-select
              class="selectExample"
              id="ReceiverCountry"
              v-model="selectSection"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.name"
                v-for="(item,index) in sectionList"
              />
            </vs-select>
          </div>

          <button type="button" class="btn btn-primary" @click="addTeacher">Add Teachers</button>
          <button type="button" class="btn white-text" @click="closeModal">Cancel</button>
        </form>
      </div>

      <vs-table stripe max-items="10" pagination :data="allTeachersList">
        <template slot="header">
 
        </template>
        <template slot="thead">
          <vs-th sort-key="id">ID</vs-th>
          <vs-th sort-key="name">Name</vs-th>
          <vs-th sort-key="classes">Classes</vs-th>
          <vs-th>Action</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].id">{{data[indextr].id}}</vs-td>

            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].classes">
              <p v-for="p in data[indextr].classes" :key="p.id" class="sections">{{p.section}}</p>
            </vs-td>

            <vs-td :data="data[indextr].id">
              <vs-button class="btnx" type="filled">Actions</vs-button>

              <vs-dropdown vs-trigger-click>
                <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
                <!-- <a href="#">Hola mundo</a> -->

                <vs-dropdown-menu>
                  <vs-dropdown-item @click="viewStudent(data[indextr].id)">View</vs-dropdown-item>
                  <vs-dropdown-item @click="deleteStudent(data[indextr].id)">Delete</vs-dropdown-item>
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
    sectionList: [],
    selectClass: 1 ,
    selectSection: 1 ,
    allClasses: [
      {
        id: '1',
        class: 5,
        section: [{ id: '1', name: 'A' }, { id: '2', name: 'B' }]
      },
      {
        id: '2',
        class: 6,
        section: [
          { id: '1', name: 'A' },
          { id: '2', name: 'B' },
          { id: '3', name: 'C' }
        ]
      }
    ],

    allTeachersList: [
      {
        id: 1,
         classes: [
          { id: '3', section: 'C' }
        ],
        name: 'Sharanga'
      },
      {
        id: 2,
         classes: [
          { id: '1', section: 'A' },
          { id: '3', section: 'C' }
        ],
        name: 'Partha'
      },
      {
        id: 3,
         classes: [
          { id: '1', section: 'A' },
          { id: '2', section: 'B' },
        ],
        name: 'Dhiru'
      },
      { id: 4,
         classes: [
          { id: '1', section: 'A' }
        ],
        name: 'XYZ'
      }
    ]
  }),

  mounted() {
 
      
       var class_list = this.allClasses.filter(v => v.id == this.selectClass)
      if (class_list.length != 0) {
        this.sectionList = class_list[0].section
      }

  },

  methods: {
    showSideSection: function() {
      $('#A').removeClass('close')
    },
    closeModal: function() {
      $('#A').addClass('close')
    },
    addTeacher: function() {
    //   $('#A').addClass('close')
    },
    changeClass: function() {

        console.log(this.selectClass)
       var class_list = this.allClasses.filter(v => v.id == this.selectClass)
      if (class_list.length != 0) {
        this.sectionList = class_list[0].section
      }

    },
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