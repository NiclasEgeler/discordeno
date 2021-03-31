import { SnakeCaseProps } from "../util.ts";

export interface GetGatewayBot {
  /** The WSS URL that can be used for connecting to the gateway */
  url: string;
  /** The recommended number of shards to use when connecting */
  shards: number;
  /** Information on the current session start limit */
  sessionStartLimit: SessionStartLimit;
}

/** https://discord.com/developers/docs/topics/gateway#get-gateway-bot */
export type DiscordGetGatewayBot = SnakeCaseProps<GetGatewayBot>;
