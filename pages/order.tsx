import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import QRCode from 'qrcode.react';
// import axios from 'axios';

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void;
}

interface OrderFormData {
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  userName: string;
  password: string;
  confirmpassword: string;
}

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = async (data) => {
    try {
      const order = {
        category: data.category,
        item: data.item,
        pickupDate: selectedDate,
        pickupTime: selectedTime,
        paymentMethod,
        bankDetails
      };
      await axios.post('/api/orders', order);
      // Redirect to dashboard on successful submission
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBankDetailsChange = (event) => {
    const { name, value } = event.target;
    setBankDetails((prevBankDetails) => ({
      ...prevBankDetails,
      [name]: value
    }));
  };
return (
   <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl mb-8">Second Life</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category:</label>
          <select {...register('category')} id="category" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="paper">Paper</option>
            <option value="iron">Iron</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="item" className="block text-gray-700 font-bold mb-2">Item:</label>
          <select {...register('item')} id="item" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {['Waste Paper', 'A4 Papers & Copies', 'Cartoon Papers', 'Iron pieces', 'Others'].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="pickupDate" className="block text-gray-700 font-bold mb-2">Pickup Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            className="shadow appearance-none border roundedw-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
            type="time"
            {...register('pickupTime')}
            id="pickupTime"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
            onChange={(event) => setSelectedTime(event.target.value)}
            />
            </div>
            <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-gray-700 font-bold mb-2">Payment Method:</label>
            <div className="flex">
            <label htmlFor="qr" className="flex items-center mr-4">
            <input
            type="radio"
            {...register('paymentMethod')}
            value="QR"
            checked={paymentMethod === 'QR'}
            onChange={handlePaymentMethodChange}
            id="qr"
            />
            <span className="ml-2">QR</span>
            </label>
            <label htmlFor="bankTransfer" className="flex items-center mr-4">
            <input
            type="radio"
            {...register('paymentMethod')}
            value="BankTransfer"
            checked={paymentMethod === 'BankTransfer'}
            onChange={handlePaymentMethodChange}
            id="bankTransfer"
            />
            <span className="ml-2">Bank Transfer</span>
            </label>
            <label htmlFor="cash" className="flex items-center mr-4">
            <input
            type="radio"
            {...register('paymentMethod')}
            value="Cash"
            checked={paymentMethod === 'Cash'}
            onChange={handlePaymentMethodChange}
            id="cash"
            />
            <span className="ml-2">Cash</span>
            </label>
            <label htmlFor="other" className="flex items-center mr-4">
            <input
            type="radio"
            {...register('paymentMethod')}
            value="Other"
            checked={paymentMethod === 'Other'}
            onChange={handlePaymentMethodChange}
            id="other"
            />
            <span className="ml-2">Other</span>
            </label>
            </div>
            {paymentMethod === 'BankTransfer' && (
            <div className="mt-4">
            <label htmlFor="bankName" className="block text-gray-700 font-bold mb-2">Bank Name:</label>
            <input
            type="text"
            {...register('bankName')}
            id="bankName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleBankDetailsChange}
            />
            <label htmlFor="branch" className="block text-gray-700 font-bold mb-2 mt-3">Branch:</label>
            <input
            type="text"
            {...register('branch')}
            id="branch"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleBankDetailsChange}
            />
            <label htmlFor="accountNo" className="block text-gray-700 font-bold mb-2 mt-3">Account No:</label>
            <input
            type="text"
            {...register('accountNo')}
            id="accountNo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleBankDetailsChange}
            />
<label htmlFor="accountName" className="blocktext-gray-700 font-bold mb-2 mt-3">Account Name:</label>
<input
type="text"
{...register('accountName')}
id="accountName"
className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
onChange={handleBankDetailsChange}
/>

</div>
)}
</div>
</div>
<div className="flex justify-center mt-8">
<button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>Cancel</button>
<button type="submit" className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded ml-4">{loading ? 'Loading...' : 'Submit Order'}</button>
</div>
</form>
</div>
</div>
</div>
);
};
export default SecondLifeOrderForm;
