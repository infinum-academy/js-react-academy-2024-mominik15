'use client';

import { Main } from "@/components/core/Main/Main";
import { ShowsList } from "@/components/shared/ShowsList/ShowsList";

export default function Home() {
  return (
    <Main>
      <ShowsList topRated={true} />
    </Main>
  );
}
