import {create} from 'zustand'
import { VendorAuthTypes } from '@/src/types/auth/vendor'

interface VendorAuthStore {
  vendorAuth: VendorAuthTypes
  setVendorAuth: (vendorAuth: VendorAuthTypes) => void
}

const initialState: VendorAuthTypes = {
  firstName: '',
  lastName: '',
  businessAddress: '',
  businessName: '',
  latitude: 0,
  longitude: 0,
  phoneNumber: '',
}

export const useVendorAuthStore = create<VendorAuthStore>((set) => ({
  vendorAuth: initialState,
  setVendorAuth: (newState: VendorAuthTypes) => set({ vendorAuth: newState }),
}))