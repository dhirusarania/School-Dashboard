<template>
  <section class="navbar-spacing padding-top-30">
    <div class="v-container">
      <div style="display:flex; justify-content: space-between;align-items:center">
        <h4>All Classes</h4>
        <vs-button color="danger" type="border" @click="showSideSection">Add Student</vs-button>
      </div>

      <div id="A" class="close">
        <h3 class="white-text">Add New Student</h3>
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
              @change="changeClass"
              class="selectExample"
              id="ReceiverCountry"
              v-model="selectClass"
            >
              <vs-select-item
                :key="index"
                :value="item.id"
                :text="item.class"
                v-for="(item,index) in classList"
              />
            </vs-select>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Select Section</label>
            <vs-select
              class="selectExample"
              id="ReceiverCountry"
              @change="sectionSelected"
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

          <button type="button" class="btn btn-primary" @click="addClasses">Add Student</button>
          <button type="button" class="btn white-text" @click="closeModal">Cancel</button>
        </form>
      </div>

      <vs-table stripe max-items="10" pagination :data="allStudentListFiltered">
        <template slot="header">
          <div>
            <div style="display: flex">
              <div style="margin-right: 20px">
                <label for="exampleInputPassword1">Select Class</label>
                <vs-select
                  @change="changeClass"
                  class="selectExample"
                  id="ReceiverCountry"
                  v-model="selectClass"
                >
                  <vs-select-item
                    :key="index"
                    :value="item.id"
                    :text="item.class"
                    v-for="(item,index) in classList"
                  />
                </vs-select>
              </div>
              <div style="margin-right: 20px">
                <label for="exampleInputPassword1">Select Section</label>
                <vs-select
                  class="selectExample"
                  id="ReceiverCountry"
                  @change="sectionSelected"
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
            </div>
          </div>
        </template>
        <template slot="thead">
          <vs-th sort-key="id">ID</vs-th>
          <vs-th sort-key="name">Name</vs-th>
          <vs-th sort-key="section">Section</vs-th>
          <vs-th>Action</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].id">{{data[indextr].id}}</vs-td>

            <vs-td :data="data[indextr].name">{{data[indextr].name}}</vs-td>

            <vs-td :data="data[indextr].section">{{data[indextr].section}}</vs-td>

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
    selectClass: 1,
    selectSection: 1,
    sectionList: [],
    classList: [
      {
        id: 1,
        class: 5,
        section: [{ id: '1', name: 'A' }, { id: '2', name: 'B' }]
      },
      {
        id: 2,
        class: 6,
        section: [
          { id: '1', name: 'A' },
          { id: '2', name: 'B' },
          { id: '3', name: 'C' }
        ]
      }
    ],
    allStudentListFiltered: [],

    allStudentList: [
      {
        id: 1,
        class: 5,
        section: 'A',
        name: 'Sharanga'
      },
      {
        id: 2,
        class: 5,
        section: 'A',
        name: 'Partha'
      },
      {
        id: 3,
        class: 6,
        section: 'B',
        name: 'Dhiru'
      },
      {
        id: 4,
        class: 6,
        section: 'B',
        name: 'XYZ'
      }
    ]
  }),

  mounted() {
    this.allStudentListFiltered = this.allStudentList.filter(
      v => v.class == this.classList[0].class
    )

    var class_list = this.classList.filter(v => v.id == this.selectClass)
    if (class_list.length != 0) {
      this.sectionList = class_list[0].section
    }

    console.log(this.sectionList)
  },

  methods: {
    showSideSection: function() {
      $('#A').removeClass('close')
    },
    closeModal: function() {
      $('#A').addClass('close')
    },

    showSideSectionAdd: function() {
      this.action = 'Add New Area'
      this.group_id = this.groups[0].id
      $('#A').removeClass('close')
    },
    showSideSectionEdit: function(e) {
      this.action = 'Edit Area'

      this.filteredPricing = this.allStudentList.filter(v => v.id === e)[0]

      this.edit = this.filteredPricing.id

      this.state_id = this.filteredPricing.state_id
      this.group_id = this.filteredPricing.group_id
      this.town = this.filteredPricing.town
      this.center = this.filteredPricing.center
      this.duration = this.filteredPricing.duration

      console.log(this.filteredPricing)

      $('#A').removeClass('close')
    },
    closeModal: function() {
      this.filteredPricing = []

      this.edit = 0

      this.code = ''
      this.amount = ''

      $('#A').addClass('close')
    },
    sectionSelected: function() {
      this.allStudentListFiltered = this.allStudentList.filter(
        v =>
          v.class == this.classList[this.selectClass - 1].class &&
          v.section ==
            this.classList[this.selectClass - 1].section[this.selectSection - 1]
              .name
      )
    },
    changeClass: function() {
      console.log(this.classList[this.selectClass - 1].class)
      this.allStudentListFiltered = this.allStudentList.filter(
        v => v.class == this.classList[this.selectClass - 1].class
      )
      this.selectSection = 1

      var class_list = this.classList.filter(v => v.id == this.selectClass)
      if (class_list.length != 0) {
        this.sectionList = class_list[0].section
      }
    },
    addClasses: function() {
      console.log("add")

    }
  }
}
</script>
