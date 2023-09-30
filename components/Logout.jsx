import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/"); // Redirect to the home page
  };

  return (
    <button className="flex items-center" onClick={handleLogout}>
      <FaSignOutAlt className="mr-2" />
      <span className="font-semibold">Logout</span>
    </button>
  );
};

export default function Component() {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect to the home page ("/") if the user is not signed in and tries to access any page other than the home page
  // React.useEffect(() => {
  //   if (!session && router.pathname !== "/") {
  //     router.push("/");
  //   }
  // }, [session, router]);

  if (!session) {
    // When the user is not signed in
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn("credentials", { callbackUrl: "/dashboard" })}>
          Sign in
        </button>
      </>
    );
  } else if (session && router.pathname !== "/") {
    // When the user is signed in and the current route pathname is not "/"
    // Disable redirection to the home page
    return (
      <>
        {/* When the user is signed in */}
        Signed in as {session.user.email} <br />
        <Logout />
      </>
    );
  }
}
