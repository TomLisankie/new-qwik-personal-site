import { component$, useStylesScoped$ } from "@builder.io/qwik";

import styles from "./footer.css?inline";

export const Footer = component$(() => {
  useStylesScoped$(styles);

  const links = [
    {
      linkProps: {
        href: "mailto:website@tomlisankie.com",
      },
      text: "mail .",
    },
    {
      linkProps: {
        href: "https://twitter.com/TomLisankie",
        target: "_blank",
        rel: "noopener",
      },
      text: "twitter .",
    },
    {
      linkProps: {
        href: "https://github.com/TomLisankie",
        target: "_blank",
        rel: "noopener",
      },
      text: "github .",
    },
    {
      linkProps: {
        href: "https://read.cv/tomlisankie",
        target: "_blank",
        rel: "noopener",
      },
      text: "cv",
    },
  ];

  return (
    <footer class="footer">
      <ul class="links">
        {links.map((link) => {
          return (
            <li class="link">
              <a {...link.linkProps}>
                <span>{link.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
});
