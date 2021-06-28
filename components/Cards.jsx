import Image from 'next/image';

const card = [
    { title: 'Direito Privado', text: 'Atuação especializada em solução de conflitos privados, na área familiar ou empresarial. Atuação perante instâncias judiciais, bem como formulação de estratégias e viabilização de solução extrajudicial de controvérsias. A atuação inclui acompanhamento para divórcio, inventários, elaboração e interpretação de contratos e demais soluções sob consulta.', image: '/image-01-cropped.jpg' },
    { title: 'Tribunais Superiores', text: 'Proposição e acompanhamento de medidas perante as instâncias superiores brasileiras, em especial Superior Tribunal de Justiça e Supremo Tribunal Federal. Inclui elaboração de recursos, medidas originárias, memoriais e demais medidas para levar o debate a estas instâncias e buscar as soluções da forma mais personalizada e técnica possível para clientes.', image: '/image-02-cropped.png' },
    { title: 'Direito Associativo e Entidades de Terceiro Setor', text: 'Atuação consultiva e contenciosa para entidades do terceiro setor e associações. Inclui elaboração e análise de estatutos, acompanhamento para constituição de associações, apoio jurídico para elaboração e acompanhamento de ações e litigância estratégica.', image: '/image-03-cropped.png' },
    { title: 'Poder Legislativo', text: 'Atuação consultiva junto ao Poder Legislativo, com a elaboração de pareceres, notas técnicas, intervenções pontuais junto a parlamentares e construção de relacionamento. Também inclui a elaboração e acompanhamento de projetos de lei, emendas e demais atos técnicos do Poder Legislativo para gabinetes e parlamentares, bem como proposição e atuação junto ao Poder Judiciário de medidas atinentes ao direito legislativo.', image: '/image-04-cropped.png' },
    { title: 'Direito Penal e Improbidade Administrativa', text: 'Defesa e Assessoria em inquéritos e ações penais em primeira e segunda instância, bem como nos Tribunais Superiores e Supremo Tribunal Federal. Confecção de peças de defesa, preparação e acompanhamento de oitivas e procedimentos administrativos preliminares. Acompanhamento e assistência em sindicâncias, processos administrativos disciplinares e Ações de Improbidade Administrativa.', image: '/image-05.png' }
]

export const Cards = () => {
    return (
        <>
            <section id="atuacao" className="pt-20 pb-20">
                <div className="container mx-auto px-5">
                    <div className='flex flex-wrap justify-center text-center mb-24'>
                        <div className='w-full lg:w-full px-4'>
                            <h1 className='text-4xl font-semibold break-words'>Áreas de Atuação</h1>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center lg:gap-4">
                        {card.map((item, index) => (
                            <div key={index} className="bg-white mb-6 shadow-lg rounded-lg w-auto lg:max-w-sm">
                                <Image alt="..." src={item.image} width={500} height={500} className="w-full max-h-full align-middle rounded-t-lg" />
                                <blockquote className="relative p-5">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block"
                                        style={{
                                            height: "95px",
                                            top: "-94px"
                                        }}>
                                        <polygon points="-30,95 583,95 583,65" className="text-white fill-current"></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-black">{item.title}</h4>
                                    <p className="text-md mt-4 mb-1 leading-relaxed text-gray-600">{item.text}</p>
                                </blockquote>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}
