import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useResetQueryParam } from "../../hooks/useResetQueryParam";

const Home: NextPage = () => {
  const { resetQueryParam } = useResetQueryParam();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const code = router.query.code;

    if (code == null || Array.isArray(code)) {
      return;
    }

    (async () => {
      try {
        await fetch(`https://app.divops.kr/github-api/api/set-token`, {
          method: "POST",
          headers: {
            Authorization: code,
          },
        });
      } finally {
        resetQueryParam("code");
      }
    })();
  }, [router]);

  return (
    <div>
      <Head>
        <title>로그인</title>
      </Head>

      <main>
        <h1>로그인하기</h1>
        <button
          onClick={() => {
            location.assign(
              `https://app.divops.kr/github-api/request?referrer=${location.href}`
            );
          }}
        >
          로그인
        </button>
      </main>
    </div>
  );
};

export default Home;
