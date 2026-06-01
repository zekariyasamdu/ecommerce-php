const NotFound = {
  render: async () => {
    return `
      <div class="split-auth-wrapper">
      <h1>not found</h1>
      </div>
    `;
  },
  after_render: async () => {},
};
export default NotFound;
