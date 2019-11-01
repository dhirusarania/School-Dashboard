<template>
  <section class="navbar-spacing padding-top-30">
    <div class="v-container">
      <div style="display:flex; justify-content: space-between;align-items:center">
        <h4>Student Profile</h4>
        <!-- <vs-button color="danger" type="border" @click="showSideSection">{{student_name}}</vs-button> -->
      </div>
      

      <div>
        Name: {{student_name}}
        Class: {{student_name}}
      </div>


    </div>
  </section>
</template>





<script>
import { mapState } from 'vuex'

export default {
 data() {
 return {
    id: this.$route.params.id,
    student_info: [{
      id: 10,
      name: 'Sharanga Pani',
      class: 6,
      section: 'B',
    }]
 }
  },

  mounted() {
 


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