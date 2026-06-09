function Name(props) {
  let actions = [];
  let _data = null;

  return {
    before_render: () => `<div>loading...</div>`,
    render: async () => {
      _data = await QUERY.getProducts();
      return `<div>${_data.name}</div>`;
    },
    after_render: () => {
      actions.forEach(async (cb) => await cb(_data));
    },
  };
}
