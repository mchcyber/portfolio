export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string ; 
    eyebrow: string ; 
    description: string; 
}) => {
    return (
        <>
        <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
           about me 
        </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">An insightful look into my world</h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl">Highly motivated and detail-oriented Junior Front-End Developer</p>
        </>
    )
}

 