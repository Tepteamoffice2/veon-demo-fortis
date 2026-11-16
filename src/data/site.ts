// Facts only from veon/client.json (C-ids in comments). Nothing here is invented.
export const phone = "0-800-331303"; // C-010
export const phoneHref = "tel:0800331303";
export const email = "info@fortis.kharkov.ua";
export const emailHref = `mailto:${email}`;
export const address = "просп. Науки, 46"; // company.contacts.addresses[0]
export const addressEntrance = "вхід з вул. Отакара Яроша, 25";
export const metro = "ст. м. «Ботанічний сад»";
export const mapHref = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent("Харків, просп. Науки, 46");
export const soon = "Розділ у розробці";
export const formSoon = "Онлайн-заявка з'явиться в повній версії сайту";
export const license = "Ліцензія МОЗ АЕ638494 від 19.03.2015"; // C-011
export const socials = [
  { name: "YouTube", href: "https://www.youtube.com/channel/UCa5CmLYkG5_4aY_oktecLkA" },
  { name: "Instagram", href: "https://www.instagram.com/fortis_kharkov/" },
  { name: "Facebook", href: "https://www.facebook.com/fortis.kharkov/" },
] as const;

/** The four route steps (concept «Signature»): 1–2 teal = medicine, 3–4 orange = movement. */
export const steps = [
  { n: 1, short: "Лікар", tiny: "Лікар", kind: "med" },
  { n: 2, short: "Діагностика DAVID", tiny: "DAVID", kind: "med" },
  { n: 3, short: "Програма", tiny: "Програма", kind: "move" },
  { n: 4, short: "Фітнес-клуб", tiny: "Фітнес", kind: "move" },
] as const;
export type StepNo = 1 | 2 | 3 | 4;

/** Anchors of the homepage blocks (header, overlay menu). */
export const nav = [
  { href: "#zvernennia", label: "З чим звертаються" },
  { href: "#marshrut", label: "Лікування" },
  { href: "#napriamky", label: "Напрямки" },
  { href: "#dovira", label: "Фахівці" },
  { href: "#zapys", label: "Контакти" },
] as const;
export const navFuture = ["Розклад", "Ціни"] as const;
