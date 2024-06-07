import Link from "next/link";

export default function Teste(){
    return(
        <div>
            <p>Minha página de teste</p>
            <Link href={"./"}>voltar</Link>
        </div>
    );
}