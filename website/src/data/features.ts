export type Status =
  | "VERIFIED"
  | "PARTIALLY VERIFIED"
  | "PLANNED"
  | "NOT VERIFIED";

export interface Feature {
  name: string;
  status: Status;
  summary: string;
  evidence: string;
  api?: string;
}

export const verifiedOn = "2026-11-02";
export const toolchainVersion = "1.1.0";
export const toolchainArchive = "rudra-linux-x86_64.tar.gz";
export const toolchainSha256 =
  "3da546bae30161456698504bc779470881c4f8219d8154766391dcc9ce9fcd2f";

export const features: Feature[] = [
  {
    name: "Compile and run a program",
    status: "VERIFIED",
    summary:
      "The shipped v1.1.0 compiler builds a .rux source file into a native Linux binary and runs it.",
    evidence:
      "rudrac hello.rux --run produced the program output with exit code 0.",
    api: "rudrac <file.rux> [--run] [-o name]"
  },
  {
    name: "OS threads",
    status: "VERIFIED",
    summary:
      "spawn runs a function on a real operating-system thread.",
    evidence:
      "A spawn(worker, 42) program compiled and ran; an OS-level trace showed a real clone call with the CLONE_THREAD flag.",
    api: "spawn(fn, arg)"
  },
  {
    name: "Mutex",
    status: "PARTIALLY VERIFIED",
    summary:
      "A mutex type with lock and unlock exists and runs in a single-threaded program.",
    evidence:
      "mutex_new, lock, unlock compiled and ran with exit code 0. Cross-thread contention correctness was not independently proven in this verification.",
    api: "mutex_new(); lock(m); unlock(m)"
  },
  {
    name: "Channels",
    status: "PARTIALLY VERIFIED",
    summary:
      "Message-passing channels exist. The working functions are chan_new, chan_send and chan_recv.",
    evidence:
      "A chan_new / chan_send / chan_recv program sent and received the value 7 with exit code 0. Note: functions named send and recv do not exist in the shipped binary.",
    api: "chan_new(); chan_send(c, v); chan_recv(c)"
  },
  {
    name: "HTTP client (http_get)",
    status: "PARTIALLY VERIFIED",
    summary:
      "http_get exists and opens a real TCP connection. It requires a numeric IP address: hostname resolution (DNS) is not implemented, and HTTPS/TLS is not implemented.",
    evidence:
      "http_get compiled and, under an OS-level trace, opened a TCP socket and issued a connect. A hostname URL resolved to 0.0.0.0 (no DNS). A numeric-IP URL issued a real connect to that address.",
    api: "http_get(url)"
  },
  {
    name: "JSON reading",
    status: "PARTIALLY VERIFIED",
    summary:
      "JSON object reading works via json_get. A function named json_parse does not exist in the shipped binary.",
    evidence:
      "json_get on a JSON object literal returned the expected value 42 with exit code 0. json_len and json_at exist but their argument shapes differed from the distribution notes; a fully working array read was not confirmed in this verification.",
    api: "json_get(jsonText, key)"
  },
  {
    name: "Hostname resolution (DNS)",
    status: "NOT VERIFIED",
    summary: "DNS / hostname resolution is documented as roadmap and was not observed.",
    evidence:
      "A hostname URL passed to http_get resolved to 0.0.0.0, indicating no DNS resolution in the shipped binary."
  },
  {
    name: "HTTPS / TLS",
    status: "PLANNED",
    summary: "Secure transport is documented as roadmap and is not present in the shipped client.",
    evidence: "Documented as roadmap; no TLS behavior was exercised in this verification."
  }
];
