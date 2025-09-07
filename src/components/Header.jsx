import ChefKhanzIcon from '/chef-claude-icon.png';

export default function Header() {
    return (
        <header className="header">
            <img src={ChefKhanzIcon} alt="Chef Khanz Logo" className="header-icon" />
            <h1 className="header-title">Chef Khanz</h1>
            {/* <p className="header-subtitle">Your Personal Recipe Assistant</p> */}
        </header>
    )
}