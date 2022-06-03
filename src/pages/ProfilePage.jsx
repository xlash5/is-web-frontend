import useLocalStorage from "../hooks/useLocalStorage";

export default () => {
  const [user, setUser] = useLocalStorage("JWT", null);
  return <>
    <h1>
      {user ? JSON.stringify(user) : "No user"}
    </h1>
  </>;
};
