# cart-items



<!-- Auto Generated Below -->


## Events

| Event               | Description                                     | Type                  |
| ------------------- | ----------------------------------------------- | --------------------- |
| `proceedToShipping` | Emits final total and proceeds to shipping step | `CustomEvent<number>` |


## Dependencies

### Depends on

- [cart-items-skeleton](../cart-items-skeleton)
- [store-header](../store-header)
- [cart-item-row](../cart-item-row)
- [cart-coupon](../cart-coupon)

### Graph
```mermaid
graph TD;
  cart-items --> cart-items-skeleton
  cart-items --> store-header
  cart-items --> cart-item-row
  cart-items --> cart-coupon
  cart-items-skeleton --> store-header
  style cart-items fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
