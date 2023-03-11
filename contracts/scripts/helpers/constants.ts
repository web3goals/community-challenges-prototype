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
    challenge: "0x1e4712A93beEc0aa26151CF44061eE91DD56f921",
    verifier: "0x7Aba7fF10bC3DB6FA82d6b23f5492A7F274101f2",
  },
  mantleTestnet: {
    profile: "0x7Ef7683492D7a610A2ceaE6743B97788EE657bD5",
    challenge: "0xFB22c49674E4482C22D4499392a8e2f760D84f8d",
    verifier: "0x4518BA8A80a1555402A4c75D631c36338b5b58c4",
  },
  xdcTestnet: {
    profile: "0x96E6AF6E9e400d0Cd6a4045F122df22BCaAAca59",
    challenge: "0xFe0AeD5cBEE89869FF505e10A5eBb75e9FC819D7",
    verifier: "0x2168609301437822c7AD3f35114B10941866F20a",
  },
};
