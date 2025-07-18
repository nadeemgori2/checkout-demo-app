/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CartCoupon {
        /**
          * Currently applied coupon code (if any)
         */
        "appliedCoupon": string;
        /**
          * Discount amount to display when coupon is applied
         */
        "discountAmount": number;
    }
    interface CartItemRow {
        /**
          * Single cart item object to display in the row
         */
        "item": CartItem;
    }
    interface CartItems {
    }
    /**
     * Skeleton loader for the cart items component.
     * Displayed while cart data is being fetched.
     */
    interface CartItemsSkeleton {
    }
    /**
     * PaymentConfirmed component
     * Final confirmation screen shown after a successful checkout.
     */
    interface PaymentConfirmed {
    }
    /**
     * ShippingCompanies Component
     * Displays a list of shipping options and handles user selection and submission.
     */
    interface ShippingCompanies {
        /**
          * Cart total passed from parent
         */
        "cartTotal": number;
    }
    /**
     * StoreHeader Component
     * Reusable header for all checkout steps displaying the store name and navigation breadcrumb.
     */
    interface StoreHeader {
        /**
          * Current step in the checkout process (e.g., cart, checkout, shipping)
         */
        "currentStep": string;
        /**
          * Name of the store to display
         */
        "storeName": string;
    }
}
export interface CartCouponCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCartCouponElement;
}
export interface CartItemsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCartItemsElement;
}
export interface PaymentConfirmedCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPaymentConfirmedElement;
}
export interface ShippingCompaniesCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLShippingCompaniesElement;
}
declare global {
    interface HTMLCartCouponElementEventMap {
        "apply": string;
        "remove": void;
    }
    interface HTMLCartCouponElement extends Components.CartCoupon, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCartCouponElementEventMap>(type: K, listener: (this: HTMLCartCouponElement, ev: CartCouponCustomEvent<HTMLCartCouponElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCartCouponElementEventMap>(type: K, listener: (this: HTMLCartCouponElement, ev: CartCouponCustomEvent<HTMLCartCouponElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCartCouponElement: {
        prototype: HTMLCartCouponElement;
        new (): HTMLCartCouponElement;
    };
    interface HTMLCartItemRowElement extends Components.CartItemRow, HTMLStencilElement {
    }
    var HTMLCartItemRowElement: {
        prototype: HTMLCartItemRowElement;
        new (): HTMLCartItemRowElement;
    };
    interface HTMLCartItemsElementEventMap {
        "proceedToShipping": number;
    }
    interface HTMLCartItemsElement extends Components.CartItems, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCartItemsElementEventMap>(type: K, listener: (this: HTMLCartItemsElement, ev: CartItemsCustomEvent<HTMLCartItemsElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCartItemsElementEventMap>(type: K, listener: (this: HTMLCartItemsElement, ev: CartItemsCustomEvent<HTMLCartItemsElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCartItemsElement: {
        prototype: HTMLCartItemsElement;
        new (): HTMLCartItemsElement;
    };
    /**
     * Skeleton loader for the cart items component.
     * Displayed while cart data is being fetched.
     */
    interface HTMLCartItemsSkeletonElement extends Components.CartItemsSkeleton, HTMLStencilElement {
    }
    var HTMLCartItemsSkeletonElement: {
        prototype: HTMLCartItemsSkeletonElement;
        new (): HTMLCartItemsSkeletonElement;
    };
    interface HTMLPaymentConfirmedElementEventMap {
        "returnToStore": void;
    }
    /**
     * PaymentConfirmed component
     * Final confirmation screen shown after a successful checkout.
     */
    interface HTMLPaymentConfirmedElement extends Components.PaymentConfirmed, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPaymentConfirmedElementEventMap>(type: K, listener: (this: HTMLPaymentConfirmedElement, ev: PaymentConfirmedCustomEvent<HTMLPaymentConfirmedElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPaymentConfirmedElementEventMap>(type: K, listener: (this: HTMLPaymentConfirmedElement, ev: PaymentConfirmedCustomEvent<HTMLPaymentConfirmedElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPaymentConfirmedElement: {
        prototype: HTMLPaymentConfirmedElement;
        new (): HTMLPaymentConfirmedElement;
    };
    interface HTMLShippingCompaniesElementEventMap {
        "shippingSelected": ShippingOption;
        "backToCart": void;
        "proceedToConfirmed": void;
    }
    /**
     * ShippingCompanies Component
     * Displays a list of shipping options and handles user selection and submission.
     */
    interface HTMLShippingCompaniesElement extends Components.ShippingCompanies, HTMLStencilElement {
        addEventListener<K extends keyof HTMLShippingCompaniesElementEventMap>(type: K, listener: (this: HTMLShippingCompaniesElement, ev: ShippingCompaniesCustomEvent<HTMLShippingCompaniesElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLShippingCompaniesElementEventMap>(type: K, listener: (this: HTMLShippingCompaniesElement, ev: ShippingCompaniesCustomEvent<HTMLShippingCompaniesElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLShippingCompaniesElement: {
        prototype: HTMLShippingCompaniesElement;
        new (): HTMLShippingCompaniesElement;
    };
    /**
     * StoreHeader Component
     * Reusable header for all checkout steps displaying the store name and navigation breadcrumb.
     */
    interface HTMLStoreHeaderElement extends Components.StoreHeader, HTMLStencilElement {
    }
    var HTMLStoreHeaderElement: {
        prototype: HTMLStoreHeaderElement;
        new (): HTMLStoreHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "cart-coupon": HTMLCartCouponElement;
        "cart-item-row": HTMLCartItemRowElement;
        "cart-items": HTMLCartItemsElement;
        "cart-items-skeleton": HTMLCartItemsSkeletonElement;
        "payment-confirmed": HTMLPaymentConfirmedElement;
        "shipping-companies": HTMLShippingCompaniesElement;
        "store-header": HTMLStoreHeaderElement;
    }
}
declare namespace LocalJSX {
    interface CartCoupon {
        /**
          * Currently applied coupon code (if any)
         */
        "appliedCoupon"?: string;
        /**
          * Discount amount to display when coupon is applied
         */
        "discountAmount"?: number;
        /**
          * Event emitted when a coupon is applied
         */
        "onApply"?: (event: CartCouponCustomEvent<string>) => void;
        /**
          * Event emitted when a coupon is removed
         */
        "onRemove"?: (event: CartCouponCustomEvent<void>) => void;
    }
    interface CartItemRow {
        /**
          * Single cart item object to display in the row
         */
        "item"?: CartItem;
    }
    interface CartItems {
        /**
          * Emits final total and proceeds to shipping step
         */
        "onProceedToShipping"?: (event: CartItemsCustomEvent<number>) => void;
    }
    /**
     * Skeleton loader for the cart items component.
     * Displayed while cart data is being fetched.
     */
    interface CartItemsSkeleton {
    }
    /**
     * PaymentConfirmed component
     * Final confirmation screen shown after a successful checkout.
     */
    interface PaymentConfirmed {
        /**
          * Emits an event to navigate back to the store
         */
        "onReturnToStore"?: (event: PaymentConfirmedCustomEvent<void>) => void;
    }
    /**
     * ShippingCompanies Component
     * Displays a list of shipping options and handles user selection and submission.
     */
    interface ShippingCompanies {
        /**
          * Cart total passed from parent
         */
        "cartTotal"?: number;
        /**
          * Emits event to navigate back to cart
         */
        "onBackToCart"?: (event: ShippingCompaniesCustomEvent<void>) => void;
        /**
          * Emits event to proceed to confirmation page
         */
        "onProceedToConfirmed"?: (event: ShippingCompaniesCustomEvent<void>) => void;
        /**
          * Emits selected shipping option
         */
        "onShippingSelected"?: (event: ShippingCompaniesCustomEvent<ShippingOption>) => void;
    }
    /**
     * StoreHeader Component
     * Reusable header for all checkout steps displaying the store name and navigation breadcrumb.
     */
    interface StoreHeader {
        /**
          * Current step in the checkout process (e.g., cart, checkout, shipping)
         */
        "currentStep"?: string;
        /**
          * Name of the store to display
         */
        "storeName"?: string;
    }
    interface IntrinsicElements {
        "cart-coupon": CartCoupon;
        "cart-item-row": CartItemRow;
        "cart-items": CartItems;
        "cart-items-skeleton": CartItemsSkeleton;
        "payment-confirmed": PaymentConfirmed;
        "shipping-companies": ShippingCompanies;
        "store-header": StoreHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cart-coupon": LocalJSX.CartCoupon & JSXBase.HTMLAttributes<HTMLCartCouponElement>;
            "cart-item-row": LocalJSX.CartItemRow & JSXBase.HTMLAttributes<HTMLCartItemRowElement>;
            "cart-items": LocalJSX.CartItems & JSXBase.HTMLAttributes<HTMLCartItemsElement>;
            /**
             * Skeleton loader for the cart items component.
             * Displayed while cart data is being fetched.
             */
            "cart-items-skeleton": LocalJSX.CartItemsSkeleton & JSXBase.HTMLAttributes<HTMLCartItemsSkeletonElement>;
            /**
             * PaymentConfirmed component
             * Final confirmation screen shown after a successful checkout.
             */
            "payment-confirmed": LocalJSX.PaymentConfirmed & JSXBase.HTMLAttributes<HTMLPaymentConfirmedElement>;
            /**
             * ShippingCompanies Component
             * Displays a list of shipping options and handles user selection and submission.
             */
            "shipping-companies": LocalJSX.ShippingCompanies & JSXBase.HTMLAttributes<HTMLShippingCompaniesElement>;
            /**
             * StoreHeader Component
             * Reusable header for all checkout steps displaying the store name and navigation breadcrumb.
             */
            "store-header": LocalJSX.StoreHeader & JSXBase.HTMLAttributes<HTMLStoreHeaderElement>;
        }
    }
}
