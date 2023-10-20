import Link from "next/link";
import ProductCard from "@/app/components/ProductCard";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import coffee from "@/public/images/coffee.jpg"
import Image from "next/image";

export default async function Home() {

    const session = await getServerSession(authOptions)

    return (
        <main>
            {/*<Image src={coffee} alt="coffee"/>*/}
            <Image
                src={"https://bit.ly/react-cover"}
                alt="cover"
                // fill={true} // responsive
                // className="object-cover"
                width={300}
                height={170}
            />
            {/*<h1>Hello World {session && <span>{session.user!.name} ({session.user!.email})</span>}</h1>*/}
            {/*<Link href="/users">Users</Link>*/}
            {/*<ProductCard/>*/}
        </main>
    )
}
