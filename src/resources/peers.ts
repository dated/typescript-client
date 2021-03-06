import { IResponse } from "../interfaces";
import { AllPeersApiQuery } from "../resourcesTypes/peers";
import { Resource } from "./resource";

/**
 * The `peers` resource is much like the `node` resource, but only exposes the IPs and ports of connected peers.
 *
 * Recursively traversing this API and its responses allow you to inspect the entire network.
 */
export class Peers extends Resource {
	/**
	 * List All Peers
	 *
	 * Returns all peers known by the Node. These are not necessarily all peers; only public Nodes appear here.
	 */
	public async all<T = any>(query?: AllPeersApiQuery): Promise<IResponse<T>> {
		return this.sendGet("peers", query);
	}

	/**
	 * Retrieve a Peer
	 *
	 * Specific peers can be found by IP address.
	 *
	 * Note that a peer may have their Public API disabled, and thus they are only reachable by the internal `p2p` API.
	 *
	 * @param ip The IP address of the peer to be retrieved.
	 */
	public async get<T = any>(ip: string): Promise<IResponse<T>> {
		return this.sendGet(`peers/${ip}`);
	}
}
