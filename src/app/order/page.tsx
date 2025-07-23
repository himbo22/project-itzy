"use client";

import React, { useState, ChangeEvent } from "react";
import { Header } from "@/components/partials/header";
import { countries } from "@/app/order/countries";

interface Country {
  name: string;
  dial_code: string;
}

export default function CheckoutPage() {
  const [openOrder, setOpenOrder] = useState(true);
  const [openAddress, setOpenAddress] = useState(true);
  const [openCarrier, setOpenCarrier] = useState(true);
  const [openPayment, setOpenPayment] = useState(true);
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [searchCountry, setSearchCountry] = useState("");

  const [form, setForm] = useState({
    addressType: "Direct input",
    addressName: "",
    country: "",
    recipient: "",
    searchAddress: "",
    detailedAddress: "",
    city: "",
    region: "",
    postalCode: "",
    phoneCode: "",
    phoneNumber: "",
    requests: "",
    saveAddress: false,
    shippingMethod: "",
    paymentMethod: "",
  });

  const isAddressValid = Boolean(
    form.addressName &&
    form.country &&
    form.recipient &&
    form.searchAddress &&
    form.city &&
    form.region &&
    form.postalCode &&
    form.phoneNumber
  );

  const isFormValid = Boolean(
    isAddressValid &&
    form.shippingMethod &&
    form.paymentMethod
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const newValue = type === "checkbox" ? target.checked : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
  };

  const toggleCountryModal = () => {
    setCountryModalOpen(!countryModalOpen);
  };

  const handleCountrySelect = (name: string, code: string) => {
    setForm((prev) => ({
      ...prev,
      country: name,
      phoneCode: code,
    }));
    setCountryModalOpen(false);
  };

  const filteredCountries = countries.filter((country: Country) =>
    country.name.toLowerCase().includes(searchCountry.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-[64px] flex-1 container mx-auto px-4 py-6 lg:flex lg:space-x-6">
        <div className="flex-1 space-y-6">
          {/* Delivery Address */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="cursor-pointer flex items-center justify-between w-full p-4 border-b border-gray-200"
              onClick={() => setOpenAddress((o) => !o)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">📍</div>
                <h2 className="text-lg font-semibold">Delivery Address</h2>
              </div>
              <span className="text-2xl">{openAddress ? "▾" : "▸"}</span>
            </button>

            {openAddress && (
              <div className="p-4 space-y-4">
                {/* addressType */}
                <select
                  name="addressType"
                  value={form.addressType}
                  onChange={handleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
                >
                  <option>Direct input</option>
                </select>

                {/* Address Name */}
                <div>
                  <label className="block text-sm font-medium">Address Name *</label>
                  <input
                    type="text"
                    name="addressName"
                    value={form.addressName}
                    onChange={handleChange}
                    placeholder="Example: My Home"
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Country modal trigger */}
                <div>
                  <label className="block text-sm font-medium">Shipping Country/Region *</label>
                  <div
                    onClick={toggleCountryModal}
                    className="mt-1 w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 cursor-pointer"
                  >
                    {form.country || "Select Shipping Country/Region"}
                  </div>
                </div>

                {/* Recipient */}
                <div>
                  <label className="block text-sm font-medium">Recipient *</label>
                  <input
                    type="text"
                    name="recipient"
                    value={form.recipient}
                    onChange={handleChange}
                    placeholder="Name"
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Search Address */}
                <div>
                  <label className="block text-sm font-medium">Address *</label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      name="searchAddress"
                      value={form.searchAddress}
                      onChange={handleChange}
                      placeholder="Search Address"
                      className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                    />
                    <span className="absolute right-3 top-3 text-gray-500">🔍</span>
                  </div>
                </div>

                {/* Detailed Address */}
                <div>
                  <label className="block text-sm font-medium">Enter Detailed Address (Optional)</label>
                  <input
                    type="text"
                    name="detailedAddress"
                    value={form.detailedAddress}
                    onChange={handleChange}
                    placeholder="Detailed Address"
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                  <p className="text-xs text-gray-400 mt-1">ℹ️ Only English is allowed.</p>
                </div>

                {/* City, Region, Postal Code */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Enter City"
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">State / District / Region *</label>
                    <input
                      type="text"
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      placeholder="Enter Region"
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Postal Code *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="Enter Postal Code"
                      className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium">Contact Number *</label>
                  <div className="flex gap-2 mt-1">
                    <input
                      type="text"
                      name="phoneCode"
                      value={form.phoneCode}
                      onChange={handleChange}
                      placeholder="Country/Region Code"
                      className="w-1/3 border border-gray-300 rounded px-3 py-2"
                    />
                    <input
                      type="text"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="flex-1 border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>

                {/* Requests */}
                <div>
                  <label className="block text-sm font-medium">Delivery Requests</label>
                  <input
                    type="text"
                    name="requests"
                    value={form.requests}
                    onChange={handleChange}
                    placeholder="Delivery Requests"
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Save Address */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="saveAddress"
                    checked={form.saveAddress}
                    onChange={handleChange}
                    className="w-4 h-4 text-pink-500"
                  />
                  <span>Add to Delivery Address List</span>
                </div>

                {/* Apply button */}
                <div className="pt-4">
                  <button
                    onClick={() => alert("Address applied!")}
                    disabled={!isAddressValid}
                    className={`w-full py-2 px-4 rounded text-white font-semibold transition ${isAddressValid
                      ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                      : "bg-gray-300 cursor-not-allowed"
                      }`}
                  >
                    APPLY
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Country Modal */}
          {countryModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-[80vh] overflow-auto">
                <div className="p-4 border-b flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Select Country</h2>
                  <button
                    onClick={toggleCountryModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✖
                  </button>
                </div>
                <div className="p-4">
                  <input
                    type="text"
                    placeholder="Search country..."
                    value={searchCountry}
                    onChange={(e) => setSearchCountry(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                  />
                  <ul className="space-y-2 max-h-96 overflow-y-auto">
                    {filteredCountries.map((country: Country) => (
                      <li
                        key={country.name}
                        onClick={() => handleCountrySelect(country.name, country.dial_code)}
                        className="cursor-pointer px-3 py-2 hover:bg-gray-100 border rounded"
                      >
                        {country.name} ({country.dial_code})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="cursor-pointer flex items-center justify-between w-full p-4 border-b border-gray-200"
              onClick={() => setOpenCarrier((o) => !o)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">🚚</div>
                <h2 className="text-lg font-semibold">Select Carrier</h2>
              </div>
              <span className="text-2xl">{openCarrier ? "▾" : "▸"}</span>
            </button>

            {openCarrier && (
              <div className="p-4">
                <label className="block text-sm font-medium mb-1">Shipping Method *</label>
                <select
                  name="shippingMethod"
                  value={form.shippingMethod}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select shipping option</option>
                  <option value="standard">Standard - $5.00</option>
                  <option value="express">Express - $10.00</option>
                  <option value="pickup">Pickup - Free</option>
                </select>
              </div>
            )}
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="cursor-pointer flex items-center justify-between w-full p-4 border-b border-gray-200"
              onClick={() => setOpenPayment((o) => !o)}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">💳</div>
                <h2 className="text-lg font-semibold">Payment Method</h2>
              </div>
              <span className="text-2xl">{openPayment ? "▾" : "▸"}</span>
            </button>

            {openPayment && (
              <div className="p-4">
                <label className="block text-sm font-medium mb-1">Payment Method *</label>
                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select payment option</option>
                  <option value="credit_card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank_transfer">Bank Transfer</option>
                </select>
              </div>
            )}
          </div>

        </div>
        <aside className="w-full lg:w-1/3 mt-6 lg:mt-0">
          <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-24">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Total Product Amount</span>
              <span>$10.31</span>
            </div>
            <div className="mt-2 border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total Product Price</span>
              <span>$10.31</span>
            </div>

            <button
              disabled={!isFormValid}
              className={`w-full mt-4 py-2 rounded-lg font-medium transition-colors ${isFormValid
                  ? "bg-pink-500 hover:bg-pink-400 text-white cursor-pointer"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
            >
              $10.31 Proceed to Payment
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
