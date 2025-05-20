import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang</h1>
      <button onClick={() => signIn("berita")}>Login dengan Google</button>
    </div>
  );
}
