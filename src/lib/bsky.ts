import { CredentialManager, XRPC } from "@atcute/client";

export const MY_DID = "did:plc:adgodmx5hrrdiz4bvgcbfas3";
export const MY_PDS = "https://conocybe.us-west.host.bsky.network";

const handler = new CredentialManager({ service: MY_PDS, fetch });
export const bsky = new XRPC({ handler });
