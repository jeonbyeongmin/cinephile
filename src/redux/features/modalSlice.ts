import { RootState } from '@/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ModalType = 'login' | 'movieSelect';

interface ModalActionPayload {
  type: ModalType;
}

interface ModalState {
  type: ModalType | null;
  isOpen: boolean;
}

const initialState: ModalState = {
  type: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, actions: PayloadAction<ModalActionPayload>) => {
      const { type } = actions.payload;
      state.type = type;
      state.isOpen = true;
    },
    close: state => {
      state.type = null;
      state.isOpen = false;
    },
    toggle: (state, actions: PayloadAction<ModalActionPayload>) => {
      const { type } = actions.payload;
      if (state.isOpen && state.type === type) {
        state.type = null;
        state.isOpen = false;
      } else {
        state.type = type;
        state.isOpen = true;
      }
    },
  },
});

export const selectModal = (state: RootState) => state.modal;
export const { open, close, toggle } = modalSlice.actions;

export default modalSlice.reducer;
