export interface DeliveryFormData {
    addressType: string
    addressName: string
    country: string
    recipient: string
    searchAddress: string
    detailedAddress: string
    city: string
    region: string
    postalCode: string
    phoneCode: string
    phoneNumber: string
    requests: string
    saveAddress: boolean
}

export interface CheckoutForm extends DeliveryFormData {
    shippingMethod: string
    paymentMethod: string
}

export interface DeliveryAddressProps {
    data: DeliveryFormData
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    onApply: () => void
    onCountrySelect: (name: string, code: string) => void
}

export interface CarrierProps {
    shippingMethod: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export interface PaymentProps {
    paymentMethod: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}