import './profile.css'

export default function Profile() {
    return(
        <div className="profile-card">
            <img
                className="profile-img"
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Profile"
            />
            <h2>look this profile</h2>
            <p className="title">Future Software developers🚀</p>
            <button className="btn"> like ,Follow,subscribe</button>
        </div>
    )
}
