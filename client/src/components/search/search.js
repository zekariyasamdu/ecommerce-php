import "./search.css";

function Search() {
  return {
    before_render: () => "",

    render: async () => {
      return `
        <div class="search-card"> 
          <div class="search-left-content">
            <h2 class="search-title">Marketplace for all</h2>
            <p class="search-subtitle">
              Find anything you need, from electronics to real estate.
            </p>

            <div class="search-bar-wrapper">
              <div class="search-input-group">
                <span class="search-icon-inline">
                  <i class="search-icon" data-lucide="search"></i>
                </span>

                <input
                  id="search-input"
                  type="text"
                  placeholder="Search..."
                  class="search-input"
                />
              </div>

              <button class="search-submit-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      `;
    },

    after_render: async () => {},
  };
}

export default Search;
