import "./search.css";

const Search = {
  render: async () => {
    return `
      <div class="search-card"> 
        <div class="search-left-content">
          <h2 class="search-title">Marketplace for all</h2>
          <p class="search-subtitle">Find anything you need, from electronics to real estate.</p>
          
          <div class="search-bar-wrapper">
            <div class="search-input-group">
              <span class="search-icon-inline">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input type="text" placeholder="Search..." class="search-input" />
            </div>
            <button class="search-submit-btn">Search</button>
          </div>
        </div>


      </div>
    `;
  },
  after_render: async () => {},
};

export default Search;
