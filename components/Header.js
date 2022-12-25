import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <header className="header">
      <div className="pagelinks">
        <Link href="/about" className="aboutlink">
          About Page
        </Link>
        <Link href="/" className="storelink">
          Store Page
        </Link>
      </div>
      <div className="options">
        <Button as="a" variant="primary">
          Play
        </Button>
        <Button as="a" variant="success">
          Shop
        </Button>
        <Button as="a" variant="danger">
          Select
        </Button>
        <Button as="a" variant="secondary">
          Eat
        </Button>
      </div>
      <h1>AWESOME FOOD STORE</h1>
    </header>
  );
}

//store page, about page Link 구현 및 제목 표시
