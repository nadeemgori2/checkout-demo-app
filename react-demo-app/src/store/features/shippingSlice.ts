import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface for price object with currency and amount.
 */
interface PriceWithCurrency {
  currency: string;
  amount: number;
}

/**
 * Interface for a shipping option.
 */
interface ShippingOption {
  id: string;
  name: string;
  label: string;
  logo: string;
  fees: PriceWithCurrency;
}

/**
 * State structure for selected shipping option.
 */
interface ShippingState {
  selected: ShippingOption | null;
}

const initialState: ShippingState = {
  selected: null,
};

/**
 * Redux slice for managing shipping selection.
 */
const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    /**
     * Set the selected shipping option
     */
    selectShipping(state, action: PayloadAction<ShippingOption>) {
      state.selected = action.payload;
    },
  },
});

export const { selectShipping } = shippingSlice.actions;
export default shippingSlice.reducer;
