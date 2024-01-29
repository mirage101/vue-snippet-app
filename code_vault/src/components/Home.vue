<template>
    <div class="row">
      <div class="col-md-8">
        <div>Code Vault</div>
  
        <div>
          <input type="text" v-model="searchTerm" placeholder="Search...ex: by title or tag">
          <!-- Conditionally render the list only if searchTerm is not empty -->
          <ul v-if="searchTerm !== ''">
            <li v-for="snippet in filteredSnippets" :key="snippet._id">
              <router-link :to="{name: 'view', params: { id: snippet._id }}">{{ snippet.title }}</router-link>
            </li>
            
          </ul>
          
        </div>
        
      </div>
      <button @click="toggleShowAll">Show All Snippets</button>
      <table class="table table-hover" v-if="showAll">
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
            <td>
              <router-link :to="{name: 'view', params: { id: snippet._id }}" class="btn btn-primary">View</router-link>
            </td>
          </tr>
        </tbody>
      </table>
       <!-- Pagination Controls -->
       <div v-if="showAll">
        <button :disabled="currentPage === 1" @click="prevPage">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      snippets: [],
      searchTerm: '',
      showAll: false,
      currentPage: 1,
      pageSize: 10  // Constant for number of results per page
        };
    },
    created() {
      let uri = 'http://localhost:4000/snippets';
      this.axios.get(uri).then(response => {
        this.snippets = response.data;
      });
    },
    computed: {
      filteredSnippets() {
        return this.snippets.filter(snippet => {
          return (
            snippet.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            snippet.tag.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        });
      },
      paginatedSnippets() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.snippets.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.snippets.length / this.pageSize);
    }
    },
    methods: {
      toggleShowAll() {
        this.showAll = !this.showAll;
      },
      nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
    }
  };
  </script>
  