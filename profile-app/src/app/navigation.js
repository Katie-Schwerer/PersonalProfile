import Link from 'next/link';
import './css/navigation.css'

export default function Layout({ children }) {
    return (
        <>
            <nav>
                <div className="title-side">
                    <span className='square'></span>
                    <p><b>Katie Schwerer</b> / Web Developer</p>
                </div>
                <div className="pages-side">
                    <ul>
                        <li>
                            <Link href="/">About Me</Link>
                        </li>
                        <li>
                            <Link href="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link href="/projects">Project</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>{children}</main>
        </>
    );
}