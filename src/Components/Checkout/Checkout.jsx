import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES_AND_STATES } from "../../country-states";
import { useModals } from "../../useModal";
import ShowOrderModal from "../show-order";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import "./Checkout.css";

const gymOptions = {
  'Regular': '25,000',
  'Silver': '38,000',
  'Gold': '51,000',
  'Platinum': '64,000'
};

const Checkout = () => {
  // const [navbarVisible, setNavbarVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedGym, setSelectedGym] = useState('Regular');
  const [amount, setAmount] = useState(gymOptions[selectedGym]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
    cvc: "",
    card_number: "",
    city: "",
    postalCode: "",
    address: "",
    companyName: "",
    desc: "",
    amount: "",
    expire_date: "",
  });

  const handleGymChange = (event) => {
    setSelectedGym(event.target.value);
    setAmount(gymOptions[event.target.value]);
  };

  const isFormFilled =
    formData.firstName &&
    formData.lastName &&
    formData.address &&
    formData.phoneNumber &&
    formData.email &&
    formData.message &&
    formData.cvc &&
    formData.card_number &&
    formData.city &&
    formData.postalCode &&
    formData.companyName &&
    formData.desc &&
    formData.amount &&
    formData.expire_date;

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState("");
  };

  // const handleStateChange = (e) => {
  //   setSelectedState(e.target.value);
  // };

  const showInvoice = useModals(["showInvoice"]);

  function toggleShowInvoiceModal() {
    showInvoice.toggleModal("showInvoice");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isFormFilled) {
      showInvoice.toggleModal("showInvoice");
    } else {
      alert("Please fill out all the fields.");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <ScrollToTop />
      <div className="w-full h-full flex flex-col pt-[66px] md:pt-[114px]">

        <section className="relative border h-[300px] md:h-[400px]">
          <div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

          <img
            src="https://seolounge.radiantthemes.com/wp-content/uploads/2018/07/About-Best-Background-Image.jpg?id=836"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-12 items-center justify-center h-full w-full">
            <h1 className="font-medium md:font-semibold text-[40px] md:text-[60px] w-full sm:w-[550px] md:w-[560px] text-center leading-snug md:leading-[72px]">
              Hire a Translator
            </h1>
          </div>
        </section>

        <section className="relative p-10 md:px-[130px] md:py-[130px] flex flex-col md:flex-row gap-8 items-center md:items-start w-full justify-center">
          <div className="flex flex-col gap-8 items-start w-full justify-center md:pr-8 md:border-r">
            <div className="flex flex-col gap-2.5 text-[#181616] items-start justify-center md:w-[720px]">
              <h2 className="text-[32px] font-medium">Your information</h2>
            </div>

            <div className="w-full md:w-[720px]">
              <form
                className="mx-auto w-full flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col w-full gap-5 md:flex-row">
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <select
                  id="country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] pr-20"
                >
                  <option className="text-[17px]" value="">
                    Select a country / region
                  </option>
                  {Object.entries(COUNTRIES_AND_STATES.country)?.map(
                    ([code, name]) => (
                      <option key={code} value={code} className="text-[17px]">
                        {name}
                      </option>
                    )
                  )}
                </select>
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="Town / City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <div className="flex flex-col w-full gap-5 md:flex-row">
                  <input
                    type="address"
                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                    placeholder="Street Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="text"
                    className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                    placeholder="Apartment, suite, etc. (optional)"
                    name="text"
                  />
                </div>
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="ZIP / Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="Phone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </form>

              <div className="flex flex-col gap-5 mt-10 text-[#181616] items-start justify-center md:w-[720px]">
                <h2 className="text-[32px] font-medium">Leave a message</h2>

                <textarea
                  id="message"
                  rows={7}
                  className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] items-start w-full justify-center">
            <h4 className="font-bold text-[#f14f4a] leading-[28px]">
              Order translation from freelance translators
            </h4>
            <div className="flex flex-col items-start justify-center w-full gap-5">
              <p className="text-[#707070] font-normal text-[13px]">Forget the old rules. You can have the best people.
                Right now. Right here.</p>
                <label htmlFor="">What languages do you need?</label>
              <div className="flex items-center mb-3">
                <span className="font-bold"><small>Translate From:</small></span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300 ml-2"
                  type="text"
                  name="trnaslate_from"
                  placeholder="French"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center mb-3">
                <span className="font-bold"><small>Translate To:</small></span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300 ml-2"
                  type="text"
                  name="tr"
                  placeholder="English"
                  onChange={handleChange}
                />
              </div>
              <div className="relative w-full">
                <label className="font-bold text-[#f14f4a] leading-[28px]" htmlFor="Subscription type">FEE CHARGE:</label>
                <span><small> A connection fee of <b>₦25,800</b> is applied.</small></span>
              </div>
              <label className="font-bold text-[#f14f4a] leading-[28px]" htmlFor="Subscription type">PAYMENT CARD DETAILS</label>
              <form className="flex flex-wrap gap-3 w-full">
                <label className="relative w-full flex flex-col">
                  <span className="font-bold mb-3">Card number</span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="card_number"
                    placeholder="0000 0000 0000"
                    value={formData.card_number}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </label>

                <label className="relative flex-1 flex flex-col">
                  <span className="font-bold mb-3">Expire date</span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="expire_date"
                    placeholder="MM/YY"
                    value={formData.expire_date}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </label>

                <label className="relative flex-1 flex flex-col">
                  <span className="font-bold flex items-center gap-3 mb-3">
                    CVC/CVV
                    <span className="relative group">
                      <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                        Hey ceci est une infobulle !
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="cvc"
                    placeholder="&bull;&bull;&bull;"
                    value={formData.cvc}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </label>
              </form>

              <p className="text-[#707070] mt-[-15px] font-normal text-[13px]">
                Secure Payment: Card details are encrypted and securely processed
              </p>
            </div>

            <p className="text-[#161616] font-normal text-[16px] text-left">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <Link
                to="/privacy-policy"
                className="text-[#a20401] cursor-pointer"
              >
                privacy policy.
              </Link>
            </p>

            <button
              type="submit"
              className="text-base font-medium text-white bg-orange-500 rounded-md md:rounded-md px-7 md:px-12 py-[15px] hover:bg-green-600 w-full mt-[22px] transition-colors"
              // onClick={toggleShowInvoiceModal}
              onClick={handleSubmit}
            >
              PAY NOW
            </button>
          </div>
        </section>

        <ShowOrderModal
          show={showInvoice.modals.showInvoice.show}
          toggle={toggleShowInvoiceModal}
        />
      </div>
    </>
  );
};

export default Checkout;
