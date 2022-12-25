import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return <div>Not Valid!</div>;
}
// 5초 후에 home 경로로 이동.
