import React, { useState } from 'react'

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className=" font-bold text-3xl p-4 m-4">Contact US</h1>
        <form onSubmit={handleSubmit} className="m-4 p-4 w-auto h-[90%] bg-gray-200 hover:bg-gray-[250] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-100 ease-in-out">
          <input type="text" className=" border border-black p-4 m-4 shadow-md" placeholder="Name" />
          <input type="text" className=" border border-black p-4 m-4 shadow-md" placeholder="Leave message for us!!" />
          <button className=" border border-black p-4 m-4 shadow-md bg-orange-400 rounded-lg cursor-pointer">Submit</button>
        </form>
        {isModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">Message sent successfully!</p>
            <button onClick={closeModal} className="mt-4 bg-orange-400 p-2 rounded-md text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact;