import { RootState } from '@/redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ModalType = 'login' | 'movieSelect';

interface OpenActionPayload {
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
    open: (state, actions: PayloadAction<OpenActionPayload>) => {
      const { type } = actions.payload;
      state.type = type;
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    },
  },
});

export const selectModal = (state: RootState) => state.modal;
export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
