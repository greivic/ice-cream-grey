import React from 'react';

function Footer() {
    return (
        <>
          <footer className="input-background-color text-white py-8 pt-20 pb-10">
            <div className="container mx-auto flex flex-col items-center px-4 mb-10">
              <div className="flex flex-col items-center pt-2">
                <img src="/src/assets/logo-footer.png" alt="Logo" className="h-10 w-20"/>
              </div>
              <div className="mt-8 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full">
                <hr className="w-1/2 border-t-1 border-white"/>
                <hr className="w-1/2 border-t-1 border-white"/>
              </div>
              <div className="mt-8 flex flex-col md:flex-row items-start justify-between w-full">
                <div className="flex flex-col md:flex-row items-start justify-start w-1/2">
                  <a href="#" className="text-lg font-semibold md:mb-0 hover:text-gray-300 mr-4">ABOUT US</a>
                  <a href="#" className="text-lg font-semibold md:mb-0 hover:text-gray-300 mr-4">BLOG</a>
                  <a href="#" className="text-lg font-semibold md:mb-0 hover:text-gray-300">CATEGORIES</a>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-start w-1/2">
                  <a href="#" className="text-lg font-semibold md:mb-0 hover:text-gray-300 mr-4 pl-3">LEARN MORE ABOUT OUR
                    PRODUCTS</a>
                  <a href="#" className="font-semibold md:mb-0 hover:text-gray-300 text-5xl font-myriadpro ml-20">SCOOP</a>
                </div>
              </div>
            </div>
          </footer>


          <footer className="footer-background-color text-white py-8 pt-20 pb-10">
            <div className="container mx-auto flex flex-col items-center px-4 mb-10">
              <div className="w-full flex justify-center">
                <form
                    className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-5 w-full max-w-full">
                  <div className="mb-4 flex items-center">
                    <p className="text-sm">SUBSCRIBE<br/> TO OUR <br/>NEWSLETTER</p>
                  </div>
                  <input type="text" placeholder="Name"
                         className="flex-grow h-10 px-4 py-3 input-background-color"/>
                  <input type="email" placeholder="E-mail"
                         className="flex-grow h-10 px-4 py-3 input-background-color"/>
                  <button
                      type="submit"
                      className="bg-white hover:bg-gray-300 text-black py-1 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 pl-10 pr-10"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="mt-8 flex flex-col md:flex-row items-center space-x-0 md:space-x-4 w-full">
                <hr className="w-1/2 border-t-1 border-white"/>

                <div className="flex items-center mt-2 md:mt-0">
                  <a href="#" className="text-white hover:text-gray-500 flex items-center">
                    <i className="fab fa-instagram"></i>
                    <span className="ml-2">@icj_icecreamjunction</span>
                  </a>
                </div>

                <div className="flex items-center mt-2 md:mt-0">
                  <a href="#" className="text-white hover:text-gray-500 flex items-center">
                    <i className="fab fa-facebook-f"></i>
                    <span className="ml-2">@icj_icecreamjunction</span>
                  </a>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="#" className="text-white hover:text-gray-500 flex items-center">
                    <i className="fab fa-whatsapp"></i>
                    <span className="ml-2">@1234567890</span>
                  </a>
                </div>

                <hr className="w-1/2 border-t-1 border-white"/>
              </div>
            </div>
          </footer>

        </>
    )
        ;
}

export default Footer;
