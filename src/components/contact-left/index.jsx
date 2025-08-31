import './style.css';

function SearchCoversation(){
    return(
        <section className="search">
            <div className="row1">
                <h1 className="logotipo">EAÍ?</h1>
                <img src="/profile-user.png" alt="Ícone de perfil" className="profile" />
            </div>
            <div className="row2">
                <input type="text" name="searchCoversation" id="searchCoversation" className="searchCoversation" />
                <img src="/search-icon.png" alt="Ícone para pesquisa de conversa" className="searchIcon" />
            </div>
        </section>
    )
}

export function ContactList(){
    return(
        <section className="contact_list" id="contact_list">
            <SearchCoversation />
        </section>
    )
}