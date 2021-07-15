const card = [
    { title: 'Nauê Bernardo Pinheiro de Azevedo', text: 'Advogado e Cientista Político pela Universidade de Brasília, com especialização em Direito Público pela Escola Superior de Magistratura do Distrito Federal. Cursa o mestrado em direito privado na Università degli Studi "Mediterranea" di Reggio Calabria. Tem mais de 10 anos de experiência com análise política e Congresso Nacional. Atua em todos os graus de jurisdição, sobretudo Superior Tribunal de Justiça e Supremo Tribunal Federal.' },
    { title: 'Isaac Pereira Simas', text: 'Advogado, formado em direito pela Universidade de Brasília. Experiência em processo legislativo, legística, análise política e relações governamentais, com atuação na Câmara dos Deputados, Senado Federal e Tribunal de Contas da União. Realiza pesquisas em Direito Constitucional.' },
]

export const Team = () => {
    return (
        <>
            <section id="equipe" className="pt-20 pb-20" style={{ minHeight: "60vh", backgroundColor: "#EFE4D9" }}>
                <div className="container mx-auto px-4">
                    <div className='flex flex-wrap justify-center text-center mb-16'>
                        <div className='w-full lg:w-6/12 px-4'>
                            <h1 className='text-4xl font-semibold'>Nossa Equipe</h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:gap-16">
                        {card.map((item, index) => (
                            <div key={index} className="bg-white mb-6 shadow-lg" style={{ maxWidth: "500px" }}>
                                <blockquote className="relative p-5">
                                    <h4 className="text-xl font-bold text-black border-b-2">{item.title}</h4>
                                    <p className="mt-4 text-md leading-relaxed text-gray-600 mb-1">{item.text}</p>
                                </blockquote>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
