export const deployedContracts: {
  [key: string]: {
    profile?: string;
    challenge?: string;
    verifier?: string;
  };
} = {
  mumbai: {
    profile: "0xb82c3E0C47eF5B02e7A3063623c789Ed072CEB6F",
    challenge: "0xf3048092E1DFA15FdAAD7837590B813fC035F257",
    verifier: "0xC2BAA338EEea355f23b2BbD0FB2Fd10f4a41794A",
  },
  "5ireTestnet": {
    profile: "0x96E6AF6E9e400d0Cd6a4045F122df22BCaAAca59",
  },
  mantleTestnet: {
    profile: "0x7Ef7683492D7a610A2ceaE6743B97788EE657bD5",
  },
  xdcTestnet: {},
};
