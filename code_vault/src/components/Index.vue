 <template>
   <div>
      <h1>Snippets</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Snippet</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Tag</th>
              <th>Actions</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="snippet in snippets" :key="snippet._id">
                  <td>{{ snippet.title }}</td>
                  <td>{{ snippet.body }}</td>
                  <td>{{ snippet.tag }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: snippet._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td>
                    <router-link :to="{name: 'view', params: { id: snippet._id }}" class="btn btn-primary">View</router-link>
                    | <button class="btn btn-danger" @click.prevent="deleteSnippet(snippet._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
 </template>

 <script>
  export default {
    data() {
        return {
          snippets: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/snippets';
      this.axios.get(uri).then(response => {
        this.snippets = response.data;
      });
    },
    methods: {
      viewSnippet(id){
        let uri = `http://localhost:4000/snippets/view/${id}`;
        this.axios.delete(uri).then(response => {
          this.snippets.splice(this.snippets.indexOf(id), 1);
        });
      },
      deleteSnippet(id)
      {
        let uri = `http://localhost:4000/snippets/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.snippets.splice(this.snippets.indexOf(id), 1);
        });
      }
    }
  }
 </script>