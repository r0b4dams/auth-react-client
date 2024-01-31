import { randomBytes } from "crypto";

export function generateState(): string {
  const buf = randomBytes(32);
  return base64URLEncode(buf);
}

function base64URLEncode(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}
