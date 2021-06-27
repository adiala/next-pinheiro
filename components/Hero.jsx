export const Hero = () => {
    return (
        <>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: "100vh" }}>
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('court.jpg')" }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-30 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-0">
                                <h1 className="font-semibold text-5xl" style={{ color: "#D7BCA2" }}>Pinheiro de Azevedo</h1>
                                <p className="mt-4 text-lg" style={{ color: "#D7BCA2" }}>ADVOCACIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
