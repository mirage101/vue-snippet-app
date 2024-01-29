<template>
    <div>
      <h1>Create a code snippet</h1>
      <form @submit.prevent="addSnippet">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Title:</label>
              <input type="text" class="form-control" v-model="snippet.title">
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label>Code:</label>
                <textarea class="form-control" v-model="snippet.body" rows="5"></textarea>
              </div>
            </div>
          </div>
          <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label>Tag:</label>
        <select class="form-control" v-model="snippet.tag">
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="SASS">SASS</option>
          <option value="REACT">REACT</option>
          <option value="VUE">VUE</option>
          <option value="JAVASCRIPT">JAVASCRIPT</option>
          <option value="REDUX">REDUX</option>
          <option value="AJAX">AJAX</option>
          <option value="PHP">PHP</option>
          <option value="CUSTOM">CUSTOM</option>
        </select>
      </div>
    </div>
  </div>
          <br />
          <div class="form-group">
            <button class="btn btn-primary">Create</button>
          </div>
      </form>
    </div>
  </template>
  
   <script>
    export default {
        data(){
        return {
          snippet:{}
        }
    },
    methods: {
      addSnippet(){
        let uri = 'http://localhost:4000/snippets/add';
        this.axios.post(uri, this.snippet)
            .then(() => {
            this.$router.push({ name: 'snippets' });
            })
            .catch(error => {
            console.error('Error:', error);
            });
            }
       },
   
  }
   </script>