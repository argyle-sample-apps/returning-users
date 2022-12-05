type Params = {
  userId: string;
  accountId: string;
  linkItemId: string;
};

type Config = {
  reconnect: Params;
  dds: Params;
  mfa: Params;
};

export const config: Config = {
  reconnect: {
    userId: "",
    accountId: "",
    linkItemId: "",
  },
  mfa: {
    userId: "",
    accountId: "",
    linkItemId: "",
  },
  dds: {
    userId: "",
    accountId: "",
    linkItemId: "",
  },
};
