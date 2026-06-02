const ProfileScreen = {
  render: async () => {
    const header = await Header.render();

    return `
      <div > 
        ${header}
      </div>
    `;
  },
  after_render: async () => {
    await Header.after_render();
  },
};

export default ProfileScreen;
