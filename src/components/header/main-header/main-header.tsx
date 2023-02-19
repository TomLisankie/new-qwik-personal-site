import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Header, HeaderType } from "~/components/header/header";

import styles from "./main-header.css?inline";

export const MainHeader = component$(() => {
  useStylesScoped$(styles);

  return (
    <Header type={HeaderType.Main}>
      <img
        class="avatar"
        src="/images/avatar.jpg"
        loading="lazy"
        alt="Thomas Lisankie"
      />
      <div class="title">
        <h1 class="name">Thomas Lisankie</h1>
        <p class="info">
          Yazılım ve diğer şeyler üzerine kişisel karalamalar
        </p>
      </div>
    </Header>
  );
});
