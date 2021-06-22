export const Footer = () => {
    return (
      <footer className="pt-8 pb-6" style={{backgroundColor: "#162836"}}>
          
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col flex-wrap justify-center items-center gap-6">
                <img src='pinheiro-logo-full.svg' className="h-24"/>
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 rounded-full outline-none focus:outline-none p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>                
            </div>            

          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}Pinheiro de Azevedo Advocacia
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }