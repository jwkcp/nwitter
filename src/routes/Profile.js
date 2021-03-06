import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

const auth = getAuth();
const Profile = () => {
    const history = useHistory();

    const onLogOutClick = () => {
        auth.signOut();
        history.push("/");
    };

    return (
        <>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};

export default Profile;
