const Header = () => {
    const view = `
        <div class="Header.main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        Rick and Morty API
                    </a>
                </h1>
                <p>by Andrés Campuzano</p>
            </div>
            <div class="header-nav" style="font-weight: bold;">
                <a href="#/about" style=" margin-right: 20px;">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
}

export default Header;