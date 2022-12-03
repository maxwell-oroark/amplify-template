import { Button } from "antd";

export default function Projects({ user, signOut }) {
  console.log(user);
  return (
    <header className="App-header">
      {user && <div>Logged in as {user.attributes.email}</div>}
      <Button type="link" onClick={signOut}>
        Log out
      </Button>
    </header>
  );
}
