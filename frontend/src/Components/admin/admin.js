import './admin.css';

export default function Admin() {
    return (
        <div className="admin">
            <div className="Username">
                <input
                    type="text"
                    placeholder="Admin Username"
                />
            </div>
            <div className="password">
                <input
                    type="password"
                    placeholder="Admin Password"
                />
            </div>
            <div className="submit">
                <button type="submit" onClick={() => {this.handleonLogin()}}>Login</button>
            </div>
        </div>
    );
}
