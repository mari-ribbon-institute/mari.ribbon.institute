import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ZarniHlawn from '../resources/Members/ZarniHlawn.webp';

interface Role {
    founder: string;
    member: string;
}

interface Member {
    image: StaticImageData;
    name: string;
    role: string;
    link: string;
}

export default function Team() {
    
    const roles: Role = {
        founder: 'Founder',
        member: 'Member',
    };

    const members: Member[] = [
        {
            image: ZarniHlawn,
            name: 'Zarni Hlawn',
            role: roles.founder,
            link: 'https://github.com/zarnihlawn',
        },
    ];

    return (
        <main>
            <h2 className="text-pageTitle font-semibold mb-5">Members</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3">
                {members.map((member: Member, index: number) => (
                    <Link
                        key={index}
                        href={member.link}
                        target="_blank"
                        aria-label={`Visit ${member.name}'s GitHub profile`}
                    >
                        <div className="flex flex-col justify-center items-center p-5 rounded-2xl hover:bg-hover">
                            <Image
                                className="rounded-xl mb-3"
                                src={member.image}
                                alt={member.name}
                                width={200}
                                height={200}
                                priority
                            />
                            <h3 className="mb-2">
                                Name : <span className="font-bold">{member.name}</span>
                            </h3>
                            <p className="">
                                Role : <span className="font-bold">{member.role}</span>
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
};
