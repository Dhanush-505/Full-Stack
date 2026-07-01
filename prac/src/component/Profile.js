import UserInfo from "./UserInfo";

function Profile({ user }) {
 return (
   <div>
     <UserInfo user={user} />
   </div>
 );
}

export default Profile;
