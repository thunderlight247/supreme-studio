export const CONTACT = {
  phoneDisplay: "+233 24 234 6199",
  phoneHref: "tel:+233242346199",
  whatsappNumber: "233242346199", // international format, no + or spaces
  address: "MX63+Q29, Ashaiman Klagon Road, Tema, Ghana",
  mapsUrl: "https://share.google/GyiZtGNAeoy1B9fwl",
};

export const whatsappLink = (text = "Hello Supreme Studios, I'd like to get in touch.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;

const cap = (s) => s.replace(/^./, (c) => c.toUpperCase());

export const bookingMessage = (a) =>
  [
    "Hello Supreme Studios, I'd like to book a consultation.",
    `Name: ${a.name}`,
    `Phone: ${a.phone}`,
    `Request: ${a.category}`,
    `Preferred time: ${cap(a.day)} ${a.slot}`,
  ].join("\n");
