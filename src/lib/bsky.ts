import { CredentialManager, XRPC } from "@atcute/client";

export const MY_DID = "did:plc:p2cp5gopk7mgjegy6wadk3ep";
export const MY_PDS = "https://amanita.us-east.host.bsky.network";

const handler = new CredentialManager({ service: MY_PDS, fetch });
export const bsky = new XRPC({ handler });
