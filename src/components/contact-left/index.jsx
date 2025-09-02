import './style.css';

function TopProfile(){
    return(
        <section className="TopProfile">
            <h1 className="logotipo">EAÍ?</h1>
            <img src="/profile-user-45px.webp" alt="Ícone de perfil pessoal" className='profileIcon'/>
        </section>
    )
}

function SearchCoversation(){
    return(
        <section className="SearchCoversation">
            <img src="/search-icon-45px.webp" alt="Ícone para pesquisa de conversa" className='searchIcon'/>
            <input type="text" name="searchCoversationText" id="searchCoversationText" className="searchCoversationText" />
        </section>
    )
}

function Contacts(){
    const contactList = []
    return(
        <section className="Contacts">
            {contactList.map((item, index) => (
                <div className={`${item.type?`group`:`contact`}_${item.id} row`} key={item.id}>
                    <img src={item.profilePhoto} alt={`${item.name || item.phoneNum}'s photo`} className={`${item.type?`group`:`contact`}_icon_${item.id} icon`} />
                    <div className={`${item.type?`group`:`contact`}_detail_${item.id} details`}>

                        <h1 className={`${item.type?`group`:`contact`}_name_${item.id} name_${item.type?"group":"contact"}`}>
                            {item.name}
                        </h1>

                        <h3 className={`${item.type?`group`:`contact`}_last_message_${item.id} last_message`}>
                            {item.lastPersonMessage?`${item.lastPersonMessage}: `:""}{item.lastMessage}
                        </h3>
                    </div>
                </div>
            ))}
        </section>
    )
}

function BottomOptions(){
    return(
        <section className="BottomOptions">
            <img src="/new-message.webp" alt="" className="bottomIcon new_messagens" />
            <img src="/settings.webp" alt="" className="bottomIcon settings" />
            <img src="/dots.webp" alt="" className="bottomIcon menu" />
        </section>
    )
}


export function ContactList(){
    return(
        <section className="contact_list" id="contact_list">
            <TopProfile/>
            <SearchCoversation/>
            <Contacts/>
            <BottomOptions/>
        </section>
    )
}