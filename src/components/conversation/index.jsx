import "./style.css";


function InfoConversation(){
    return(
        <section className="InfoConversation">
            <img src="/profile-user-60px.webp" alt="" className="conversationPhoto" />
            <div className="info">
                <h1>NAME</h1>
                <h3>Info</h3>
            </div>
        </section>
    )
}

function TextConversationView(){
    return (
        <section className="TextView">
        </section>
    )
}


export function Conversation(){
    return(
        <section className="Conversation">
            <InfoConversation/>
        </section>
    )
}