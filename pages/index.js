import Head from 'next/head';
import { Element } from 'react-scroll';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FAQs from '../components/Landing Page/FAQs';

export default function IndexPage() {
  return (
    <div className="bg-[#1a1a1c]">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ledgar</title>
        <style>
          {`
          html {
            scroll-behavior: smooth;
          }
          `}
        </style>
      </Head>

      {/* Navbar */}
      <div className="container mx-auto relative">
        {/* <img className="absolute top-0 left-0" src="circle1.svg" alt="circle" /> */}
        <div className="flex flex-col md:flec-row justify-between items-center pb-10 pt-4">
        <div>
          <img src="asset.png" alt='logo' className="my-10 w-1/3 mx-auto"/>
          </div>
          {/* <img src="navbar.png" alt="logo" className='w-20 h-20'/><span className="font-bold text-3xl font-grotesk flex justify-center items-center mt-4 mb-9" style={{
  background: "linear-gradient(to right, purple, red)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent"
}}>
  Budgetify
</span> */}

<div className="flex flex-col md:flex-row gap-8 items-center text-white text-lg cursor-pointer">
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
            <Link to="about" smooth={true} duration={500}>
              About us
            </Link>
            <Link to="faqs" smooth={true} duration={500}>
              FAQs
            </Link>
          </div>
        </div>

        <img className="absolute right-14 bottom-0 h-80" src="image.png" alt="" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-5">
            <p className="text-purple-500 font-bold text-3xl md:text-7xl capitalize items-">
              Track <br />  Save<br /> Manage
            </p>
            <p className="text-gray-500 text-sm ">
              Through our services you can easily track and manage expenses <br /> in your bank account and crypto wallet.
            </p>
            <div className="flex gap-2">
            <Link href="/dashboard">
            <button className="bg-blue-300 text-black font-semibold py-3 px-5 rounded-lg">Sign In</button>
           </Link> 
           </div>
          </div>
          <div>
            <img src="hero-illustration.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Features Section */} <Element name="services">
      <div className="container mx-auto mt-24">
        <p className="text-white text-3xl mb-10 font-semibold">Features</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg p-8">
          <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-full">
              <p className="text-white text-4xl">1</p>
            </div>
            <p className="text-primary font-bold text-2xl mt-4">Track Budgets</p>
            <div className="flex items-center mt-4">
              <p className="text-gray-500 ml-2">Easily track budgets, manually and in real-time. Use visual representations such as charts to view tracking details.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
          <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-full">
              <p className="text-white text-4xl">2</p>
            </div>
            <p className="text-primary font-bold text-2xl mt-4">Collaborate on Budgets</p>
            <div className="flex items-center mt-4">
              <p className="text-gray-500 ml-2">Invite friends and family to collaborate. Create a collaboration group with multiple users.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
          <div className="bg-primary w-16 h-16 flex items-center justify-center rounded-full">
              <p className="text-white text-4xl">3</p>
            </div>
            <p className="text-primary font-bold text-2xl mt-4">Manage Savings</p>
            <div className="flex items-center mt-4">
              <p className="text-gray-500 ml-2">Plan Savings and monitor your progess. Receive savings suggestions that steers up a good saving habit</p>
            </div>
          </div>
        </div>
      </div></Element>

      {/* Get Started */}
      <div className="container mx-auto mt-24">
        <p className="text-white text-3xl mb-10 font-semibold">Get Started</p>
        <div>
  <div className="flex items-center justify-center">
    <span className="text-white text-3xl mb-2">
      <i className="fas fa-user-plus"></i>
    </span>
  </div>
  <p className="text-white text-xl mt-2 mb-4 flex justify-center">Create an Account</p>
  <p className="text-gray-500 flex justify-center">
    {/* Sign up for an account on our platform. It's quick and easy! */}
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  <div>
    <div className="flex items-center justify-center mt-7 mb-4">
      <span className="text-white text-3xl mb-2">
        <i className="fas fa-chart-line"></i>
      </span>
    </div>
    <p className="text-white text-xl text-center mt-2 mb-4">Manually Track Budgets</p>
    <p className="text-gray-500 text-center">
      {/* Browse through a wide selection of unique NFTs in various categories. */}
    </p>
  </div>
  <div>
    <div className="flex items-center justify-center mt-7 mb-4">
      <span className="text-white text-3xl mb-2">
        <i className="fas fa-credit-card"></i>
      </span>
    </div>
    <p className="text-white text-xl text-center mt-2 mb-4">Link a Card/Wallets</p>
    <p className="text-gray-500 text-center">
      {/* Purchase your favorite NFTs or list your own creations for sale. */}
    </p>
  </div>

</div>
<div>
    <div className="flex items-center justify-center mt-7">
      <span className="text-white text-3xl mb-2">
        <i className="fas fa-hand-holding-usd"></i>
      </span>
    </div>
    <p className="text-white text-xl text-center mt-2 mb-4">Enjoy Financial Accountability</p>
    <p className="text-gray-500 text-center">
      {/* Start building your unique NFT collection and enjoy the benefits of ownership. */}
    </p>
  </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto mt-24"> <Element name="about">
  <div className="bg-primary p-8 rounded-3xl mb-20 flex items-center justify-center">
    <div className="w-2/3">
      <p className="text-primary rounded-lg px-3 text-2xl mb-6 font-bold bg-white w-3/12">ABOUT US</p>
      <p className="text-white text-xl mb-6 font-semibold ml-2">Our core values </p>
      <p className="text-gray-500 mb-4 ml-2">
        Integrity: Upholding transparency and ethical standards.
      </p>
      <p className="text-gray-500 mb-4 ml-2">
        Innovation: Harnessing technology for user-centric solutions.
      </p>
      <p className="text-gray-500 mb-4 ml-2">
        Security and Privacy: Ensuring data protection and confidentiality.
      </p>
      <p className="text-gray-500 mb-4 ml-2">
        Education and Empowerment: Promoting financial literacy and informed decisions.
      </p>
      <p className="text-gray-500 mb-4 ml-2">
        Collaborations: Partnering for enhanced services and value.
      </p>
      <p className="text-gray-500 mb-4 ml-2">
        Customer Support: Delivering exceptional user experience and support.
      </p>
      <p className="text-white text-xl mb-6 font-semibold ml-2">Mission </p>
      <p className="text-gray-500 mb-4 ml-2">
        Empowering financial well-being through intuitive and innovative finance management.
      </p>
    </div>
    <div className="w-1/3 flex justify-center items-center">
      <img src="aboutus.png" alt="Company Logo" className="w-80 h-auto" />
    </div>
  </div></Element>
  {/* FAQ Section */}
  <Element name="faqs"><FAQs /></Element>
</div>

     

      {/* Footer */}
      <footer className="bg-transparent py-5">
  <div className="container mx-auto text-white text-center">
    <div className="flex justify-center py-4">
      <a href="https://www.facebook.com">
        <i className="fab fa-facebook text-white text-2xl mx-2"></i>
      </a>
      <a href="https://www.twitter.com/budgetifyit">
        <i className="fab fa-twitter text-white text-2xl mx-2"></i>
      </a>
      <a href="https://www.instagram.com">
        <i className="fab fa-instagram text-white text-2xl mx-2"></i>
      </a>
    </div>
    <p>&copy; 2023 Ledgar. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}
