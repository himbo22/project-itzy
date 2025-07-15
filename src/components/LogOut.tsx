"use client";
import React, { useState } from "react";

const LogOut = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    setShowConfirm(false);
    alert("Bạn đã đăng xuất!");
    // Thêm logic chuyển hướng hoặc clear token nếu cần
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        LogOut
      </button>

      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="mb-4 font-medium">Bạn có muốn đăng xuất không?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600"
              >
                Có
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Không
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogOut;
