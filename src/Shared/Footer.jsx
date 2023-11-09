

const Footer = () => {
    return (
        <div className="bg-slate-600 text-white min-h-[400px] flex items-center">
            <footer className="footer p-10 max-w-7xl mx-auto">
            <aside>
                <img className="w-2/4" src="https://i.ibb.co/BVy8W2r/logo.png" alt="" />
                <p>Public Library<br />Providing reliable service since 2020</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        </div>
    );
};

export default Footer;