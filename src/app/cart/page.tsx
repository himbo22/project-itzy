'use client'
import { Header } from '@/components/partials/header'
import { useState } from 'react'
import Image from 'next/image'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'ITZY [Girls Will Be Girls] (SPECIAL EDITION)',
      price: 10.38,
      quantity: 1,
      image:
        'https://mystarroom-public-cdn.makestar.com/public/image/product/ITZY_%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%89%E1%85%A7%E1%86%AF%E1%84%87%E1%85%A1%E1%86%AB-%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg_2025-06-16_103513905489_thumb.jpeg',
      option: '2 versions (Random)',
    },
    {
      id: 2,
      name: 'ITZY [Girls Will Be Girls] (Box Ver.)',
      price: 12.27,
      quantity: 1,
      image:
        'https://mystarroom-public-cdn.makestar.com/public/image/product/Box_Ver._-Clean_%E1%84%86%E1%85%AE%E1%84%8C%E1%85%B5_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF_.png_2025-05-30_114548837056_thumb.jpeg',
      option: 'BOX Version',
    },
    {
      id: 3,
      name: 'ITZY [Girls Will Be Girls] (Folder Ver.)',
      price: 12.27,
      quantity: 1,
      image:
        'https://mystarroom-public-cdn.makestar.com/public/image/product/Folder_Ver._-Clean_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png_2025-05-30_114434626645_thumb.jpeg',
      option: 'FOLDER Version',
    },
  ])
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(cartItems.map((item) => item.id))
    } else {
      setSelectedIds([])
    }
  }

  const handleSelectItem = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds((prev) => [...prev, id])
    } else {
      setSelectedIds((prev) => prev.filter((itemId) => itemId !== id))
    }
  }

  const handleDeleteSelected = () => {
    const updatedItems = cartItems.filter(
      (item) => !selectedIds.includes(item.id)
    )
    setCartItems(updatedItems)
    setSelectedIds([])
  }

  const handleIncreaseQuantity = (id: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    setCartItems(updatedItems)
  }

  const handleDecreaseQuantity = (id: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    setCartItems(updatedItems)
  }

  const handleQuantityChange = (id: number, value: string) => {
    const number = parseInt(value)
    if (!isNaN(number) && number > 0) {
      const updatedItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: number } : item
      )
      setCartItems(updatedItems)
    }
  }

  const totalPrice = cartItems
    .filter((item) => selectedIds.includes(item.id))
    .reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-4 lg:p-6 mt-16 lg:mt-24 flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold inline">Cart</h1>
              <span className="ml-2 text-gray-500 block sm:inline">
                Total {cartItems.length} items
              </span>
              <span className="ml-0 sm:ml-2 text-pink-500 block sm:inline">
                {selectedIds.length} items selected
              </span>
            </div>
            <button
              onClick={handleDeleteSelected}
              className="flex items-center justify-center space-x-1 px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 cursor-pointer hover:bg-gray-100 transition-colors w-full sm:w-auto"
              disabled={selectedIds.length === 0}
            >
              🗑️ <span className="ml-1">Delete</span>
            </button>
          </div>

          <div className="border rounded-lg overflow-hidden">
            {/* Desktop Header */}
            <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 font-semibold text-gray-600">
              <div className="w-12 flex justify-center">
                <input
                  type="checkbox"
                  checked={selectedIds.length === cartItems.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </div>
              <div className="flex-1">Product Name</div>
              <div className="w-40 text-center">Quantity</div>
              <div className="w-32 text-right">Price</div>
            </div>

            {/* Mobile Header */}
            <div className="lg:hidden flex items-center bg-gray-100 px-4 py-2 font-semibold text-gray-600">
              <div className="w-12 flex justify-center">
                <input
                  type="checkbox"
                  checked={selectedIds.length === cartItems.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </div>
              <div className="flex-1">Select All</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="border-t">
                {/* Desktop Layout */}
                <div className="hidden lg:flex items-center px-4 py-4">
                  <div className="w-12 flex justify-center">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={(e) =>
                        handleSelectItem(item.id, e.target.checked)
                      }
                    />
                  </div>
                  <div className="flex-1 flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt="ITZY logo"
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-gray-500 text-sm">
                        Option: {item.option}
                      </p>
                    </div>
                  </div>
                  <div className="w-40 flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleDecreaseQuantity(item.id)}
                      className="w-8 h-8 border rounded-full hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      className="w-16 text-center border rounded-md"
                    />
                    <button
                      onClick={() => handleIncreaseQuantity(item.id)}
                      className="w-8 h-8 border rounded-full hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-32 flex justify-end items-center space-x-4">
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden px-4 py-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(item.id)}
                        onChange={(e) =>
                          handleSelectItem(item.id, e.target.checked)
                        }
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src={item.image}
                        alt="ITZY logo"
                        width={60}
                        height={60}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm sm:text-base truncate">
                        {item.name}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm mb-3">
                        Option: {item.option}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="w-7 h-7 border rounded-full hover:bg-gray-100 transition-colors text-sm"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) =>
                              handleQuantityChange(item.id, e.target.value)
                            }
                            className="w-12 text-center border rounded-md text-sm"
                          />
                          <button
                            onClick={() => handleIncreaseQuantity(item.id)}
                            className="w-7 h-7 border rounded-full hover:bg-gray-100 transition-colors text-sm"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-semibold text-sm sm:text-base">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary - Mobile: Full width, Desktop: Sidebar */}
        <div className="w-full lg:w-96 border rounded-lg p-4 lg:p-8 lg:h-fit lg:self-start">
          <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">
            Order Summary
          </h3>
          {selectedIds.length > 0 && (
            <div className="flex justify-between mb-4 lg:mb-6">
              <span className="font-semibold text-base lg:text-lg">
                Total price
              </span>
              <span className="font-bold text-xl lg:text-2xl">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          )}
          <button
            disabled={selectedIds.length === 0}
            className={`w-full transition-colors ${selectedIds.length > 0
                ? 'bg-pink-400 hover:bg-pink-500 cursor-pointer'
                : 'bg-gray-300'
              } text-white font-bold py-3 rounded-md`}
          >
            Payment
          </button>
        </div>
      </main>
    </div>
  )
}
