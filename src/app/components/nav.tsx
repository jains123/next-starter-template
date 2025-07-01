import Link from 'next/link';

export default function Nav() {
    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
