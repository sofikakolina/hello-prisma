
import Link from "next/link"

interface ComebackProps {
    href: string;
}

const Comeback = ( {href}: ComebackProps ) => {
  return (
    <Link className="comeback" href={href || "/"}>Назад</Link>
  )
}

export default Comeback
