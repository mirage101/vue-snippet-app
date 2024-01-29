<template>
     <div>
    <h1>{{snippet.title}}</h1>
    <pre>
        <code>
            {{snippet.body}}
        </code>
    </pre>
    <!--check if admin
    <button class="btn btn-danger" @click.prevent="deleteSnippet(snippet._id)">Delete</button>
    -->
    </div>
</template>
<style scoped>
pre code {
  background-color: #eee;
  border: 1px solid #999;
  display: block;
  padding: 20px;
}
</style>
<script>
    export default {
        data() {
        return {
          snippet: {}
        }
      },
      created() {
        let uri = `http://localhost:4000/snippets/view/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.snippet = response.data;
        });
      },
    }
   </script>