import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle, Home } from "lucide-react";
import TopBar from "../Sample/TopBar";
import { useLocation, useNavigate } from "react-router";

const SuccessPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location?.state?.data;
  const address = location?.state?.adress;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? bookingData.image.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === bookingData.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const BookingDetail = ({ label, value }) => (
    <div className="flex flex-col space-y-1">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );

  if (!bookingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-lg font-medium text-gray-700">Loading booking details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <div className="flex items-center space-x-4">
              <CheckCircle className="text-white w-12 h-12" />
              <div className="text-white">
                <h1 className="text-2xl font-bold">Booking Confirmed</h1>
                <p className="text-blue-100">Your reservation has been successfully processed</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Carousel */}
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={bookingData.image[currentImageIndex]}
                  alt={`Room view ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={handlePrevImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <BookingDetail label="Room Type" value={bookingData.roomType} />
                  <BookingDetail label="Number of Adults" value={bookingData.adults} />
                  <BookingDetail label="Number of Children" value={bookingData.children} />
                  <BookingDetail label="Duration of Stay" value={`${bookingData.numberOfDays} days`} />
                  <BookingDetail label="Check-in Date" value={bookingData.checkInDate} />
                  <BookingDetail label="Check-out Date" value={bookingData.checkOutDate} />
                  <BookingDetail 
                    label="Total Amount" 
                    value={
                      <span className="text-lg font-semibold text-blue-600">
                        {bookingData.totalAmounttoPay}
                      </span>
                    } 
                  />
                  <BookingDetail label="Address" value={bookingData.Adress || address} />
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-center sm:text-left">
                  Thank you for choosing our services. We look forward to hosting you!
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SuccessPage;