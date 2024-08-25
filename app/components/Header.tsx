import Image from "next/image";

export default function Header() {
    return (
        <section className="flex justify-evenly items-center">
            <Image 
                alt="Logo"
                src='/logo.webp'
                width={200}
                height={200}
            />
            <div>
                <h1 className="font-title text-title hover:text-hover">
                    Mari
                </h1>
                <p>a software company</p>
            </div>
        </section>
    );
}