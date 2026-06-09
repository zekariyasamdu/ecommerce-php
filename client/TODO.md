- [ ] figure out a better way of passing values to components
- [ ] Figure out a better way of writing components either a class or factories
- [ ] Make

so here are the problems I run into with this sytem:

1.  when using on componet two time in the same page
    it will refer to the same object so I plan to turn it into a function
2.

````
    const ProductScreen = {
    render: async () => {
    const header = await Header.render();
    const promotion = await Promotion.render();
    const search = await Search.render();
    const data = await QUERY.getProducts();
    const productItems = await Promise.all(
    data.map((item) => ProductItem.render(item)),
    );

        return `
          <div class="product-layout">
            ${header}
            ${promotion}
            ${search}
            <div class="product-container">
              ${productItems.join("")}
            </div>
          </div>
        `;

    },
    after_render: async () => {
    await Header.after_render();
    const data = await QUERY.getProducts();
    await Promise.all(data.map((item) => ProductItem.after_render(item)));
    },
    };
    export default ProductScreen;

    ```
    the Product screen gets blocked as it waits the await to query the data


3.

````

    const productItems = await Promise.all(
      data.map((item) => ProductItem.render(item)),
    );

```
I won't be able to attach even listenrs here because theitems are not yet rendered


```

new structue

```
function Name(props) {
  let actions = {}
  function before_render() {
    // have a loading screen that will await and pass the data as a prop  to render
  }
  function render() {
// actual page and push any actions to the let actions
  }
  function after_render() {
//exicutes all the actions that bubled up from all the lower items
  }
  return {
    before_render,
    render,
    after_render,
  };
}
```

what do you think of this new changes
