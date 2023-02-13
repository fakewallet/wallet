import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";

const globals: any = {
    web3wallet: undefined,
};

Web3Wallet.init({
    core: new Core({
        projectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID,
    }),
    metadata: {
        name: "FakeWallet",
        description: "TODO",
        url: "www.walletconnect.com",
        icons: [],
    },
}).then((web3wallet) => {
    globals.web3wallet = web3wallet;
});

export default globals;