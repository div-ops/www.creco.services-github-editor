import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
              `https://app.divops.kr/login/test-login?referrer=${location.href}`
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
